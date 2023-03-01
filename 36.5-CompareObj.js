/**
 * 36-5 (advanced) Compare objects, referential integrity
 */

const a = {};
const b = {};
const c = {a: 'shihan', b: 'Moni'};
const d = {a: 'shihan', b: 'Moni'};
const e = b;

if(a == b) {    
    console.log('a & b is same');
} else {
    console.log('a & b is not same');
}

if(c == d) {    
    console.log('c & d is same');
} else {
    console.log('c & d is not same');
}

if(b == e) {    
    console.log('b & e is same'); // Cause non-primitive component store the memory reference

} else {
    console.log('b & e is not same');
}


/**
 * Comparison Method 1: Never use this cause it is not efficient
 */
const stringC = JSON.stringify(c);
const stringD = JSON.stringify(d);

if(stringC == stringD) {    
    console.log('stringC & stringD is same'); // It works fine; but if the object property order is different then it won't work

} else {
    console.log('stringC & stringD is not same');
}


/**
 * Comarison Method 2: It is also not efficient
 */

const x = {a: 5, b: 9, e: 8};
// const y = {a: 5, b: 9, e: 8};
const y = {a: 5, c: 9, d: 8};


const func = (x, y) => {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    // console.log(xKeys, yKeys);

    if (xKeys.length === yKeys.length) {
        for (const element of xKeys) {
            if (x[element] !== y[element]) {
                return false;
            }
        }
        return true;
    } 
    else {
        return false;
    }
}

const isSame = func(x, y);
console.log(isSame);

