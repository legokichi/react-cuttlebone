/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./src/index.coffee ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	var $, Box, CanvasBox, Cuttlebone, Doc, Layer, LayerSet, React, ReactDOM,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	React = __webpack_require__(/*! react */ 1);
	
	ReactDOM = __webpack_require__(/*! react-dom */ 2);
	
	$ = __webpack_require__(/*! jquery */ 3);
	
	
	/*
	  <Doc>
	    Naitive Documents
	  </Doc>
	  actually webview
	 */
	
	Doc = (function(superClass) {
	  extend(Doc, superClass);
	
	  function Doc() {
	    return Doc.__super__.constructor.apply(this, arguments);
	  }
	
	  Doc.prototype.style = {
	    display: "block",
	    position: "static",
	    boxSizing: "border-box"
	  };
	
	  Doc.prototype.validate = function() {};
	
	  Doc.prototype.render = function() {
	    var children, ref, style;
	    this.validate();
	    ref = this.props, children = ref.children, style = ref.style;
	    style = $.extend(true, {}, this.constructor.prototype.style, style);
	    return React.createElement("div", {
	      style: style
	    }, children);
	  };
	
	  return Doc;
	
	})(React.Component);
	
	
	/*
	  <Box top|bottom=0, left|right=0, width=0, height=0>
	    <Doc />
	  </Box>
	  Box is inline-block or <img /> like inline element as have width and height
	 */
	
	Box = (function(superClass) {
	  extend(Box, superClass);
	
	  function Box() {
	    return Box.__super__.constructor.apply(this, arguments);
	  }
	
	  Box.prototype.style = {
	    display: "inline-block",
	    position: "absolute",
	    boxSizing: "border-box",
	    margin: "0px",
	    border: "none",
	    padding: "0px"
	  };
	
	  Box.prototype.validate = function() {
	    var bottom, children, height, left, offset, ref, right, top, width;
	    ref = this.props, children = ref.children, width = ref.width, height = ref.height, top = ref.top, bottom = ref.bottom, left = ref.left, right = ref.right;
	    if ((top != null) && (bottom != null)) {
	      throw new Error("Box can have only property top or bottom");
	    }
	    if ((left != null) && (right != null)) {
	      throw new Error("Box can have only property left or right");
	    }
	    if (width == null) {
	      width = 0;
	    }
	    if (height == null) {
	      height = 0;
	    }
	    if ((top == null) && (bottom == null)) {
	      top = 0;
	    }
	    if ((left == null) && (right == null)) {
	      left = 0;
	    }
	    if (React.Children.count(children) > 1) {
	      throw new Error("Box can only have zero or one child");
	    }
	    if (React.Children.toArray(children).some(function(child) {
	      return child.type !== Doc;
	    })) {
	      throw new Error("Box can only have Doc element");
	    }
	    offset = {
	      width: width,
	      height: height,
	      top: top,
	      bottom: bottom,
	      left: left,
	      right: right
	    };
	    return Object.keys(offset).forEach(function(key) {
	      var n;
	      n = offset[key];
	      if (n == null) {
	        return;
	      }
	      if (!isFinite(Number(n))) {
	        throw new Error("Box " + n + ": " + (typeof n) + " is not number");
	      }
	    });
	  };
	
	  Box.prototype.render = function() {
	    var bottom, children, height, left, offset, ref, right, style, top, width;
	    this.validate();
	    ref = this.props, children = ref.children, style = ref.style, width = ref.width, height = ref.height, top = ref.top, bottom = ref.bottom, left = ref.left, right = ref.right;
	    style = $.extend(true, {}, this.constructor.prototype.style, style);
	    offset = {
	      width: width,
	      height: height,
	      top: top,
	      bottom: bottom,
	      left: left,
	      right: right
	    };
	    Object.keys(offset).forEach(function(key) {
	      var n;
	      n = offset[key];
	      if (n == null) {
	        return;
	      }
	      return style[key] = n + "px";
	    });
	    return React.createElement("div", {
	      style: style
	    }, children);
	  };
	
	  return Box;
	
	})(React.Component);
	
	
	/*
	  <CanvasBox top|bottom=0, left|right=0, width=0, height=0 />
	  canvas element
	 */
	
	CanvasBox = (function(superClass) {
	  extend(CanvasBox, superClass);
	
	  function CanvasBox() {
	    return CanvasBox.__super__.constructor.apply(this, arguments);
	  }
	
	  CanvasBox.prototype.validate = function() {
	    var children;
	    CanvasBox.__super__.validate.call(this);
	    children = this.props.children;
	    if (React.Children.count(children) > 0) {
	      throw new Error("Box cannot have any children");
	    }
	  };
	
	  CanvasBox.prototype.render = function() {
	    var bottom, children, height, left, offset, ref, right, style, top, width;
	    this.validate();
	    ref = this.props, children = ref.children, style = ref.style, width = ref.width, height = ref.height, top = ref.top, bottom = ref.bottom, left = ref.left, right = ref.right;
	    style = $.extend(true, {}, this.constructor.prototype.style, style);
	    offset = {
	      width: width,
	      height: height,
	      top: top,
	      bottom: bottom,
	      left: left,
	      right: right
	    };
	    Object.keys(offset).forEach(function(key) {
	      var n;
	      n = offset[key];
	      if (n == null) {
	        return;
	      }
	      return style[key] = n + "px";
	    });
	    return React.createElement("canvas", {
	      style: style,
	      width: width,
	      height: height
	    });
	  };
	
	  return CanvasBox;
	
	})(Box);
	
	
	/*
	  <Layer>
	    <Box />|<CanvasBox />
	  </Layer>
	 */
	
	Layer = (function(superClass) {
	  extend(Layer, superClass);
	
	  function Layer() {
	    return Layer.__super__.constructor.apply(this, arguments);
	  }
	
	  Layer.prototype.style = {
	    display: "block",
	    position: "absolute",
	    top: "0px",
	    left: "0px",
	    boxSizing: "border-box",
	    width: "100%",
	    height: "100%",
	    margin: "0px",
	    border: "none",
	    padding: "0px"
	  };
	
	  Layer.prototype.validate = function() {
	    var children;
	    children = this.props.children;
	    if (React.Children.count(children) !== 1) {
	      console.error(children);
	      throw new Error("LayerSet can only have one child");
	    }
	    if (React.Children.toArray(children).some(function(child) {
	      return child.type !== Box && child.type !== CanvasBox;
	    })) {
	      console.error(children);
	      throw new Error("LayerSet can only have Box element");
	    }
	  };
	
	  Layer.prototype.render = function() {
	    var children, style;
	    this.validate();
	    children = this.props.children;
	    style = $.extend(true, {}, this.constructor.prototype.style, style);
	    return React.createElement("div", {
	      style: style
	    }, children);
	  };
	
	  return Layer;
	
	})(React.Component);
	
	
	/*
	  <LayerSet>
	    <Layer />
	    <Layer />
	    ...
	  </LayerSet>
	 */
	
	LayerSet = (function(superClass) {
	  extend(LayerSet, superClass);
	
	  function LayerSet() {
	    return LayerSet.__super__.constructor.apply(this, arguments);
	  }
	
	  LayerSet.prototype.style = {
	    display: "block",
	    position: "relative",
	    boxSizing: "border-box",
	    width: "100%",
	    height: "100%",
	    margin: "0px",
	    border: "none",
	    padding: "0px"
	  };
	
	  LayerSet.prototype.validate = function() {
	    var children;
	    children = this.props.children;
	    if (!React.Children.toArray(children).every(function(child) {
	      return child.type === Layer;
	    })) {
	      throw new Error("LayerSet can only have children of Layer element");
	    }
	  };
	
	  LayerSet.prototype.render = function() {
	    var children, ref, style;
	    this.validate();
	    ref = this.props, children = ref.children, style = ref.style;
	    style = $.extend(true, {}, this.constructor.prototype.style, style);
	    children = React.Children.map(children, function(child, i) {
	      return React.cloneElement(child, {
	        key: i,
	        index: i
	      });
	    });
	    return React.createElement("div", {
	      style: style
	    }, children);
	  };
	
	  return LayerSet;
	
	})(React.Component);
	
	
	/*
	    <Cuttlebone>
	      <LayerSet />|<Doc />
	    </Cuttlebone>
	    the top level component of react-cuttlebone
	 */
	
	Cuttlebone = (function(superClass) {
	  extend(Cuttlebone, superClass);
	
	  function Cuttlebone() {
	    return Cuttlebone.__super__.constructor.apply(this, arguments);
	  }
	
	  Cuttlebone.prototype.style = {
	    display: "block",
	    position: "static",
	    boxSizing: "border-box"
	  };
	
	  Cuttlebone.prototype.validate = function() {};
	
	  Cuttlebone.prototype.render = function() {
	    var children, ref, style;
	    this.validate();
	    ref = this.props, children = ref.children, style = ref.style;
	    style = $.extend(true, {}, this.constructor.prototype.style, style);
	    return React.createElement("div", {
	      style: style
	    }, children);
	  };
	
	  return Cuttlebone;
	
	})(React.Component);
	
	$(function() {
	  return ReactDOM.render(React.createElement(Cuttlebone, {
	    style: {
	      width: "300px",
	      height: "300px",
	      border: "1px solid"
	    }
	  }, React.createElement(LayerSet, {}, [
	    React.createElement(Layer, {
	      key: 0
	    }, React.createElement(Box, {
	      top: 10,
	      left: 10,
	      width: 100,
	      height: 100
	    }, React.createElement(Doc, {
	      style: {
	        border: "1px solid"
	      }
	    }, "text0"))), React.createElement(Layer, {
	      key: 1
	    }, React.createElement(Box, {
	      bottom: 10,
	      right: 10,
	      width: 100,
	      height: 100
	    }, React.createElement(Doc, {
	      style: {
	        border: "1px solid"
	      }
	    }, "text0"))), React.createElement(Layer, {
	      key: 2
	    }, React.createElement(CanvasBox, {
	      top: 10,
	      right: 10,
	      width: 100,
	      height: 100,
	      style: {
	        border: "1px solid"
	      }
	    }))
	  ])), document.getElementById("content"));
	});
	
	console.log("ok");


/***/ },
/* 1 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map