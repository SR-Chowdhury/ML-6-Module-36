/**
 * 36-7 (super advanced) Understand this keyword in JavaScript
 * What is this?
 * Answer: a) In an object method, this refers to the object.
 *         b) Alone, this refers to the global object.
 *         c) In a function, this refers to the global object.
 *         d) In a function, in strict mode, this is undefined.
 *         e) In an event, this refers to the element that received the event.
 *         f) Methods like call(), apply(), and bind() can refer this to any object.
 */

const obj1 = {
    name: 'shihan',
    money: 5000,
    func1: function() {
        console.log(this);
        // 'this' will refere object in regular function
    },
    func2: () => {
        console.log(this);
        // 'this' will refer window in arrow function
    }

}

const result1 = obj1;
const result2 = obj1;
console.log(result1.func1());
console.log(result2.func2());