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
/***/ function(module, exports, __webpack_require__) {

	var Ui = __webpack_require__(1);
	
	var app = function(){
	  new Ui();
	}
	
	window.onload = app;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Custodians = __webpack_require__(2);
	
	var Ui = function(){
	  var custodians = new Custodians();
	  custodians.all(function(data){
	    console.log(data)
	  });
	}
	
	Ui.prototype = {
	  
	}
	
	module.exports = Ui;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Custodian = __webpack_require__(3);
	var apiRequest = __webpack_require__(4);
	
	var Custodians = function(){
	
	}
	
	Custodians.prototype = {
	
	all: function(onComplete){
	  var self = this;
	  var url = "http://localhost:3000/api/custodians"
	
	  apiRequest(url, function(){
	    if (this.status !== 200) return;
	    var jsonString = this.responseText;
	    var results = JSON.parse(jsonString);
	    var custodians = self.parseToCustodians(results);
	    onComplete(custodians);
	  });
	},
	
	parseToCustodians: function(results){
	  var custodians = [];
	  for (var result of results){
	    var custodian = new Custodian(result);
	    custodians.push(custodian);
	  }
	  return custodians;
	}
	
	}
	
	module.exports = Custodians;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Custodian = function(options){
	  this.name = options.name;
	  this.special = options.special;
	}
	
	Custodian.prototype = {
	  
	}
	
	module.exports = Custodian;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var apiRequester = function(url, callback){
	  var request = new XMLHttpRequest()
	  request.open("GET", url);
	  request.onload = callback;
	  request.send();
	}
	
	module.exports = apiRequester;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map