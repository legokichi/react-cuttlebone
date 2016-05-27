React = require 'react'
$ = require "jquery"

class SuperComponent extends React.Component
  getStyle: ->
    {style} = @props
    $.extend(true, {}, @constructor.prototype.style, style)
  validate: ->
  validateChildrenAtLeastCount: (count, errorMessage)->
    {children} = @props
    if React.Children.count(children) > count
      throw new Error(errorMessage)
  validateChildrenTypes: (types, errorMessage)->
    {children} = @props
    unless React.Children.toArray(children).every((child)-> types.some (type)-> child.type is type)
      throw new Error(errorMessage)


class Doc extends SuperComponent
  style:
    display: "block"
    position: "static"
    boxSizing: "border-box"
  render: ->
    @validate()
    React.createElement("div", {style: @getStyle()}, @props.children)


class Layer extends SuperComponent
  style:
    display: "inline-block"
    position: "absolute"
    boxSizing: "border-box"
    margin: "0px"
    border: "none"
    padding: "0px"
  validate: ->
    {width, height, top, bottom, left, right} = @props
    if top? and bottom? then throw new Error("Layer can have only property top or bottom")
    if left? and right? then throw new Error("Layer can have only property left or right")
    # set default val
    if !width? then width = 0
    if !height? then height = 0
    if !top? and !bottom? then top = 0
    if !left? and !right? then left = 0
    @validateChildrenAtLeastCount(1, "Layer can only have zero or one child")
    @validateChildrenTypes([Doc, LayerSet], "Layer can only have Doc, LayerSet element")
    for key, val of {width, height, top, bottom, left, right} when val?
      if !isFinite(Number(val)) then throw new Error("Box #{key}: #{val} is not number")
    return
  getStyle: ->
    style = super()
    {width, height, top, bottom, left, right} = @props
    for key, val of {width, height, top, bottom, left, right} when val?
      style[key] = "#{val}px"
    style
  render: ->
    @validate()
    React.createElement("div", {style: @getStyle()}, @props.children)


class LayerSet extends SuperComponent
  componentDidMount: ->
    that = this
    elm = ReactDOM.findDOMNode(@)
    {hover} = @props
    if !hover? then hover = true # set default
    if hover
      $(elm).on "click", "*", (ev)->
        return unless $(elm).children().has(@)
        id = $(elm).children().index(@)
        target = that.props.children.splice(id, 1)
        that.props.children.push(target)
        # setTimeoutしないと要素入れ替えが発生しイベントが上の階層まで伝播しない
        setTimeout ->
          that.forceUpdate()
  componentWillUnmount: ->
    $(ReactDOM.findDOMNode(@)).off("click")
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
    @validateChildrenTypes([Layer], "LayerSet can only have children of Layer elements")
  render: ->
    @validate()
    React.createElement("div", {style: @getStyle()}, @props.children)


class Cuttlebone extends SuperComponent
  style:
    display: "block"
    position: "static"
    boxSizing: "border-box"
  validate: ->
    @validateChildrenAtLeastCount(1, "Cuttlebone can only have one child")
    @validateChildrenTypes([LayerSet], "Cuttlebone can only have children of LayerSet element")
  render: ->
    @validate()
    React.createElement("div", {style: @getStyle()}, @props.children)

console.dir Layer
module.exports = {
  Doc
  Layer
  LayerSet
  Cuttlebone
}