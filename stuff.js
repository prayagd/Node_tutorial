let counter = function(arr) {
	return 'There are ' + arr.length + ' elements in this array';
};

let adder = (a, b) => {
	return `The sum of two number is ${a + b}`;
};

let pi = 3.14;

module.exports = {
	counter: counter,
	adder: adder,
	pi: pi
};
