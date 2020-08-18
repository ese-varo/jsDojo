/*
  * Challenge 1)
  * We have defined a funciton named rangeOfNumbers with two parameters. The
  * function should return an array of integers which begins with a number
  * represented by the firstNum parameter and ends with a number represented by
  * the lastNumb parameter. The starting number will always be less than or equal to
  * the ending number. Your function must use recursion by calling itself and not use
  * loops of any kind. It should also work for cases where both firstNum and
  * lastNum are the same.
*/
function rangeOfNumbers(firstNum, lastNum) {
  if (firstNum === lastNum) {
    return [firstNum];
  } else if (firstNum < lastNum) {
    const numbers = rangeOfNumbers(firstNum, lastNum - 1);
    numbers.push(lastNum);
    return numbers;
  } else {
    console.log(`
      Invalid input, 'firstNum' should be less or
      equal than 'lastNum'!
    `);
  }
}

// console.log(rangeOfNumbers(2, 2));
// console.log(rangeOfNumbers(5, 2));
// console.log(rangeOfNumbers(2, 7));

// Countdown function
function countDownFrom(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}
// countDownFrom(10);

function countdownRecursive(num) {
  if (num === 0) {
    return;
  }

  console.log(num);
  countdownRecursive(num - 1);
}
// countdownRecursive(5);

// Multiply exercise
const elements = [2, 3, 4, 5, 2, 3, 5];
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  }

  return arr[n - 1] * multiply(arr, n - 1);
}

function multiply2(arr, n) {
  if (n <= 0) 
    return 1;
  else 
    return multiply(arr, n - 1) * arr[n - 1];
}
// console.log(multiply(elements, 3));

// countdownArray example
function countDownArr(number, c = 0) {
  if (number < 1)
    return [];
  
  if (c === number) 
    return [];
  const result = countDownArr(number, c + 1);
  result.push(c + 1);
  return result;
}
// console.log(countDownArr(5));

// countdown with shift
function countdown(number) {
  if (number < 1) 
    return [];

  if (number <= 1)
    return [number];
  
  const result = countdown(number - 1);
  result.unshift(number);
  return result;
}
// console.log(countdown(3));
let sampleArr = [];
sampleArr.unshift(1);
sampleArr.unshift(2);
sampleArr.unshift(3);
// console.log(sampleArr);

// factorial of a number
function factorial(n) {
  if (n < 1) {
    console.log('Enter a valid number');
    return;
  }

  if (n === 1)
    return 1;
  else
    return n * factorial(n - 1);
}
// console.log(factorial(5));

// find the greatest common divisor (gdc) of two positive numbers


// exponent of a number
function exponent(base, exp) {
  if (base < 1 || exp < 1) 
    return;

  if (exp <= 1)
    return base;
  return base * exponent(base, exp - 1);
}
// console.log(exponent(8, 3));

// fibonacci sequence
function fibonacci(n) {
  if (n < 0) 
    return;
  else if (n < 1)
    return [0];
  else if (n < 2)
    return 1;
  else{
    const result = (n - 2) + fibonacci(n - 1);
    
  }
}
// fibonacci(4);
// console.log(fibonacci(4));
// const recursion = confirm('recursion?');

function fib(n) {
  if (n < 1) return 0;
  if (n < 3) return 1;

  return fib(n - 2) + fib(n - 1);
}

console.log(fib(6));
