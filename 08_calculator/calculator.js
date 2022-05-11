const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
	
};

const multiply = function(args) {

  return args.reduce((a, b) => a * b);

};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(n) {
  let total = 1;

  while (n > 1) {
    total *= n;
    n--;
  }
	
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
