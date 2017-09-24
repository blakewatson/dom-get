"use strict";

(function DomGetModule() {
	var root = this;
	var DomGet = {
		make: function(arr) {
			return Object.assign(arr, DomGet.fn);
		},

		fn: {
			on: function(eventName, callback, preventDefault = false) {
				this.forEach(function(el) {
					function listener(event) {
						if(preventDefault) {
							event.preventDefault();
						}
						callback(event);
					}
					el.addEventListener(eventName, listener);
					el.listener = listener;
				});
				return this;
			},

			off: function(eventName) {
				this.forEach(function(el) {
					el.removeEventListener(eventName, el.listener);
					delete el.listener;
				});
				return this;
			},

			first: function() {
				var arr = this.slice(0, 1);
				return DomGet.make(arr);
			},

			last: function() {
				var arr = this.slice(-1);
				return DomGet.make(arr);
			},

			show: function() {
				this.forEach(function(el) {
					el.style.display = '';
				});
				return this;
			},

			hide: function() {
				this.forEach(function(el) {
					el.style.display = 'none';
				});
				return this;
			}
		}
	};

	function dom(selector, parent) {
		parent = parent ? parent : document;
		var nodeArray = Array.from(parent.querySelectorAll(selector));
		return DomGet.make(nodeArray);
	}

	if( typeof exports !== 'undefined' ) {
		if( typeof module !== 'undefined' && module.exports ) {
		  exports = module.exports = dom
		}
		exports.dom = dom
	} 
	else {
		root.dom = dom
	}
}).call(this);
