//Primitive datatype

// String
let name = "Seema";
console.log("My String is "+ name);
console.log("Data type is "+ (typeof name));

// numbers
let marks = 56;
console.log("Data type is "+ (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is "+ (typeof isDriver));

//Null
let nullVar = null;
console.log("Data type is "+ (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is "+ (typeof undef));


// Referenced Data types

// Arrays
let myarr= [1, 2, 5, false, "string"];
console.log("Data type is "+ (typeof myarr));

//Object Literals
let stMarks = {
    harry: 78,
    shubham: 89,
    rohan: 45,
};
console.log(stMarks);
console.log("Data type is "+ (typeof stMarks));

//function data type
function findName() {
    
}
console.log("Data type is "+ (typeof findName));

//date data type
let date = new Date();
console.log("Data type is "+ (typeof date));