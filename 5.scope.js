// var a = 5;

// function outer() {
//   var b = 10;

//   function inner() {
//     var c = 15;
//     console.log(a + b + c);
//   }

//   inner();
// }

// outer();

// Answer will be 5 + 10 + 15 => 30 (Scope chaining - in inner function first it will check if a is there in local scope > if not it will move up to outer > still not found then it will move to global scope => a == 5)

// var a = 5;

// function outer() {
//   var b = 10;

//   function inner() {
//     var c = 15;
//     console.log(a + b + c);
//     var a = 10;
//     //console.log(a + b + c);
//   }

//   inner();
// }

// outer();

// Answer will be NAN - undefined + 10 + 15 => NaN
// c and a intilized and a = 15 at line no 22 c = 15, but a is still undefined at line no 23

// var a = 5;

// function outer() {
//   var b = 10;

//   function inner() {
//     var c = 15;
//     console.log(a + b + c);
//     let a = 10;
//   }

//   inner();
// }

// outer();

// Answer will be error - because when inner will try to access a, it will through error because a is in TDZ

let x = 5;

function example() {
  console.log(x);

  if (true) {
    let x = 10;
    const y = 15;
    console.log(x + y);
  }

  console.log(x);
}

example();
console.log(x);
