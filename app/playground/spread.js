// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(4, 3));
//
//
// var toAdd = [5, 9];
//
// console.log(add(...toAdd));

//
// var groupA = ['niki', 'who', 'jen'];
// var groupB = ['Mon'];
//
// var final = ['Seth', ...groupA];


var person = ['Vina', 38];
var personTwo = ['Gary', 49];

//Hi Andrew, you are 25;

function greeting(name, age){
  console.log(`Hi ${name}, you are ${age}`);
}

greeting(...person);
greeting(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach((name)=> {
  console.log(`Hi ${name}!`);
})
