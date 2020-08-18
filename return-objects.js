// incorrect way
// const incorrectObj = (firstName, lastName) => 
// {
//   firstName: firstName,
//   lastName: lastName
// };

// correct way without return keyword
const myObj = (firstName, lastName) => ({
  firstName: firstName,
  lastName: lastName
});
console.log(myObj('tyler', 'doggy'));

// correct way with return keyword
const testObj = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName
  };
};
console.log(testObj('tyler', 'perris'));
