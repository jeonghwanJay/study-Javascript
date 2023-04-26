'use strict'

// Array

// 1. Declaration
const arr1 = new Array();
console.log(arr1);
const arr2 = [1, 2];

// 2. Index position
const fruits = ['Apple', 'Banana']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); 
console.log(fruits[fruits.length - 1]); // Find last index.

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
// c. forEach
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg ?: any): void;
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('grape', 'mango');
console.log(fruits);
// pop: remove an item from the end
fruits.pop()
fruits.pop()
console.log(fruits);
// unshift: add an item to the beginning
fruits.unshift('grape', 'mango');
console.log(fruits);
// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);
// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('grape', 'mango', 'strawberry');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'kiwi', 'orange');
console.log(fruits);

// combine two arrays
const fruits2 = ['peach', 'pear'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); 

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('orange'));
console.log(fruits.indexOf('kiwi'));
console.log(fruits.indexOf('watermelon'));
// includes
console.log(fruits.includes('orange'));
console.log(fruits.includes('watermelon'));
// lastIndexOf
fruits.push('kiwi');
console.log(fruits);
console.log(fruits.indexOf('kiwi'));
console.log(fruits.lastIndexOf('kiwi'));