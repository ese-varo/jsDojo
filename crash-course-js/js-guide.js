'use strict';


///////////////////////////////////////////////////////////////////////////////
//////////                     STRICT MODE                           //////////
///////////////////////////////////////////////////////////////////////////////

1) sloppy node
2) strict mode

// global object 
message = "hello world";
var message = "hello again";
console.log(global.message)
console.log(message)


// browser - window
// server - global


///////////////////////////////////////////////////////////////////////////////
//////////                      HOISTING                             //////////
///////////////////////////////////////////////////////////////////////////////

console.log(age);
var age = 26;
// this two lines are interpreted by de language in the next way
var age;
console.log(age);
age = 26;
let age = 26;

const originalPrice = 50;
const percentOff = 20;
const salePrice = originalPrice * (percentOff / 100);

return salePrice;
console.log(salePrice)

var price = 20
var isSale = true


///////////////////////////////////////////////////////////////////////////////
//////////                  VARIABLE SHADOWING                       //////////
///////////////////////////////////////////////////////////////////////////////

if (isSale) {
  var price = 20 - 2;
  console.log('sale price', price)
}
console.log('price', price)


///////////////////////////////////////////////////////////////////////////////
//////////                  TEMPLATE LITERALS                        //////////
///////////////////////////////////////////////////////////////////////////////

const firstName = 'Alvaro';
const lastName = 'Padilla';
const dob = 1985;
const fullName = `${firstName} ${lastName}, you are ${2020 - dob} years old`;
console.log(fullName);


///////////////////////////////////////////////////////////////////////////////
//////////                    ESCAPE CHARACTERS                      //////////
///////////////////////////////////////////////////////////////////////////////

let message = 'I\'m a string';
console.log(message);
message = "He said, \"I am string\".";
// or use template literals like `He said, "I am string"`
console.log(message);
// same for multiline strings without having to escape the new line character
message = `
 This is a string 
 that spans across
 three lines.`


///////////////////////////////////////////////////////////////////////////////
//////////                      DATA TYPES                           //////////
///////////////////////////////////////////////////////////////////////////////

// primitive types vs object types

// Primitive types:
// string
// number
// boolean
// undefined
// null
// symbol

// Everything else--object type(reference types)

///////////////////////////////////////////////////////////////////////////////
//////////                    EXPLICIT CONVERTION                    //////////
///////////////////////////////////////////////////////////////////////////////

using functions as: String(), Boolean(), etc
console.log(String(42));

///////////////////////////////////////////////////////////////////////////////
//////////      IMPLICIT/AUTOMATIC CONVERTION (COERCION)             //////////
///////////////////////////////////////////////////////////////////////////////

console.log('1' * '2'); // => 2
console.log('1' + 2); // => '12' String wins out over integers

// falsy values
// false
// 0
// ''
// null
// undefined
// NaN

// 1. Avoid direct comparisons like: if(!x) //if x is false

const username = '';

if (!username) {
  console.log('no username!')
}

// 2. Use triple equals === (strict equality operator)

if (undefined == null) // => is true
if (undefined === null) // => is false

if (undefined === null) {
  console.log('the same')
} else {
  console.log('not the same')
}
=> 'not the same'

// 3. Convert to real Boolean values where necessary
if (NaN === NaN) {
  console.log('the same')
} else {
  console.log('not the same');
}
// => 'not the same'

if (Boolean(NaN) === Boolean(NaN)) {
  console.log('the same')
} else {
  console.log('not the same')
}
// => 'the same'

if (Boolean(value) === true) { // is the same than: if(value) {}
}



///////////////////////////////////////////////////////////////////////////////
//////////              FLOW CONTROL IF / ELSE                       //////////
///////////////////////////////////////////////////////////////////////////////

const isAuthenticatedUser = true;
// let cartItemCount = 0;

// if (isAuthenticatedUser) {
  // add item to cart
  // cartItemCount = 1;
// } else {
  // tell user to login
  // console.log("Please log in!");
  // cartItemCount = 0;
// }

// using a ternary operator
// const cartItemCount = isAuthenticatedUser ? 1 : 0;
// console.log(cartItemCount);

// const age = prompt("What is your age?")
const age = 20;

// let greeting;
// if (age < 10) {
//   greeting = "Hey there";
// } else if (age > 18) {
//   greeting = "Greetings";
// } else if (age > 10) {
//   greeting = "What's up";
// } else {
//   greeting = "That's an interesting age!";
// }

