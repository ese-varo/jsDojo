// Modules

class App {
  constructor() {
    this.render();
  }

  render() {
    document.getElementById('root').innerHTML = `
      <div>Date: </div>
      `;
  }
}

// new App();

// this - reference to an object

// What is 'this' equal to?! Is the funciton called...
// 1) in the global context
// 2) as a method on an object
// 3) as a constructor function or class constructor
// 4) as a DOM event handler
//
// Global context
console.log(this); // => Window

// As a method on an object
const user = {
  first: 'Tyler',
  lsat: 'perrito',
  greetUser() {
    console.log(`Hi ${this.first} ${this.last}`);
  }
}
