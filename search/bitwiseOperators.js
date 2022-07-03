
/*//binary for 1


console.log(1 | 2);
console.log(1 & 2);

console.log(3 & 2);
console.log(3 & 1); 

console.log("Example -- permissions"); 

// Read, Write, Execute
// 00000100
// 00000010
// 00000001
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission; 
console.log(myPermission);
let message = (myPermission & readPermission) ? 'Yes' : 'no';
console.log(myPermission & readPermission);
console.log(message);


console.log("-------\n\n\n\n");

let binary = 0b00000011;
let binary15 = 0b00001111;
let binary15Invert = ~binary15;

console.log(binary);

console.log(binary15);
console.log(binary15Invert);



console.log("-------\n\n\n\n");


var intValue = 5;
console.log(intValue.toString(2));


*/

var intValue = 505;

console.log(intValue.toString(2)); // Output binary value will be 111111001
console.log(intValue.toString(16)); // Output hax value will be 1f9



var binaryValue = 101;

console.log(parseInt(binaryValue, 2)); // Output int value will be 5


console.log("================================================");
var intValue1 = 1;
var intValue2 = 2;
var intValue3 = 3;

// console.log(intValue1 | intValue2);

console.log(intValue1.toString(2).padStart(8, 0));
console.log(intValue2.toString(2).padStart(8, 0));
console.log("--------");
console.log((intValue1 | intValue2).toString(2).padStart(8, 0));
console.log("--------");
// console.log((intValue1 & intValue2).toString(2).padStart(8, 0));


// console.log(intValue1 & intValue2);

// console.log(3 & 2);
// console.log(3 & 1); 