// age : 20
// try to avoid this kind of ternary with multiple cases due to its 
// complexity these are less readable
const greeting = age < 10 ? "Hey there" : age > 18 ? "Greetings" : age > 10 ? "What's up" : "That's an interesting age!";
console.log(greeting);


///////////////////////////////////////////////////////////////////////////////
//////////                    SHORT-CIRCUITING                       //////////
///////////////////////////////////////////////////////////////////////////////

const response = 'Alvaro';
const isEmailVerified = true;
// let = 'alvaro';
// response = '';
// let username;

// if (response) {
//   username = response;
//   if (isEmailVerified) {
//     username = response;
//   }
// } else {
//   username = "guest";
// }

// const username = response ? response : "guest";
// this ternary operator could be reduced using a short-circuiting
const username = (isEmailVerified && response) || 'guest';
console.log(username);


///////////////////////////////////////////////////////////////////////////////
//////////                        CLOSURES                           //////////
///////////////////////////////////////////////////////////////////////////////

'use strict';

function counter(step = 1) {
  let count = 0;

  return function() {
    return count += step;
  }
  
  // return () => count += step;
}

const counting = counter(2);
console.log(counting()); // => 1
console.log(counting()); // => 2
console.log(counting()); // => 3
console.log(counting()); // => 4

// closure criterias
// 1) Closures are property of JS functions
// 2) To observe the closure you must execute the function 
//    in a different scope than where that function was originally defined.

// Closures matter because they allow us to remember or keep track of values

///////////////////////////////////////////////////////////////////////////////
//////////                    ARROW FUNCTIONS                        //////////
///////////////////////////////////////////////////////////////////////////////
// => 
// 1) Concise way for creating functions
// 2) Easier working with this keyword in objects / classes

// Their properties
// 1) Arrow functions are all function expressions and therefore
//    they're assign to a variable
// 2) All arrow functions are anonymous functions
function functionName() {
  return 'value';
}

const user = {
  name: 'john',
  joined: 'May 12th, 2013'
}

// normal function as a value
// const capitalize = function(name) {
//   return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
// }

// Arrow function
// parenthesis can be avoided just when there is one parameter, otherwise should be included
// Impicit return is available just need to remove curly braces and the 'return' keyword
const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
console.log(capitalize('varo'));

///////////////////////////////////////////////////////////////////////////////
//////////                 CALLBACK FUNCTIONS                        //////////
///////////////////////////////////////////////////////////////////////////////
// 1) A callback function is a function that is called after another function
// 2) All callback functions are known as Higher Order Functions
//
// The avility to pass a function to another function as a callback is called
// a Higher Order Function

function greetUser(name, callback) {
  return callback(capitalize(name));
}

const result = greetUser(user.name, name => `Hi there, ${name}`);
console.log(result);

// CALLBACK FUNCTION EXAMPLE
const message = () => console.log('3 years later!');

setTimeout(message, 3000);

const greeting = name => {
  console.log(`Hey ${name}, how is it going?`);
}

function secondEvent(callback, name) {
  callback(name);
}

secondEvent(greeting, 'Tyler');

(function() {
  console.log('this was trown by an IEFE');
})();

const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6));

function test() {}
test();


///////////////////////////////////////////////////////////////////////////////
//////////                       DEFAULT VALUES                      //////////
///////////////////////////////////////////////////////////////////////////////

function convertTemperature(celsius, decimalPlaces = 1) {
  // celsius to fahrenheit
  // decimalPlaces = decimalPlaces || 1;
  let fahrenheit = celsius * 1.8 + 32;
  // fahrenheit = 69.1;
  return fahrenheit.toFixed(decimalPlaces);
}

console.log(convertTemperature(21, 0));


///////////////////////////////////////////////////////////////////////////////
//////////             PRIMITIVE VS REFERENCE TYPES                  //////////
///////////////////////////////////////////////////////////////////////////////

// Object types are data structures that enable us to manage
// collections of primitives (undefined, null, boolean, number, string, symbol)

const num = 42;
const anotherNum = 42;

// console.log(num === anotherNum);
// console.log('hello world' === 'hello world');
// Primitives - are passed by value

const obj = {};
const anotherObj = obj;

anotherObj.a = 1;

// Reference (Objects) - passed by reference
console.log('another obj', anotherObj);
console.log('obj', obj);
// console.log(obj === anotherObj);



///////////////////////////////////////////////////////////////////////////////
//////////                       DESTRUCTURING                       //////////
///////////////////////////////////////////////////////////////////////////////

