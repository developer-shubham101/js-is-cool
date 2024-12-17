//Type of Functions

//Function Expression
const functionExpression = function (width, height) {
    console.log(`Called functionExpression and parameters are: ${width} ${height}`);
};
//Calling the function expression 
functionExpression(2, 3);

//Function Declaration/Function Statement
function functionDeclaration(width, height) {
    console.log(`Called functionDeclaration and parameters are: ${width} ${height}`);
}
// Calling the named function declaration/statement
functionDeclaration(2, 3);

// First Class Functions
//   A programming language is said to have First-class functions when functions in that language are treated like any other variable.
const firstClassFunctions = function () {
    console.log("firstClassFunctions");
}
firstClassFunctions(); // Invoke it using the variable


// Arrow Functions
const arrowFunctions = () => {
    console.log("arrowFunctions");
}


// Named Function Expression
var namedFunctionExpression = function functionExample() {
    console.log(typeof functionExample);   // "function"
};
namedFunctionExpression();
console.log(typeof functionExample);     // "undefined"


// Anonymous Function
(function () {
    console.log('Anonymous Function 1!')
})();

// or

!function () {
    console.log('Anonymous Function 2!')
}();



function argumentVSparameter(parameter) {
    console.log(`Parameter is ${parameter}`);
}

argumentVSparameter(12); // here 12 is the argument 