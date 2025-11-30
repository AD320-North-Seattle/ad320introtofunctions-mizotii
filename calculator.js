function add(x, y) {
	return x + y;
}

const subtract = function(x, y) {
	return x - y;
}

const multiply = (x, y) => x * y;

const divide = (x, y) => y == 0 ? "Cannot divide by zero" : x / y;

const calculate = function(a, b, operation) {
	switch(operation) {
		case "+":
			return add(a, b);	
		case "-":
			return subtract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a, b);
		default:
			return "Invalid operator."
	}
}

console.log(calculate(6, 7, "+"));
console.log(calculate(727, 7, "/"));
console.log(calculate(9, 4, "%"));