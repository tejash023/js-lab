// Var - Can be reassigned and redeclared
var a = "Ankit";
a = 10;
a = 20;
a = false;
a = "Arvind";
var a = true;

console.log("A: ", a);

// Let - can be reassigned but cannot be redeclared
let a = "Ankit";
a = 10;
a = 20;
a = false;
a = "Arvind";
let a = true; // error

// Const - cannot be reassigned or redeclared
const uName = "Rahul";
uName = "Vishal"; // error
