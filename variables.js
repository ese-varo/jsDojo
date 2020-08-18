const sayHi = () => {
  var hola = "Hi this is tyler";
  console.log(hola);
}
// sayHi();
// console.log(hola);

// var keyowrd on function block off the scope of the variable
if (!hola) {
  var hola = "hola soy el tyler";
}
// console.log(hola);


// var keyword on for loops scope
var div;
var container = [];

for (var i = 0; i < 5; i++) {
  div = function () {
    console.log('This is box #' + i);
  }
  // div();
  container.push(div);
}

container.forEach(element => console.log(element()));

// let keyword on for loops
container = [];
for (let i = 0; i < 5; i++) {
  div = () => console.log('This is box #' + i);
  container.push(div);
}
container.forEach(elem => console.log(elem()));
