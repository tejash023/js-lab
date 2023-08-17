var name = "Alice";

function greet() {
  console.log("Hello, " + name + "!");
}

function changeName() {
  name = "Bob";
  greet();
}

changeName();
