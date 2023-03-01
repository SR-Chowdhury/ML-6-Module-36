/**
 * Clone Object or array
 */
const obj1 = {name: 'shihan', age: 30};
const copyObj1 = obj1;
console.log(obj1);
console.log(copyObj1);
copyObj1.name = 'moni';
console.log(obj1); // Changed both
console.log(copyObj1); // Changed both
// That's problem cause when you clone object to another variable it store the referece


/**
 * Shallow copy: use spread operator(...)
 */

const arr1 = [10, 20, 30];
const copyArr1 = [arr1];
const copyArr2 = [...arr1];

console.log(arr1);
console.log(copyArr1);
console.log(copyArr2); // Now it's fine

/**
 * Deep Copy: JSON parsing
 */

const obj2 = {name: 'moni', age: 25};
const copyObj2 = JSON.parse(JSON.stringify(obj2));
console.log(obj2);
console.log(copyObj2);