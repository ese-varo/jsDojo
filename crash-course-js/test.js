const demo = document.getElementById('demo');
const count = document.getElementById('count');
const reset = document.getElementById('reset');

demo.addEventListener('click', counting);
reset.addEventListener('click', counterReset);
let counter1 = increment();

function counting() {
  printCounter(counter1());
}

function increment() {
  let counter = 0;
  return () => counter += 1;
}

function counterReset() {
  printCounter(0);
  counter1 = increment();
}

function printCounter(num) {
  count.innerHTML = `${num}`;
}

const user = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  verification: false
}

const newUser = {
  username: 'Tyler',
  email: 'eltyler@tyler.com',
  password: 'password'
}

const mergedUser = { ...user, ...newUser, verification: true };
// console.log(mergedUser);
// console.log(user);
// console.log(newUser);

console.log(Boolean(NaN) === Boolean(NaN));

const username = '';

if (!username) {
  console.log('No username');
} else {
  console.log('Username present');
}


class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  forLoop() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        
      }
    }
  }
}