const user = {
  name: 'Tyler',
  username: 'ElTyler',
  email: 'tyler@gmail.com',
  details: {
    title: 'Singer'
  }
};

const { username, email } = user;
function displayUser() {
//   normal access to data of an object
//   console.log(`Username: ${user.username}, Email: ${user.email}`);
//   Destructoring
  console.log(`Username: ${username}, Email: ${email}`);
}
// displayUser();

// const { name } = user;
// const { title } = user.details;

// const { name, details: { title } } = user;
function displayUserBio({ name, details: { title } }) {
  console.log(`${name} is a ${title}`);
}

displayUserBio(user);



///////////////////////////////////////////////////////////////////////////////
//////////        MERGE OBJECTS WITH OBJECT SPREAD                   //////////
///////////////////////////////////////////////////////////////////////////////
const user = {
  name: '',
  username: '',
  phoneNumber: '',
  email: '',
  password: '',
  verified: true
};

const newUser = {
  username: 'ElTyler',
  email: 'tyler@gmail.com',
  password: 'password'
}

// Object Assing
// console.log(Object.assign({}, user, newUser, { verified: true }));

// Object Spread Operator
const createdUser = { ...user, ...newUser, verified: false };

console.log(user);
console.log(createdUser);


///////////////////////////////////////////////////////////////////////////////
//////////             PERFORM ACTIONS ON ALL ELEMENTS               //////////
///////////////////////////////////////////////////////////////////////////////
PERFORM ACTIONS ON ALL ELEMENTS
const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false }
];

// Map method
// const newTemps = temperatures.map(temperature =>
//   temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
// );
// forEach 
// newTemps.forEach(temperature => {
//   if (temperature.isHigh) {
//     console.log(`Temperature ${temperature.degrees} was record last week!`);
//   }
// });

// those methods can be chained
temperatures.map(temperature =>
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
).forEach(temperature => {
  if (temperature.isHigh) {
    console.log(`Temperature ${temperature.degrees} was record last week!`);
  }
});



///////////////////////////////////////////////////////////////////////////////
//////////                FILTER AND FIND METHODS                    //////////
///////////////////////////////////////////////////////////////////////////////

const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 },
];

// const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'));
// const results = restaurants.filter(restaurant => {
//   return restaurant.name.startsWith('C') && restaurant.milesAway < 3;
  // return true;
// });
// looking for many matches
const results = restaurants.filter(restaurant =>
  restaurant.name.startsWith('C') && restaurant.milesAway < 3
);
console.log(results);

// looking for just one restaurant
const result = restaurants.find(restaurant => 
  restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2
);
console.log(result);


///////////////////////////////////////////////////////////////////////////////
//////////             TRANSFORM ARRAY DATA WITH REDUCERS            //////////
///////////////////////////////////////////////////////////////////////////////
const menuItems = [
  { item: 'Blue Cheese Salad', price: 8 },
  { item: 'Spicy Chicken Rigatoni', price: 18 },
  { item: 'Ponzu Glazed Salomon', price: 23 },
  { item: 'Philly Cheese Steak', price: 13 },
  { item: 'Baked Italian Chicken Sub', price: 12 },
  { item: 'Pan Seared Ribeye', price: 31 },
];

// sum example
const total = menuItems.reduce((accumulator, menuItem) => {
  console.log(`
    accumulator: ${accumulator},
    menu item price: ${menuItem.price}
  `);
  return accumulator + menuItem.price;
}, 0);
console.log(total);

const cars = [
  { brand: 'ferrari', price: 10 },
  { brand: 'ford', price: 23 },
  { brand: 'nissan', price: 13 },
  { brand: 'lamborghini', price: 32 },
  { brand: 'toyota', price: 43 },
];

// strings example
const myCars = cars.reduce((accumulator, car) => {
  return `${accumulator} ${car.brand}, `;
}, '');

console.log(myCars);

///////////////////////////////////////////////////////////////////////////////
//////////            METHODS FOR THE SPREAD OPERATOR                //////////
///////////////////////////////////////////////////////////////////////////////
const breakfastMenuIdeas = ['Buckwheat Pancakes'];
const dinnerMenuIdeas = ['Glazed Salmon', 'Meatloaf', 'American Cheeseburger'];

const allMenuIdeas = [
  ...breakfastMenuIdeas,
  'Harvest Salad',
  'Southern Fried Chicken',
  ...dinnerMenuIdeas
];
// console.log(allMenuIdeas);

