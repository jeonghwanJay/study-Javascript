'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hi there!`);
    }
}
const Jay = new Person('Jay', 29);
console.log(Jay);
console.log(Jay.name);
console.log(Jay.age);
Jay.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // // if ( value < 0) {
        // throw Error('age can not be negative');
        // }
        this._age = value > 0 ? value : 0;
    }
}
const user1 = new User('Jeonghwan', "Jay", -1);
console.log(user1.age);

// 3. Fileds (public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const doubleJay = new Experiment()
console.log(doubleJay.publicField);
console.log(doubleJay.privateField);

// 4. Static properties and methods
class Article {
    static publisher = 'youcallmeJay';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() { 
        super.draw()
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    // JS-self Attribute : press Alt on the text 'Object'
    // overwriting
    toString() {
        return `Triangle color:${this.color}`;
    }
 }
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());