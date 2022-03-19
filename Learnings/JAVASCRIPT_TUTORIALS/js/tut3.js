console.log('tut3');
//variables in js
// var, let, const
var nam = 'seema';
var channel;
channel = 'codewithharry';
const c = 34;
// c = 56; - cant do this as we cant re-declare const 
console.log(nam, channel, c);
// Rules for creating JavaScript Variables
/* 
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
*/
var city = 'Delhi';
console.log(city);

const ownersName= 'Hari Om';
// ownersName = 'Hari Om'; - cant do this (error)
console.log(ownersName);
const fruit = 'Orange';

{
    let city = 'Rampur';
    city = 'Kolkata';
    console.log(city);
}

console.log(city);

const arr1 = [12, 34, 56,75];
arr1.push(67);
console.log(arr1);

/* Most common programming case types:

1. camelCase 
2. kebab-case
3. snake_case
4. PascalCase

*/