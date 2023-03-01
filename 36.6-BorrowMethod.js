/**
 * 36-6 (optional) Borrow method from object and use it on another object
 */

const obj1 = {
    name: 'shihan',
    money: 5000,
    func1: function() {
        return this.name + ', Welcome to the UK';
    },
    func2: function(args) {
        return this.name + ', you can stay in the UK at least '+args+' years';
    }
}

const result1 = obj1;
// console.log(result1);
// console.log(result1.func1());
// console.log(result1.func2(3));

const obj2 = {
    name: 'Moni',
    money: 2000
}
/**
 * We can use call(this, argument) method for using other object method
 * it works directly
 */
const result2 = obj1.func1.call(obj2); //it works directly
const result3 = obj1.func2.call(obj2, 50); //it works directly
// console.log(result2);
// console.log(result3);

/**
 * We can also use apply(this, [argument]) method for using other object method
 * it works directly
 * call() & apply works same
 * difference: call(this, args) & apply(this, [args])
 */
const result4 = obj1.func1.apply(obj2); //it works directly
const result5 = obj1.func2.apply(obj2, [50]); //it works directly
// console.log(result4);
// console.log(result5);

/**
 * We can also use bind() mehtod for using other object method
 */

const result6 = obj1.func1.bind(obj2);
const result7 = obj1.func2.bind(obj2);
const result8 = result6();
const result9 = result7(60);
console.log(result8);
console.log(result9);
