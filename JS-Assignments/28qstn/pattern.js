// Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

function printTriangle(input) {
    for (let i = 1; i<=input; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += " *";
        }
        console.log(row);
    }
}
console.log("Triagnle:");
printTriangle(5);

// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

function printSquare(input) {
    for (let i = 1; i<=input; i++) {
        let row = "";
        for (let j = 1; j <= input; j++) {
            row += " *";
        }
        console.log(row);
    }
}
console.log("Square:");
printSquare(5);

// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

function printPyramid(input) {
    for (let i = 1; i<=input; i++) {
        let row = "";
        for (let j = 1; j <= (2 * input - 1); j++) {
            if (j > input - i && j < input + i) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}
console.log("Pyramid:");
printPyramid(5);