/**
 * 36-3 Keys, values, entries, delete, seal, freeze
 */

/**
 * An object has two things: 1) Keys 2) Values
 */

/**
 * Keys of Object: The Object.keys() static method returns an array of a given object's own string-keyed property names.
 * The Object.keys() method does not change the original object.
*/
const obj1 = {
    name: 'shihan',
    age: 30,
    address: 'UK',
    married: true,
    politics: 'BNP'
}

const keyOfobj1 = Object.keys(obj1);
// console.log(keyOfobj1);

/**
 * Values of Object: The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
 * The Object.values() method does not change the original object.
 */
const valuesOfobj1 = Object.values(obj1);
// console.log(valuesOfobj1);

/**
 * The entries() method returns an Two dimensional Array Iterator object with key/value pairs
 * The entries() method does not change the original array.
 */

const entiesOfobj1 = Object.entries(obj1);
// console.log(entiesOfobj1);

for (const [key, value] of Object.entries(obj1)) {
    // console.log(key, value);
}

const arr1 = ["Banana", "Orange", "Apple", "Mango"];
const entriesOfarr1 = arr1.entries();

for (element of entriesOfarr1) {
    // console.log(element);
}

/**
 * The delete operator removes a property from an object.
 * The delete operator deletes both the value of the property and the property itself.
 * After deletion, the property cannot be used before it is added back again.
 * Note: The delete operator should not be used on predefined JavaScript object properties. It can crash your application.
 */

// console.log(obj1);
// delete obj1.married;
// console.log(obj1);

/**
 * Object seal: The Object.seal() static method seals an object
 * The property values can be modified
 */

// console.log(obj1);
// Object.seal(obj1);
// delete obj1.politics;
// obj1.age = 35;
// console.log(obj1);

/**
 * Object freeze: The Object.freeze() static method freezes an object.
 * Freezing an object prevents extensions and makes existing properties non-writable and non-configurable
 */

console.log(obj1);
Object.freeze(obj1);
delete obj1.politics;
obj1.age = 35;
console.log(obj1);