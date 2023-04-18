// Whole-script strict mode syntax
// Javascript is very flexible
// flexible == dangerous
// added ECMAScript 5
// use this for Vanila Javascript.
'use strict';

// 1. Variable(변수), rw(read/write)

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

// 1-3. Constant, r(read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 2. Data types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// 2-1. numbmer
const count = 29; // integer
const size = 29.4; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // template literals(string)
console.log(`value: ${size}, type: ${typeof size}`);
// number - special numberic values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 2-2. string
const char = 'a';
const jay = 'jay';
const greeting = 'hello' + jay;
console.log(`value: ${greeting}, ${typeof greeting}`);
const helloJay = (`hi ${jay}!`);
console.log(`value: ${helloJay}, ${typeof helloJay}`);

// 2-3. boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1 // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}. type: ${typeof test}`);
let nothing = null; // null
console.log(`value: ${nothing}, ${typeof nothing}`);
let x; // undefined
console.log(`value: ${x}, type: ${typeof x}`);

// 2-4. symbol
// create unique identifiers for objects, data structure...
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const jSymbol1 = Symbol.for('id');
const jSymbol2 = Symbol.for('id');
console.log(jSymbol1 === jSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 3. Dynamic typing
// dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, ${typeof text}`);
text = 1;
console.log(`value: ${text}, ${typeof text}`);
text = '7' + 5; // 75, string
console.log(`value: ${text}, ${typeof text}`);
text = '8' / '2'; // 4, number
console.log(`value: ${text}, ${typeof text}`);
console.log(text.charAt(0));
