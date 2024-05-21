function sayHello() {
   console.log("Hello, World!");
}

function hello(name = "World") {
   return `Hello, ${name}`;
}
console.log(hello());
console.log(hello("Lamar"));