const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');
console.log(saladIndex);

// to replace an element, in this case 'Harvest Salad' by 'Garden Salad'
const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, saladIndex),
  'Garden Salad',
  ...allMenuIdeas.slice(saladIndex + 1)
];
console.log(finalMenuIdeas);

// to delete an element: 'Meatloaf'
const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');
const noMeatloafIdeas = [
  ...allMenuIdeas.slice(0, meatloafIndex),
  ...allMenuIdeas.slice(meatloafIndex + 1)
];
console.log(noMeatloafIdeas);



///////////////////////////////////////////////////////////////////////////////
//////////     SNAG ELEMENTS WITH DESTRUCTORING AND REST OPERATORS   //////////
///////////////////////////////////////////////////////////////////////////////
const finalMenuItems = [
  'American Cheeseburguer',
  'Southern Fried Chicken',
  'Glazed Salmon'
];

// let first = finalMenuItems[0];
// let second = finalMenuItems[1];
// let third = finalMenuItems[2];

// the same can be achieved destructuring the array
// const [first, second, third] = finalMenuItems;
// we can just take the first two if needed
// const [first, second] = finalMenuItems;

// swap variables values, use let to enable reassignment
let [first, second] = finalMenuItems;
console.log('before', { first }, { second });
[first, second] = [second, first];
// console.log(first, second, third);
console.log('after', { first }, { second });

// assign the first element to a variable and the rest to a new array
const [winner, ...losers] = finalMenuItems;
console.log(winner, losers);


///////////////////////////////////////////////////////////////////////////////
//////////           CONSTRUCTORS AND THE PROTOTYPE CHAIN            //////////
///////////////////////////////////////////////////////////////////////////////

// create objects manually: example
const student1 = {
  id: 1,
  name: 'Tyler',
  subjects: [],
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  }
};

student1.addSubject('Español');
console.log(student1.subjects);

// Constructor function
function Student(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

Student.prototype.addSubject = function(subject) {
  this.subjects = [...this.subjects, subject];
};

const student2 = new Student(2, 'Tyler');
student2.addSubject('History');

console.log(student2.subjects);

// Prototypical Inheritance
// each of the created objects inherits functionality from its 
// constructors prototype
//
// Every object has this 'prototype' property it's used by the language itself
// to give the object data type itself certain properties and methods
//
// To look at a given object prototype we can do it with the method
// Object.getPrototypeOf(obj);


///////////////////////////////////////////////////////////////////////////////
//////////        CLASSES FOR BETTER PROTOTYPICAL INHERITANCE        //////////
///////////////////////////////////////////////////////////////////////////////

// Classes - cleaner way to work with constructor functions and the prototype

// function Student() {}
// console.log(typeof class Student {}); // => function

class Student {
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }

  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  }

  getSubject() {
    return `Student: ${this.name}`;
  }
}

const student3 = new Student(3, 'Tyler');
student3.addSubject('Tamaulipas');
console.log(student3.subjects);
console.log(student3.getSubject());


///////////////////////////////////////////////////////////////////////////////
//////////               CLASS FEATURES WITH EXTENDS                 //////////
///////////////////////////////////////////////////////////////////////////////

class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }

  isDiscountable() {
    return this.discountable;
  }
}

// const product1 = new Product('Coffee Maker', 99.99, true);

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
    super(name, price, discountable);
    this.percentOff = percentOff;
  }

  getSalePrice() {
    if (super.isDiscountable()) {
      return this.price * ((100 - this.percentOff) / 100);
    } else {
      return `${this.name} is not eligible for discount`;
    }
  }
}

const saleProduct1 = new SaleProduct('Coffee Maker', 99.99, false, 20); console.log(saleProduct1.getSalePrice());



///////////////////////////////////////////////////////////////////////////////
//////////                              ASYNC                        //////////
///////////////////////////////////////////////////////////////////////////////

navigator.geolocation.getCurrentPosition(position => {
  console.log(position);
  console.log('done');
});

// callback hell
//
// before promises async code was handled by callback functions, there was a 
// problem with it, COMPLETE THIS PART


///////////////////////////////////////////////////////////////////////////////
//////////                           PROMISES                        //////////
///////////////////////////////////////////////////////////////////////////////

// pending
// fulfilled
// rejected
//
// 'resolve' and 'reject' are functions
// 'resolve' allows you to change the status of the promise from pending to fulfilled
//
// 'reject' allows you to change the status of the promise from pending to rejected
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);
});

