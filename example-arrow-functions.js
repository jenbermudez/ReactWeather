var names = ['Andrew', 'Julie', 'Jen'];

// *****annoymous function vs arrow function*****

// names.forEach(function (name) {
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Jennifer'));

// *****annoymous function vs arrow function 'this' binding example*****

// var person = {
//     name: 'Jennifer',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name)
//         });
//     }
// };

// person.greet();

// Challenge Area
function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b
};

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));

console.log(addStatement(4, 7));
console.log(addExpression(3, -2));