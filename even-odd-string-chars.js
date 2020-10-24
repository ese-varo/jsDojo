// function processData(input) {
//   let evenString = "";
//   let oddString = "";

//   if (input.length > 1) {
//     for (let i = 0; i < input.length; i++) {
//       i % 2 == 0 ? (evenString += input[i]) : (oddString += input[i]);
//     }
//     console.log(`${evenString} ${oddString}`);
//   }
// }

function processData(input) {
  //Enter your code here
  let evenString = "";
  let oddString = "";

  if (input.length > 1) {
    for (let i = 0; i < input.length; i++) {
      i % 2 == 0 ? (evenString += input[i]) : (oddString += input[i]);
    }
    console.log(`${evenString} ${oddString}`);
  }
}

processData("2");
processData("Hacker");
processData("Rank");
