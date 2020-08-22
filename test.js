const tahoe = {
  mountains: ['Freel', 'Rose', 'Tallac', 'Rubicon', 'Silver'],
  print: function(delay = 1000) {
    // normal function expression
    // setTimeout(function() {
    //   console.log(this.mountains.join(', '));
    // }, delay);
    // arrow syntax
    setTimeout(() => {
      console.log(this.mountains.join(', '));
    }, delay);
  }
};
// tahoe.print();

// console.log(fetch('https://api.randomuser.me/?nat=US&results=1'));
const colors = ['red', 'black', 'white', 'pink'];
const news = [];

console.log(colors.indexOf('white'));
