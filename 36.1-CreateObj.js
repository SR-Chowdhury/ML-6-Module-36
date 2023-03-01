/**
 * 36-1 Module introduction Different way to Create Object
 * Different way to create JS Obj
 * An Object has two properties
 * a) Keys
 * b) Values
 */

// Method 1: Create Obj using obj literals [We will use]
const obj1 = {};
obj1.name = "Shihan";
obj1.age = 20;
obj1.func = () => console.log('I am obj1 Method');
// console.log(obj1);
// obj1.func();

// Mehod 2: Create Obj using obj constructor [X]
const obj2 = new Object();
obj2.name = "Shihan";
obj2.age = 20;
obj2.func = () => console.log('I am obj2 Method');
// console.log(obj2);
// obj2.func();

// Method 3: Create Obj using create method [X]
const obj3 = Object.create(null);
// console.log(obj3); // {} object


const obj3a = Object.create(obj2);
// console.log(obj4.name);

// Mehtod 4: Create Obj using class [We will use]
class Obj4 {
    constructor(number) {
        this.number = number;
    }
    name = 'Shihan';
    age = 30;
    func = () => console.log('I am Obj5 Method');
}

const obj4 = new Obj4(100);
// console.log(obj4);
// obj4.func();

// Method 6: Create Obj using Funciton (ES5) [X]
function Obj5(name, age) {
    this.name = name;
    this.age = age;
}

const obj5 = new Obj5('Shihan', 30);
console.log(obj5);