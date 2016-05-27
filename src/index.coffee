React = require 'react'
ReactDOM = require 'react-dom'
$ = require "jquery"
co = require "co"
EventEmitter = require "eventemitter2"
c  = require "./Components"


$ ->
  ReactDOM.render(
    React.createElement(c.Cuttlebone, {style:{width:"500px", height:"500px", border:"1px solid"}},
      React.createElement(c.LayerSet, {}, [#nameds
        React.createElement(c.Layer, {key:0, bottom:0, right:0},
          React.createElement(c.LayerSet, {}, [#scopes
            React.createElement(c.Layer, {key:0, bottom:0, right:10, width:100, height:200},
              React.createElement(c.LayerSet, {hover:false}, [#scope0
                React.createElement(c.Layer, {key:0, top:0, left:0, width:100, height:200, style:{backgroundColor:"red"}},
                  React.createElement(c.Doc, {}, "shell") )
                React.createElement(c.Layer, {key:1, top:0, left:-90, width:100, height:60, style:{backgroundColor:"green"}},
                  React.createElement(c.Doc, {}, "balloon") )
              ])
            )
            React.createElement(c.Layer, {key:1, bottom:0, right:120, width:100, height:100},
              React.createElement(c.LayerSet, {hover:false}, [#scope1
                React.createElement(c.Layer, {key:0, top:0, left:0, width:100, height:100, style:{backgroundColor:"red"}},
                  React.createElement(c.Doc, {}, "shell") )
                React.createElement(c.Layer, {key:1, top:0, left:90, width:100, height:60, style:{backgroundColor:"green"}},
                  React.createElement(c.Doc, {}, "balloon") )
              ])
            )
          ])
        )
        React.createElement(c.Layer, {key:1, bottom:0, right:200},
          React.createElement(c.LayerSet, {}, [#scopes
            React.createElement(c.Layer, {key:0, bottom:0, right:10, width:100, height:200},
              React.createElement(c.LayerSet, {hover:false}, [#scope0
                React.createElement(c.Layer, {key:0, top:0, left:0, width:100, height:200, style:{backgroundColor:"red"}},
                  React.createElement(c.Doc, {}, "shell") )
                React.createElement(c.Layer, {key:1, top:0, left:-90, width:100, height:60, style:{backgroundColor:"green"}},
                  React.createElement(c.Doc, {}, "balloon") )
              ])
            )
            React.createElement(c.Layer, {key:1, bottom:0, right:120, width:100, height:100},
              React.createElement(c.LayerSet, {hover:false}, [#scope1
                React.createElement(c.Layer, {key:0, top:0, left:0, width:100, height:100, style:{backgroundColor:"red"}},
                  React.createElement(c.Doc, {}, "shell") )
                React.createElement(c.Layer, {key:1, top:0, left:90, width:100, height:60, style:{backgroundColor:"green"}},
                  React.createElement(c.Doc, {}, "balloon") )
              ])
            )
          ])
        )
      ])
    ),
    document.getElementById("content") )



console.log("ok")