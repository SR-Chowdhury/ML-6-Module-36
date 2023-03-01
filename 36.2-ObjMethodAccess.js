/**
 * 36-2 Object method access and set property values
 */
const obj1 = {
    name : 'Shihan',
    age: 30,
    func: function() { console.log(this.name, ', Welcome to to the UK')},
    func2: function(args) {
        return this.name + ', Do you like '+ args +' ?';
    }
}

const obj1a = obj1.func();
const obj1b = obj1.func2('Bangladesh');
console.log(obj1a);
console.log(obj1b);