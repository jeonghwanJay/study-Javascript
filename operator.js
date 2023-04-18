// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 

'''''
1 + 2 = ${1 + 2}`);

console.log("ellie's \n\tbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // mutiply 
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); 
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); 

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;
// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// often used to compress long if-statement
// nullableObject && nullableObject.something =(same code) if (nullableObject != null) {nullableObject.something;}
function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('🙀');
    }
    return true;
}
// ! (not)
console.log(!value1);

// 7. Equlity
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// object equality by reference
const jay1 = { name: 'jay' };
const jay2 = { name: 'jay' };
const jay3 = jay1;
console.log(jay1 == jay2);
console.log(jay1 === jay2);
console.log(jay3 === jay1);
// eqality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditinal operators: if
// if, else if, else
const name = 'jay';
if (name === 'jayz') {
    console.log('hi');
} else if (name == 'jay') {
    console.log('hello jay');
} else {
    console.log('OMG');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'jay' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Chrome';
switch (browser) {
    case 'Chrome':
        console.log('hello my browser');
        break;
    case 'IE':
    case 'Firefox':
        console.log('what IE and Fire..');
        break;
    default:
        console.log('Edge');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
};
// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}
// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}
// continue
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
// break
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(i);
}