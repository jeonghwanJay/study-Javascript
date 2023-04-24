// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const jay = { name: 'jeonghwanJay', age: 29 }
print(jay);

// with JavaScript magic (dynamically typed language)
// can add properties later
jay.hasJob = true;
console.log(jay.hasJob);
console.log(jay);

delete jay.hasJob
console.log(jay);

// 2. Computed properties
console.log(jay.name);
console.log(jay['name']);
jay['hasJob'] = true;
console.log(jay.hasJob);

function printValue(obj, key) {
    console.log(obj.key);
    console.log(obj[key]);
}

printValue(jay, 'name');
printValue(jay, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 20 };
const person2 = { name: 'andrew', age: 22 };
const person3 = { name: 'jenny', age: 19 };
const person4 = new Person('jay', 29);
console.log(person4);

// 4. Constructor Function
// Functions that create objects purely
function Person(name, age) {
    // omitted : this = {}
    this.name = name;
    this.age = age;
    // omitted : return this;
}

// 5. in operator: property existance check (key in obj)
console.log('name' in jay);
console.log('age' in jay);
console.log('job' in jay);
console.log(jay.weight);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in jay) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: jay, age: 20 };
const user2 = user;
user2.name = 'developer';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key]
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); 
console.log(mixed);