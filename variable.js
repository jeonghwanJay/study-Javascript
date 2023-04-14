// Whole-script strict mode syntax
// Javascript is very flexible
// flexible == dangerous
// added ECMAScript 5
// use this for Vanila Javascript.
'use strict';

// 1. Variable(변수)

// 1-1. var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
console.log(age);
age = 29;
console.log(age);
var age;

{
    age = 4;
    var age;
}
console.log(age);


// 1-2. let (added in ES6)
let globalName = 'global name';
{
    let name = 'Jay';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// 1-3. Constant
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;