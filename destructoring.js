// Destructoring objects
const person = {
  firstName: 'Tyler',
  lastName: 'Doggy',
  spouse: {
    firstName: 'Funqui',
    lastName: 'Locote'
  }
};

function sayHi({ spouse: { firstName } }) {
  console.log(`Hi ${firstName}`);
}
sayHi(person);

// Destructoring arrays
const [, secondAnimal,] = ['Chicken', 'Perrito', 'Cat'];
console.log(secondAnimal);
