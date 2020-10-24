const tahoe = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: function (delay = 1000) {
    // normal function expression
    // setTimeout(function() {
    //   console.log(this.mountains.join(', '));
    // }, delay);
    // arrow syntax
    setTimeout(() => {
      console.log(this.mountains.join(", "));
    }, delay);
  },
};
// tahoe.print();

// console.log(fetch('https://api.randomuser.me/?nat=US&results=1'));
const colors = ["red", "black", "white", "pink"];
const news = [];

// console.log(colors.indexOf("white"));

function whatIsThis() {
  // "use strict";
  this.some = 3;
  console.log(this.some);
}
// whatIsThis();
// console.log(this.some);

const templateLiteral = `This is a template literal test.
We can start saying that 4 + 5 is equal to ${4 + 5}`;
// console.log(templateLiteral);
// console.log(Number.MAX_SAFE_INTEGER);

let arr = [2, true, 2, null];
let obj = {
  name: "varo",
  age: 15,
};

// console.log(obj + arr + "2");
// console.log("sdf" * 5);
// console.log("2" * 2);

let empty;

// console.log(empty, obj.hello);

// let world;

// function hello() {
//   console.log(world, "world");
// }
// hello();
// world = "hello ";

// console.log(5 + false);

// function Person(initialAge) {
//   this.age = this.resolveAge(initialAge);
//   this.amIOld = function () {
//     let message = "";
//     if (this.age < 13) message = "You are young.";
//     else if (this.age < 18) message = "You are a teenager.";
//     else message = "You are old";
//     console.log(message);
//   };
//   this.yearPasses = function () {
//     this.age++;
//   };
// }

// Person.prototype.resolveAge = function (age) {
//   if (age < 0) {
//     console.log("Age is not valid, setting age to 0.");
//     return 0;
//   } else return age;
// };
// let person = new Person(10);
// console.log(person.age);

// destructurign doubt
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  const sayHello = "hola";
  const sayAdios = "Adios";
  return { sayHello, sayName, sayAdios };
};

const Nerd = (name) => {
  const { sayName } = Person(name);
  // const sayName = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return { sayName, doSomethingNerdy };
};

const jeff = Nerd("jeff");

jeff.sayName();
jeff.doSomethingNerdy();
