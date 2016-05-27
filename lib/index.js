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

	var $, EventEmitter, React, ReactDOM, c, co;
	
	React = __webpack_require__(/*! react */ 1);
	
	ReactDOM = __webpack_require__(/*! react-dom */ 2);
	
	$ = __webpack_require__(/*! jquery */ 3);
	
	co = __webpack_require__(/*! co */ 4);
	
	EventEmitter = __webpack_require__(/*! eventemitter2 */ 5);
	
	c = __webpack_require__(/*! ./Components */ 6);
	
	$(function() {
	  return ReactDOM.render(React.createElement(c.Cuttlebone, {
	    style: {
	      width: "500px",
	      height: "500px",
	      border: "1px solid"
	    }
	  }, React.createElement(c.LayerSet, {}, [
	    React.createElement(c.Layer, {
	      key: 0,
	      bottom: 0,
	      right: 0
	    }, React.createElement(c.LayerSet, {}, [
	      React.createElement(c.Layer, {
	        key: 0,
	        bottom: 0,
	        right: 10,
	        width: 100,
	        height: 200
	      }, React.createElement(c.LayerSet, {
	        hover: false
	      }, [
	        React.createElement(c.Layer, {
	          key: 0,
	          top: 0,
	          left: 0,
	          width: 100,
	          height: 200,
	          style: {
	            backgroundColor: "red"
	          }
	        }, React.createElement(c.Doc, {}, "shell")), React.createElement(c.Layer, {
	          key: 1,
	          top: 0,
	          left: -90,
	          width: 100,
	          height: 60,
	          style: {
	            backgroundColor: "green"
	          }
	        }, React.createElement(c.Doc, {}, "balloon"))
	      ])), React.createElement(c.Layer, {
	        key: 1,
	        bottom: 0,
	        right: 120,
	        width: 100,
	        height: 100
	      }, React.createElement(c.LayerSet, {
	        hover: false
	      }, [
	        React.createElement(c.Layer, {
	          key: 0,
	          top: 0,
	          left: 0,
	          width: 100,
	          height: 100,
	          style: {
	            backgroundColor: "red"
	          }
	        }, React.createElement(c.Doc, {}, "shell")), React.createElement(c.Layer, {
	          key: 1,
	          top: 0,
	          left: 90,
	          width: 100,
	          height: 60,
	          style: {
	            backgroundColor: "green"
	          }
	        }, React.createElement(c.Doc, {}, "balloon"))
	      ]))
	    ])), React.createElement(c.Layer, {
	      key: 1,
	      bottom: 0,
	      right: 200
	    }, React.createElement(c.LayerSet, {}, [
	      React.createElement(c.Layer, {
	        key: 0,
	        bottom: 0,
	        right: 10,
	        width: 100,
	        height: 200
	      }, React.createElement(c.LayerSet, {
	        hover: false
	      }, [
	        React.createElement(c.Layer, {
	          key: 0,
	          top: 0,
	          left: 0,
	          width: 100,
	          height: 200,
	          style: {
	            backgroundColor: "red"
	          }
	        }, React.createElement(c.Doc, {}, "shell")), React.createElement(c.Layer, {
	          key: 1,
	          top: 0,
	          left: -90,
	          width: 100,
	          height: 60,
	          style: {
	            backgroundColor: "green"
	          }
	        }, React.createElement(c.Doc, {}, "balloon"))
	      ])), React.createElement(c.Layer, {
	        key: 1,
	        bottom: 0,
	        right: 120,
	        width: 100,
	        height: 100
	      }, React.createElement(c.LayerSet, {
	        hover: false
	      }, [
	        React.createElement(c.Layer, {
	          key: 0,
	          top: 0,
	          left: 0,
	          width: 100,
	          height: 100,
	          style: {
	            backgroundColor: "red"
	          }
	        }, React.createElement(c.Doc, {}, "shell")), React.createElement(c.Layer, {
	          key: 1,
	          top: 0,
	          left: 90,
	          width: 100,
	          height: 60,
	          style: {
	            backgroundColor: "green"
	          }
	        }, React.createElement(c.Doc, {}, "balloon"))
	      ]))
	    ]))
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

/***/ },
/* 4 */
/*!***********************!*\
  !*** ./~/co/index.js ***!
  \***********************/
/***/ function(module, exports) {

	
	/**
	 * slice() reference.
	 */
	
	var slice = Array.prototype.slice;
	
	/**
	 * Expose `co`.
	 */
	
	module.exports = co['default'] = co.co = co;
	
	/**
	 * Wrap the given generator `fn` into a
	 * function that returns a promise.
	 * This is a separate function so that
	 * every `co()` call doesn't create a new,
	 * unnecessary closure.
	 *
	 * @param {GeneratorFunction} fn
	 * @return {Function}
	 * @api public
	 */
	
	co.wrap = function (fn) {
	  createPromise.__generatorFunction__ = fn;
	  return createPromise;
	  function createPromise() {
	    return co.call(this, fn.apply(this, arguments));
	  }
	};
	
	/**
	 * Execute the generator function or a generator
	 * and return a promise.
	 *
	 * @param {Function} fn
	 * @return {Promise}
	 * @api public
	 */
	
	function co(gen) {
	  var ctx = this;
	  var args = slice.call(arguments, 1)
	
	  // we wrap everything in a promise to avoid promise chaining,
	  // which leads to memory leak errors.
	  // see https://github.com/tj/co/issues/180
	  return new Promise(function(resolve, reject) {
	    if (typeof gen === 'function') gen = gen.apply(ctx, args);
	    if (!gen || typeof gen.next !== 'function') return resolve(gen);
	
	    onFulfilled();
	
	    /**
	     * @param {Mixed} res
	     * @return {Promise}
	     * @api private
	     */
	
	    function onFulfilled(res) {
	      var ret;
	      try {
	        ret = gen.next(res);
	      } catch (e) {
	        return reject(e);
	      }
	      next(ret);
	    }
	
	    /**
	     * @param {Error} err
	     * @return {Promise}
	     * @api private
	     */
	
	    function onRejected(err) {
	      var ret;
	      try {
	        ret = gen.throw(err);
	      } catch (e) {
	        return reject(e);
	      }
	      next(ret);
	    }
	
	    /**
	     * Get the next value in the generator,
	     * return a promise.
	     *
	     * @param {Object} ret
	     * @return {Promise}
	     * @api private
	     */
	
	    function next(ret) {
	      if (ret.done) return resolve(ret.value);
	      var value = toPromise.call(ctx, ret.value);
	      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
	      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
	        + 'but the following object was passed: "' + String(ret.value) + '"'));
	    }
	  });
	}
	
	/**
	 * Convert a `yield`ed value into a promise.
	 *
	 * @param {Mixed} obj
	 * @return {Promise}
	 * @api private
	 */
	
	function toPromise(obj) {
	  if (!obj) return obj;
	  if (isPromise(obj)) return obj;
	  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
	  if ('function' == typeof obj) return thunkToPromise.call(this, obj);
	  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
	  if (isObject(obj)) return objectToPromise.call(this, obj);
	  return obj;
	}
	
	/**
	 * Convert a thunk to a promise.
	 *
	 * @param {Function}
	 * @return {Promise}
	 * @api private
	 */
	
	function thunkToPromise(fn) {
	  var ctx = this;
	  return new Promise(function (resolve, reject) {
	    fn.call(ctx, function (err, res) {
	      if (err) return reject(err);
	      if (arguments.length > 2) res = slice.call(arguments, 1);
	      resolve(res);
	    });
	  });
	}
	
	/**
	 * Convert an array of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Array} obj
	 * @return {Promise}
	 * @api private
	 */
	
	function arrayToPromise(obj) {
	  return Promise.all(obj.map(toPromise, this));
	}
	
	/**
	 * Convert an object of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Object} obj
	 * @return {Promise}
	 * @api private
	 */
	
	function objectToPromise(obj){
	  var results = new obj.constructor();
	  var keys = Object.keys(obj);
	  var promises = [];
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var promise = toPromise.call(this, obj[key]);
	    if (promise && isPromise(promise)) defer(promise, key);
	    else results[key] = obj[key];
	  }
	  return Promise.all(promises).then(function () {
	    return results;
	  });
	
	  function defer(promise, key) {
	    // predefine the key in the result
	    results[key] = undefined;
	    promises.push(promise.then(function (res) {
	      results[key] = res;
	    }));
	  }
	}
	
	/**
	 * Check if `obj` is a promise.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isPromise(obj) {
	  return 'function' == typeof obj.then;
	}
	
	/**
	 * Check if `obj` is a generator.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isGenerator(obj) {
	  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
	}
	
	/**
	 * Check if `obj` is a generator function.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */
	function isGeneratorFunction(obj) {
	  var constructor = obj.constructor;
	  if (!constructor) return false;
	  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
	  return isGenerator(constructor.prototype);
	}
	
	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject(val) {
	  return Object == val.constructor;
	}


/***/ },
/* 5 */
/*!**********************************************!*\
  !*** ./~/eventemitter2/lib/eventemitter2.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * EventEmitter2
	 * https://github.com/hij1nx/EventEmitter2
	 *
	 * Copyright (c) 2013 hij1nx
	 * Licensed under the MIT license.
	 */
	;!function(undefined) {
	
	  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
	    return Object.prototype.toString.call(obj) === "[object Array]";
	  };
	  var defaultMaxListeners = 10;
	
	  function init() {
	    this._events = {};
	    if (this._conf) {
	      configure.call(this, this._conf);
	    }
	  }
	
	  function configure(conf) {
	    if (conf) {
	
	      this._conf = conf;
	
	      conf.delimiter && (this.delimiter = conf.delimiter);
	      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
	      conf.wildcard && (this.wildcard = conf.wildcard);
	      conf.newListener && (this.newListener = conf.newListener);
	
	      if (this.wildcard) {
	        this.listenerTree = {};
	      }
	    }
	  }
	
	  function EventEmitter(conf) {
	    this._events = {};
	    this.newListener = false;
	    configure.call(this, conf);
	  }
	  EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property
	
	  //
	  // Attention, function return type now is array, always !
	  // It has zero elements if no any matches found and one or more
	  // elements (leafs) if there are matches
	  //
	  function searchListenerTree(handlers, type, tree, i) {
	    if (!tree) {
	      return [];
	    }
	    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
	        typeLength = type.length, currentType = type[i], nextType = type[i+1];
	    if (i === typeLength && tree._listeners) {
	      //
	      // If at the end of the event(s) list and the tree has listeners
	      // invoke those listeners.
	      //
	      if (typeof tree._listeners === 'function') {
	        handlers && handlers.push(tree._listeners);
	        return [tree];
	      } else {
	        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
	          handlers && handlers.push(tree._listeners[leaf]);
	        }
	        return [tree];
	      }
	    }
	
	    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
	      //
	      // If the event emitted is '*' at this part
	      // or there is a concrete match at this patch
	      //
	      if (currentType === '*') {
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
	          }
	        }
	        return listeners;
	      } else if(currentType === '**') {
	        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
	        if(endReached && tree._listeners) {
	          // The next element has a _listeners, add it to the handlers.
	          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
	        }
	
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            if(branch === '*' || branch === '**') {
	              if(tree[branch]._listeners && !endReached) {
	                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
	              }
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            } else if(branch === nextType) {
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
	            } else {
	              // No match on this one, shift into the tree but not in the type array.
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            }
	          }
	        }
	        return listeners;
	      }
	
	      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
	    }
	
	    xTree = tree['*'];
	    if (xTree) {
	      //
	      // If the listener tree will allow any match for this part,
	      // then recursively explore all branches of the tree
	      //
	      searchListenerTree(handlers, type, xTree, i+1);
	    }
	
	    xxTree = tree['**'];
	    if(xxTree) {
	      if(i < typeLength) {
	        if(xxTree._listeners) {
	          // If we have a listener on a '**', it will catch all, so add its handler.
	          searchListenerTree(handlers, type, xxTree, typeLength);
	        }
	
	        // Build arrays of matching next branches and others.
	        for(branch in xxTree) {
	          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
	            if(branch === nextType) {
	              // We know the next element will match, so jump twice.
	              searchListenerTree(handlers, type, xxTree[branch], i+2);
	            } else if(branch === currentType) {
	              // Current node matches, move into the tree.
	              searchListenerTree(handlers, type, xxTree[branch], i+1);
	            } else {
	              isolatedBranch = {};
	              isolatedBranch[branch] = xxTree[branch];
	              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
	            }
	          }
	        }
	      } else if(xxTree._listeners) {
	        // We have reached the end and still on a '**'
	        searchListenerTree(handlers, type, xxTree, typeLength);
	      } else if(xxTree['*'] && xxTree['*']._listeners) {
	        searchListenerTree(handlers, type, xxTree['*'], typeLength);
	      }
	    }
	
	    return listeners;
	  }
	
	  function growListenerTree(type, listener) {
	
	    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	
	    //
	    // Looks for two consecutive '**', if so, don't add the event at all.
	    //
	    for(var i = 0, len = type.length; i+1 < len; i++) {
	      if(type[i] === '**' && type[i+1] === '**') {
	        return;
	      }
	    }
	
	    var tree = this.listenerTree;
	    var name = type.shift();
	
	    while (name) {
	
	      if (!tree[name]) {
	        tree[name] = {};
	      }
	
	      tree = tree[name];
	
	      if (type.length === 0) {
	
	        if (!tree._listeners) {
	          tree._listeners = listener;
	        }
	        else if(typeof tree._listeners === 'function') {
	          tree._listeners = [tree._listeners, listener];
	        }
	        else if (isArray(tree._listeners)) {
	
	          tree._listeners.push(listener);
	
	          if (!tree._listeners.warned) {
	
	            var m = defaultMaxListeners;
	
	            if (typeof this._events.maxListeners !== 'undefined') {
	              m = this._events.maxListeners;
	            }
	
	            if (m > 0 && tree._listeners.length > m) {
	
	              tree._listeners.warned = true;
	              console.error('(node) warning: possible EventEmitter memory ' +
	                            'leak detected. %d listeners added. ' +
	                            'Use emitter.setMaxListeners() to increase limit.',
	                            tree._listeners.length);
	              if(console.trace){
	                console.trace();
	              }
	            }
	          }
	        }
	        return true;
	      }
	      name = type.shift();
	    }
	    return true;
	  }
	
	  // By default EventEmitters will print a warning if more than
	  // 10 listeners are added to it. This is a useful default which
	  // helps finding memory leaks.
	  //
	  // Obviously not all Emitters should be limited to 10. This function allows
	  // that to be increased. Set to zero for unlimited.
	
	  EventEmitter.prototype.delimiter = '.';
	
	  EventEmitter.prototype.setMaxListeners = function(n) {
	    this._events || init.call(this);
	    this._events.maxListeners = n;
	    if (!this._conf) this._conf = {};
	    this._conf.maxListeners = n;
	  };
	
	  EventEmitter.prototype.event = '';
	
	  EventEmitter.prototype.once = function(event, fn) {
	    this.many(event, 1, fn);
	    return this;
	  };
	
	  EventEmitter.prototype.many = function(event, ttl, fn) {
	    var self = this;
	
	    if (typeof fn !== 'function') {
	      throw new Error('many only accepts instances of Function');
	    }
	
	    function listener() {
	      if (--ttl === 0) {
	        self.off(event, listener);
	      }
	      fn.apply(this, arguments);
	    }
	
	    listener._origin = fn;
	
	    this.on(event, listener);
	
	    return self;
	  };
	
	  EventEmitter.prototype.emit = function() {
	
	    this._events || init.call(this);
	
	    var type = arguments[0];
	
	    if (type === 'newListener' && !this.newListener) {
	      if (!this._events.newListener) {
	        return false;
	      }
	    }
	
	    var al = arguments.length;
	    var args,l,i,j;
	    var handler;
	
	    if (this._all && this._all.length) {
	      handler = this._all.slice();
	      if (al > 3) {
	        args = new Array(al);
	        for (j = 1; j < al; j++) args[j] = arguments[j];
	      }
	
	      for (i = 0, l = handler.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler[i].call(this, type);
	          break;
	        case 2:
	          handler[i].call(this, type, arguments[1]);
	          break;
	        case 3:
	          handler[i].call(this, type, arguments[1], arguments[2]);
	          break;
	        default:
	          handler[i].apply(this, args);
	        }
	      }
	    }
	
	    if (this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    } else {
	      handler = this._events[type];
	      if (typeof handler === 'function') {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler.call(this);
	          break;
	        case 2:
	          handler.call(this, arguments[1]);
	          break;
	        case 3:
	          handler.call(this, arguments[1], arguments[2]);
	          break;
	        default:
	          args = new Array(al - 1);
	          for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	          handler.apply(this, args);
	        }
	        return true;
	      } else if (handler) {
	        // need to make copy of handlers because list can change in the middle
	        // of emit call
	        handler = handler.slice();
	      }
	    }
	
	    if (handler && handler.length) {
	      if (al > 3) {
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	      }
	      for (i = 0, l = handler.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler[i].call(this);
	          break;
	        case 2:
	          handler[i].call(this, arguments[1]);
	          break;
	        case 3:
	          handler[i].call(this, arguments[1], arguments[2]);
	          break;
	        default:
	          handler[i].apply(this, args);
	        }
	      }
	      return true;
	    } else if (!this._all && type === 'error') {
	      if (arguments[1] instanceof Error) {
	        throw arguments[1]; // Unhandled 'error' event
	      } else {
	        throw new Error("Uncaught, unspecified 'error' event.");
	      }
	      return false;
	    }
	
	    return !!this._all;
	  };
	
	  EventEmitter.prototype.emitAsync = function() {
	
	    this._events || init.call(this);
	
	    var type = arguments[0];
	
	    if (type === 'newListener' && !this.newListener) {
	        if (!this._events.newListener) { return Promise.resolve([false]); }
	    }
	
	    var promises= [];
	
	    var al = arguments.length;
	    var args,l,i,j;
	    var handler;
	
	    if (this._all) {
	      if (al > 3) {
	        args = new Array(al);
	        for (j = 1; j < al; j++) args[j] = arguments[j];
	      }
	      for (i = 0, l = this._all.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          promises.push(this._all[i].call(this, type));
	          break;
	        case 2:
	          promises.push(this._all[i].call(this, type, arguments[1]));
	          break;
	        case 3:
	          promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
	          break;
	        default:
	          promises.push(this._all[i].apply(this, args));
	        }
	      }
	    }
	
	    if (this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    } else {
	      handler = this._events[type];
	    }
	
	    if (typeof handler === 'function') {
	      this.event = type;
	      switch (al) {
	      case 1:
	        promises.push(handler.call(this));
	        break;
	      case 2:
	        promises.push(handler.call(this, arguments[1]));
	        break;
	      case 3:
	        promises.push(handler.call(this, arguments[1], arguments[2]));
	        break;
	      default:
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	        promises.push(handler.apply(this, args));
	      }
	    } else if (handler && handler.length) {
	      if (al > 3) {
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	      }
	      for (i = 0, l = handler.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          promises.push(handler[i].call(this));
	          break;
	        case 2:
	          promises.push(handler[i].call(this, arguments[1]));
	          break;
	        case 3:
	          promises.push(handler[i].call(this, arguments[1], arguments[2]));
	          break;
	        default:
	          promises.push(handler[i].apply(this, args));
	        }
	      }
	    } else if (!this._all && type === 'error') {
	      if (arguments[1] instanceof Error) {
	        return Promise.reject(arguments[1]); // Unhandled 'error' event
	      } else {
	        return Promise.reject("Uncaught, unspecified 'error' event.");
	      }
	    }
	
	    return Promise.all(promises);
	  };
	
	  EventEmitter.prototype.on = function(type, listener) {
	
	    if (typeof type === 'function') {
	      this.onAny(type);
	      return this;
	    }
	
	    if (typeof listener !== 'function') {
	      throw new Error('on only accepts instances of Function');
	    }
	    this._events || init.call(this);
	
	    // To avoid recursion in the case that type == "newListeners"! Before
	    // adding it to the listeners, first emit "newListeners".
	    this.emit('newListener', type, listener);
	
	    if(this.wildcard) {
	      growListenerTree.call(this, type, listener);
	      return this;
	    }
	
	    if (!this._events[type]) {
	      // Optimize the case of one listener. Don't need the extra array object.
	      this._events[type] = listener;
	    }
	    else if(typeof this._events[type] === 'function') {
	      // Adding the second element, need to change to array.
	      this._events[type] = [this._events[type], listener];
	    }
	    else if (isArray(this._events[type])) {
	      // If we've already got an array, just append.
	      this._events[type].push(listener);
	
	      // Check for listener leak
	      if (!this._events[type].warned) {
	
	        var m = defaultMaxListeners;
	
	        if (typeof this._events.maxListeners !== 'undefined') {
	          m = this._events.maxListeners;
	        }
	
	        if (m > 0 && this._events[type].length > m) {
	
	          this._events[type].warned = true;
	          console.error('(node) warning: possible EventEmitter memory ' +
	                        'leak detected. %d listeners added. ' +
	                        'Use emitter.setMaxListeners() to increase limit.',
	                        this._events[type].length);
	          if(console.trace){
	            console.trace();
	          }
	        }
	      }
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.onAny = function(fn) {
	
	    if (typeof fn !== 'function') {
	      throw new Error('onAny only accepts instances of Function');
	    }
	
	    if(!this._all) {
	      this._all = [];
	    }
	
	    // Add the function to the event listener collection.
	    this._all.push(fn);
	    return this;
	  };
	
	  EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	  EventEmitter.prototype.off = function(type, listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('removeListener only takes instances of Function');
	    }
	
	    var handlers,leafs=[];
	
	    if(this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	    }
	    else {
	      // does not use listeners(), so no side effect of creating _events[type]
	      if (!this._events[type]) return this;
	      handlers = this._events[type];
	      leafs.push({_listeners:handlers});
	    }
	
	    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
	      var leaf = leafs[iLeaf];
	      handlers = leaf._listeners;
	      if (isArray(handlers)) {
	
	        var position = -1;
	
	        for (var i = 0, length = handlers.length; i < length; i++) {
	          if (handlers[i] === listener ||
	            (handlers[i].listener && handlers[i].listener === listener) ||
	            (handlers[i]._origin && handlers[i]._origin === listener)) {
	            position = i;
	            break;
	          }
	        }
	
	        if (position < 0) {
	          continue;
	        }
	
	        if(this.wildcard) {
	          leaf._listeners.splice(position, 1);
	        }
	        else {
	          this._events[type].splice(position, 1);
	        }
	
	        if (handlers.length === 0) {
	          if(this.wildcard) {
	            delete leaf._listeners;
	          }
	          else {
	            delete this._events[type];
	          }
	        }
	
	        this.emit("removeListener", type, listener);
	
	        return this;
	      }
	      else if (handlers === listener ||
	        (handlers.listener && handlers.listener === listener) ||
	        (handlers._origin && handlers._origin === listener)) {
	        if(this.wildcard) {
	          delete leaf._listeners;
	        }
	        else {
	          delete this._events[type];
	        }
	
	        this.emit("removeListener", type, listener);
	      }
	    }
	
	    function recursivelyGarbageCollect(root) {
	      if (root === undefined) {
	        return;
	      }
	      var keys = Object.keys(root);
	      for (var i in keys) {
	        var key = keys[i];
	        var obj = root[key];
	        if ((obj instanceof Function) || (typeof obj !== "object"))
	          continue;
	        if (Object.keys(obj).length > 0) {
	          recursivelyGarbageCollect(root[key]);
	        }
	        if (Object.keys(obj).length === 0) {
	          delete root[key];
	        }
	      }
	    }
	    recursivelyGarbageCollect(this.listenerTree);
	
	    return this;
	  };
	
	  EventEmitter.prototype.offAny = function(fn) {
	    var i = 0, l = 0, fns;
	    if (fn && this._all && this._all.length > 0) {
	      fns = this._all;
	      for(i = 0, l = fns.length; i < l; i++) {
	        if(fn === fns[i]) {
	          fns.splice(i, 1);
	          this.emit("removeListenerAny", fn);
	          return this;
	        }
	      }
	    } else {
	      fns = this._all;
	      for(i = 0, l = fns.length; i < l; i++)
	        this.emit("removeListenerAny", fns[i]);
	      this._all = [];
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
	
	  EventEmitter.prototype.removeAllListeners = function(type) {
	    if (arguments.length === 0) {
	      !this._events || init.call(this);
	      return this;
	    }
	
	    if(this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	
	      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
	        var leaf = leafs[iLeaf];
	        leaf._listeners = null;
	      }
	    }
	    else {
	      if (!this._events || !this._events[type]) return this;
	      this._events[type] = null;
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.listeners = function(type) {
	    if(this.wildcard) {
	      var handlers = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
	      return handlers;
	    }
	
	    this._events || init.call(this);
	
	    if (!this._events[type]) this._events[type] = [];
	    if (!isArray(this._events[type])) {
	      this._events[type] = [this._events[type]];
	    }
	    return this._events[type];
	  };
	
	  EventEmitter.prototype.listenersAny = function() {
	
	    if(this._all) {
	      return this._all;
	    }
	    else {
	      return [];
	    }
	
	  };
	
	  if (true) {
	     // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return EventEmitter;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // CommonJS
	    module.exports = EventEmitter;
	  }
	  else {
	    // Browser global.
	    window.EventEmitter2 = EventEmitter;
	  }
	}();


/***/ },
/* 6 */
/*!*******************************!*\
  !*** ./src/Components.coffee ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var $, Cuttlebone, Doc, Layer, LayerSet, React, SuperComponent,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	React = __webpack_require__(/*! react */ 1);
	
	$ = __webpack_require__(/*! jquery */ 3);
	
	SuperComponent = (function(superClass) {
	  extend(SuperComponent, superClass);
	
	  function SuperComponent() {
	    return SuperComponent.__super__.constructor.apply(this, arguments);
	  }
	
	  SuperComponent.prototype.getStyle = function() {
	    var style;
	    style = this.props.style;
	    return $.extend(true, {}, this.constructor.prototype.style, style);
	  };
	
	  SuperComponent.prototype.validate = function() {};
	
	  SuperComponent.prototype.validateChildrenAtLeastCount = function(count, errorMessage) {
	    var children;
	    children = this.props.children;
	    if (React.Children.count(children) > count) {
	      throw new Error(errorMessage);
	    }
	  };
	
	  SuperComponent.prototype.validateChildrenTypes = function(types, errorMessage) {
	    var children;
	    children = this.props.children;
	    if (!React.Children.toArray(children).every(function(child) {
	      return types.some(function(type) {
	        return child.type === type;
	      });
	    })) {
	      throw new Error(errorMessage);
	    }
	  };
	
	  return SuperComponent;
	
	})(React.Component);
	
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
	
	  Doc.prototype.render = function() {
	    this.validate();
	    return React.createElement("div", {
	      style: this.getStyle()
	    }, this.props.children);
	  };
	
	  return Doc;
	
	})(SuperComponent);
	
	Layer = (function(superClass) {
	  extend(Layer, superClass);
	
	  function Layer() {
	    return Layer.__super__.constructor.apply(this, arguments);
	  }
	
	  Layer.prototype.style = {
	    display: "inline-block",
	    position: "absolute",
	    boxSizing: "border-box",
	    margin: "0px",
	    border: "none",
	    padding: "0px"
	  };
	
	  Layer.prototype.validate = function() {
	    var bottom, height, key, left, ref, ref1, right, top, val, width;
	    ref = this.props, width = ref.width, height = ref.height, top = ref.top, bottom = ref.bottom, left = ref.left, right = ref.right;
	    if ((top != null) && (bottom != null)) {
	      throw new Error("Layer can have only property top or bottom");
	    }
	    if ((left != null) && (right != null)) {
	      throw new Error("Layer can have only property left or right");
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
	    this.validateChildrenAtLeastCount(1, "Layer can only have zero or one child");
	    this.validateChildrenTypes([Doc, LayerSet], "Layer can only have Doc, LayerSet element");
	    ref1 = {
	      width: width,
	      height: height,
	      top: top,
	      bottom: bottom,
	      left: left,
	      right: right
	    };
	    for (key in ref1) {
	      val = ref1[key];
	      if (val != null) {
	        if (!isFinite(Number(val))) {
	          throw new Error("Box " + key + ": " + val + " is not number");
	        }
	      }
	    }
	  };
	
	  Layer.prototype.getStyle = function() {
	    var bottom, height, key, left, ref, ref1, right, style, top, val, width;
	    style = Layer.__super__.getStyle.call(this);
	    ref = this.props, width = ref.width, height = ref.height, top = ref.top, bottom = ref.bottom, left = ref.left, right = ref.right;
	    ref1 = {
	      width: width,
	      height: height,
	      top: top,
	      bottom: bottom,
	      left: left,
	      right: right
	    };
	    for (key in ref1) {
	      val = ref1[key];
	      if (val != null) {
	        style[key] = val + "px";
	      }
	    }
	    return style;
	  };
	
	  Layer.prototype.render = function() {
	    this.validate();
	    return React.createElement("div", {
	      style: this.getStyle()
	    }, this.props.children);
	  };
	
	  return Layer;
	
	})(SuperComponent);
	
	LayerSet = (function(superClass) {
	  extend(LayerSet, superClass);
	
	  function LayerSet() {
	    return LayerSet.__super__.constructor.apply(this, arguments);
	  }
	
	  LayerSet.prototype.componentDidMount = function() {
	    var elm, hover, that;
	    that = this;
	    elm = ReactDOM.findDOMNode(this);
	    hover = this.props.hover;
	    if (hover == null) {
	      hover = true;
	    }
	    if (hover) {
	      return $(elm).on("click", "*", function(ev) {
	        var id, target;
	        if (!$(elm).children().has(this)) {
	          return;
	        }
	        id = $(elm).children().index(this);
	        target = that.props.children.splice(id, 1);
	        that.props.children.push(target);
	        return setTimeout(function() {
	          return that.forceUpdate();
	        });
	      });
	    }
	  };
	
	  LayerSet.prototype.componentWillUnmount = function() {
	    return $(ReactDOM.findDOMNode(this)).off("click");
	  };
	
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
	    return this.validateChildrenTypes([Layer], "LayerSet can only have children of Layer elements");
	  };
	
	  LayerSet.prototype.render = function() {
	    this.validate();
	    return React.createElement("div", {
	      style: this.getStyle()
	    }, this.props.children);
	  };
	
	  return LayerSet;
	
	})(SuperComponent);
	
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
	
	  Cuttlebone.prototype.validate = function() {
	    this.validateChildrenAtLeastCount(1, "Cuttlebone can only have one child");
	    return this.validateChildrenTypes([LayerSet], "Cuttlebone can only have children of LayerSet element");
	  };
	
	  Cuttlebone.prototype.render = function() {
	    this.validate();
	    return React.createElement("div", {
	      style: this.getStyle()
	    }, this.props.children);
	  };
	
	  return Cuttlebone;
	
	})(SuperComponent);
	
	console.dir(Layer);
	
	module.exports = {
	  Doc: Doc,
	  Layer: Layer,
	  LayerSet: LayerSet,
	  Cuttlebone: Cuttlebone
	};


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map