// then, catch
// methods 'then' and 'catch' are created by the 'Promise' constructor when creating
// a promise. Both methods accept a function themselves.
//
// When the 'resolve' is called, the function passed to the 'then' method is going
// to be executed.
//
// If 'reject' is called (inside the promise) the code will execute the function
// passed to the 'catch' method.
//
// For every 'promise' only one method can be executed 'resolve' or 'reject', and
// only once, you cant call 'resolve' twice or call both 'resolve' and 'reject'.
//
// A promise is either 'fulfilled' or 'rejected' once.
//
// THEN
// At the 'then' method we can use the value send from the 'resolve' method as a
// parameter of the callback function it recieve.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);
});
promise
  .then(value => console.log(value))
  .catch(() => console.log('failure'))
//
// CATCH
// At the 'catch' method we can resive an error send by the 'reject' method as a
// parameter of the callback function it recieved.
//
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise failed')), 1000);
});
promise
  .then(value => console.log(value))
  .catch(error => console.error(error))
//
// FINALLY
// This is another promise method, which enables us to run code when the promises
// either've been fulfilled or rejected (when resolved, one way or another).
// Inside 'finally' callback function we can do whatever we need since we know 
// the asynchronous code is done.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise failed')), 1000);
});
promise
  .then(value => console.log(value))
  .catch(error => console.error(error))
  .finally(() => console.log('done'))

// Example of a promise comparing them with callback pattern and promise pattern
// callback base pattern
// navigator.geolocation.getCurrentPosition(position => {
//   console.log(position);
// });
// console.log('done');
// promise base pattern

const promise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(position => {
    resolve(position);
  }, error => {
    reject(error);
  });
});

promise
  .then(position => console.log(position))
  .catch(error => console.error(error))
  .finally(() => console.log('done'));

// Alternative syntax we can just pass 'resolve' and 'reject' as referencess to
// 'getCurrentPosition' instead of having to write out the entire arrow function
// as in the previous code snipped. We can just pass the 'resolve' reference to
// the resolve funtion as a first argument, and the reject function as the second
// argument

const promise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});

promise
  .then(position => console.log(position))
  .catch(error => console.error(error))
  .finally(() => console.log('done'));



///////////////////////////////////////////////////////////////////////////////
//////////             NETWORK REQUESTS WITH FETCH (APIs)            //////////
///////////////////////////////////////////////////////////////////////////////

// API: Application Program Interface
// a means for software to comunicate with other software

// REST APIs, are mean for specific type of data external to our app
// To get that data (REST APIs) we use javascipt to make
// a Network request, also known as AJAX request 
//
// C - create (POST)
// R - read (GET)
// U - update (PUT/PATCH)
// D - delete (DELETE)
//
// restAPI gives the equivalent to CRUD when working with remote data
//
// Example of using a restAPI
/*
 * Routes/endpoints
  GET /posts
  GET /posts/1
  POST /posts
  PUT /posts/1
  PATCH /posts/1
  DELETE /posts/1
*/

// GET the post number 1
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data));

// POST, create a new post (resource)
const blogPost = {
  title: 'Another Coll Post',
  body: 'Yeath anoteher coll post body',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(blogPost),
  headers: {
    'Content-Type': 'application/json'
  }
})

// PUT, update a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'The Tyler tale',
    body: 'A body',
    userId: 1
  }),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log('PUT - resource updated: ' + data));

// PATCH, update a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'PATCH Title'
  }),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log('PATCH - resource updated: ' + data));
// DELETE, delete a resource
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then(response => response.json())
  .then(data => console.log('DELETE resource: ' + data));



///////////////////////////////////////////////////////////////////////////////
//////////                       ASYNC AWAIT                         //////////
///////////////////////////////////////////////////////////////////////////////

// Any function preapended the 'async' keyword automatically returns a promise
//
// async function declaration 
//
// Promise using the 'Promise' constructor
// function getBlogPost() {
//   const post = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('blog post'), 1000);
//   });

//   post
//     .then(post => console.log(post))
//     .finally(() => console.log('done'))
// }

// promise using async await
//
async function getBlogPost() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise'), 2000);
  });

  const result = await promise;
  console.log(result);
  console.log('done');
}
// there is no need of chain 'then', and 'finally', as in the function above
// we just need to call the function itself
getBlogPost()
// async using arrow function
// const getBlogPost = async () => {}
//
// Another example using 'async' 'await'
async function blogPost() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await result.json();
  console.log(data);
}

blogPost();
