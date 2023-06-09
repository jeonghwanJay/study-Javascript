// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    }, // Functions are excluded from Json. because it's not the data in the object. 
    // symbol: Symbol("id"), // Symbol is too
}

// JSON basic
json = JSON.stringify(rabbit);
console.log(json);
// JSON pick only what you want
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);
// JSON delicate control with Callback Function
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'Jay' : value;
});
console.log(json);

// 2. JSON to Object
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());