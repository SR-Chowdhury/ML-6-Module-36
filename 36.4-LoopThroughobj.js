/**
 * 36-4 Loop through an object using for in, for of, object entries
 * For in loop used in Object;
 * For of loop used in Array;
 * For of loop can be used with the help of Object.entries()
 */

/**
 * We can read object properties by three ways
 */

const obj1 = {
    name: 'shihan',
    age: 30
}
// Way 1
// console.log(obj1.name);

// Way 2
// console.log(obj1['name']);

// Way 3
const x = obj1.name;
// console.log(x);

/**
 * We can use for of in Object but with the help of keys we can get object properity and it's value
 */

const keys = Object.keys(obj1);
for (const key of keys) {
    // console.log(key, obj1[key]);
}


/**
 * For in loop can use in Object; Here we don't need to use Object.keys()
 */

for (const element in obj1) {   
    // console.log(element);
}

/**
 * Advanced Mehtod: Object.entries()
 */

for (const [key, value] of Object.entries(obj1)) {
    console.log(key, value);
}