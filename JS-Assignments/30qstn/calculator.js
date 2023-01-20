// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

const calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        if (y === 0) {
            return "Cannot divide by 0!";
        }
        return x / y;
    }
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(5, 3)); 
console.log(calculator.multiply(5, 3)); 
console.log(calculator.divide(5, 3));
console.log(calculator.divide(5, 0)); 
