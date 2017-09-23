var DomGet = {
	make: function(arr) {
		return Object.assign(arr, DomGet.fn);
	},

	fn: {
		hi: function() {
			console.log('hello');
		}
	}
};

function dom(selector, parent) {
	parent = parent ? parent : document;
	var nodeArray = Array.from(parent.querySelectorAll(selector));
	return DomGet.make(nodeArray);
}

//export default DomGet;