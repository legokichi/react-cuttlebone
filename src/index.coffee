React = require 'react'
ReactDOM = require 'react-dom'
$ = require "jquery"

###
  <Doc>
    Naitive Documents
  </Doc>
  actually webview
###
class Doc extends React.Component
  style:
    display: "block"
    position: "static"
    boxSizing: "border-box"
  validate: ->
  render: ->
    @validate()
    {children, style} = @props
    style = $.extend(true, {}, @constructor.prototype.style, style)
    React.createElement("div", {style}, children)


###
  <Box top|bottom=0, left|right=0, width=0, height=0>
    <Doc />
  </Box>
  Box is inline-block or <img /> like inline element as have width and height   
###
class Box extends React.Component
  style:
    display: "inline-block"
    position: "absolute"
    boxSizing: "border-box"
    margin: "0px"
    border: "none"
    padding: "0px"
  validate: ->
    {children, width, height, top, bottom, left, right} = @props
    if top? and bottom? then throw new Error("Box can have only property top or bottom")
    if left? and right? then throw new Error("Box can have only property left or right")
    if !width? then width = 0
    if !height? then height = 0
    if !top? and !bottom? then top = 0
    if !left? and !right? then left = 0
    if React.Children.count(children) > 1
      throw new Error("Box can only have zero or one child")
    if React.Children.toArray(children).some((child)-> child.type isnt Doc)
      throw new Error("Box can only have Doc element")
    offset = {width, height, top, bottom, left, right}
    Object.keys(offset).forEach (key)->
      n = offset[key]
      if !n? then return
      if !isFinite(Number(n)) then throw new Error("Box #{n}: #{typeof n} is not number")
  render: ->
    @validate()
    {children, style, width, height, top, bottom, left, right} = @props
    style = $.extend(true, {}, @constructor.prototype.style, style)
    offset = {width, height, top, bottom, left, right}
    # normalize
    Object.keys(offset).forEach (key)->
      n = offset[key]
      if !n? then return
      style[key] = "#{n}px"
    React.createElement("div", {style}, children)


###
  <CanvasBox top|bottom=0, left|right=0, width=0, height=0 />
  canvas element   
###
class CanvasBox extends Box
  validate: ->
    super()
    {children} = @props
    if React.Children.count(children) > 0
      throw new Error("Box cannot have any children")
  render: ->
    @validate()
    {children, style, width, height, top, bottom, left, right} = @props
    style = $.extend(true, {}, @constructor.prototype.style, style)
    offset = {width, height, top, bottom, left, right}
    # normalize
    Object.keys(offset).forEach (key)->
      n = offset[key]
      if !n? then return
      style[key] = "#{n}px"
    React.createElement("canvas", {style, width, height})

###
  <Layer>
    <Box />|<CanvasBox />
  </Layer>
###
class Layer extends React.Component
  style:
    display: "block"
    position: "absolute"
    top: "0px"
    left: "0px"
    boxSizing: "border-box"
    width: "100%"
    height: "100%"
    margin: "0px"
    border: "none"
    padding: "0px"
  validate: ->
    {children} = @props
    if React.Children.count(children) isnt 1
      console.error(children)
      throw new Error("LayerSet can only have one child")
    if React.Children.toArray(children).some((child)-> child.type isnt Box and child.type isnt CanvasBox)
      console.error(children)
      throw new Error("LayerSet can only have Box element")
  render: ->
    @validate()
    {children} = @props
    style = $.extend(true, {}, @constructor.prototype.style, style)
    React.createElement("div", {style}, children)


###
  <LayerSet>
    <Layer />
    <Layer />
    ...
  </LayerSet>
###
class LayerSet extends React.Component
  style:
    display: "block"
    position: "relative"
    boxSizing: "border-box"
    width: "100%"
    height: "100%"
    margin: "0px"
    border: "none"
    padding: "0px"
  validate: ->
    {children} = @props
    unless React.Children.toArray(children).every((child)-> child.type is Layer)
      throw new Error("LayerSet can only have children of Layer element")
  render: ->
    @validate()
    {children, style} = @props
    style = $.extend(true, {}, @constructor.prototype.style, style)
    # ↓この処理必要？ 
    children = React.Children.map children, (child, i)-> 
      React.cloneElement(child, {key: i, index: i})
    React.createElement("div", {style}, children)

###
    <Cuttlebone>
      <LayerSet />|<Doc />
    </Cuttlebone>
    the top level component of react-cuttlebone
###
class Cuttlebone extends React.Component
  style:
    display: "block"
    position: "static"
    boxSizing: "border-box"
  validate: ->
  render: ->
    @validate()
    {children, style} = @props
    style = $.extend(true, {}, @constructor.prototype.style, style)
    React.createElement("div", {style}, children)


$ ->
  ReactDOM.render(
    React.createElement(Cuttlebone, {style:{width:"300px", height:"300px", border:"1px solid"}},
      React.createElement(LayerSet, {}, [
        React.createElement(Layer, {key:0},
          React.createElement(Box, {top:10, left:10, width:100, height: 100},
            React.createElement(Doc, {style:{border:"1px solid"}}, "text0") ) ),
        React.createElement(Layer, {key:1},
          React.createElement(Box, {bottom:10, right:10, width:100, height:100},
            React.createElement(Doc, {style:{border:"1px solid"}}, "text0") ) ),
        React.createElement(Layer, {key:2},
          React.createElement(CanvasBox, {top:10, right:10, width:100, height:100, style:{border:"1px solid"}}) )
      ])
    ),
    document.getElementById("content"))



console.log("ok")