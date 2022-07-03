function selectionSort(array) {
    // console.log(array.length);

    for (let index = 0; index < array.length; index++) {

        let minIndex = index;
        for (let j = index; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        let minValue = array[minIndex];
        array[minIndex] = array[index];
        array[index] = minValue;
    }
    return array
}


function bubbleSortArray(array) {
    // console.log(array.length);

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let minValue = array[j];
                array[j] = array[i];
                array[i] = minValue;
            }
        }

    }
    return array
}


function insertionSortArray(array) {
    // console.log(array.length);

    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            let minValue = array[j];
            array[j] = array[j - 1];
            array[j - 1] = minValue;
            j--;
        }
    }
    return array
}

// console.log(selectionSort([12, 124, 523, 22, 41, 432, 2341, 2124, 4232, 323, 1]).toString());

// console.log(bubbleSortArray([12, 124, 523, 22, 41, 432, 2341, 2124, 4232, 323, 1]).toString());

// console.log(insertionSortArray([12, 124, 523, 22, 41, 432, 2341, 2124, 4232, 323, 1]).toString());


function convertString(remainString, reversedString) {
    if (remainString.length == 0) {
        return reversedString;
    }

    let lastChar = remainString[remainString.length - 1];
    reversedString = `${reversedString}${lastChar}`

    return convertString(remainString.slice(0, -1), reversedString);
}

function reverseString(params) {
    let reversedString = convertString(params, "")
    console.log(params);
    console.log(reversedString);

}

// reverseString("Hello");



// JavaScript uses three dots (...) for both the rest and spread operators. But these two operators are not the same.


// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) {
    return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
// console.log(myBio("Shubham", "Sharma", "CodeSweetly", "Web Developer", "Male"));



// Define a function with three parameters:
function myBio2(firstName, lastName, company) {
    return `${firstName} ${lastName} runs ${company}`;
}

// Use spread to expand an array’s items into individual arguments:
// console.log(myBio2(...["Shubham", "Shubham", "CodeSweetly"]));

// console.log(...["Shubham", "Shubham", "CodeSweetly"]);

let info = ["Shubham", "Shubham", "CodeSweetly"];
const [f, c, v] = [...info];
// console.log(f);




/* 
let sampleString = "Shubham Sharma"; 

console.log("String-----------------");
console.log(sampleString.charAt(0));
console.log(sampleString.charCodeAt(0));
console.log(sampleString.concat(" ", "is", "a", "good", "coder"));
console.log(sampleString.endsWith("Sharma"));
console.log(sampleString.includes("Sharma"));
console.log(sampleString.indexOf("Sharma"));
console.log(sampleString.lastIndexOf("Sharma"));
console.log(sampleString.match("Sharma"));
console.log(sampleString.matchAll("Sharma"));
console.log(sampleString.repeat(2));
console.log(sampleString.replace("Sharma", "Shubham"));
console.log(sampleString.replaceAll("Sharma", "Shubham"));
console.log(sampleString.search("Sharma"));
console.log(sampleString.slice(0, 5));
console.log(sampleString.split(" "));
console.log(sampleString.startsWith("Sharma"));
console.log(sampleString.substr(0, 5));
console.log(sampleString.substring(0, 5));
console.log(sampleString.toLowerCase());
console.log(sampleString.toUpperCase());
console.log(sampleString.toString());
console.log(sampleString.trim());
console.log(sampleString.valueOf());
 */








//binary for 1


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