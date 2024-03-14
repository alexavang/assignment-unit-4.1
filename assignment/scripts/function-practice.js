console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}

// Remember to call the function to test
console.log(helloName('Jo'));
console.log(helloName('Stacy'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(addNumbers(4, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
return firstNumber * secondNumber * thirdNumber;
}
console.log(multiplyThree(0, 2, 4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(1));
console.log(isPositive(0));
console.log(isPositive(-1));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return 'undefined';
  }
  else
    return array[array.length -1]
}
console.log(getLast([0]));
console.log(getLast([1]));
console.log(getLast([2]));
console.log(getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
for (let f=0; f<array.length; f++)
  if (array[f] === value){
  return true;
}
return false;
}
console.log(find(3, [0, 1, 2, 4]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
 if (string[0] === letter){
  return true;
}
else
  return false;
}
let myString = 'true';
console.log(isFirstLetter('t', myString));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
for(s of array){
   sum += s;
}
  // TODO: return the sum
  return sum;
}
console.log(sumAll([1, 2, 10, 8, 4]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
let positive = [];
for(p of array){
  if(p > 0) {
    positive.push(p);
  }
}
return positive
}
let array = [-4, -3, 0, 1, 2];
let positiveArray = allPositive(array);
console.log(positiveArray);
console.log(array);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Create a function that returns the number of true values 
// there are in an array.

// Examples: 
// countTrue([true, false, false, true, false]) -> 2
// countTrue([false, false, false, false]) -> 0
// countTrue([]) -> 0

// Notes:
// Return 0 if given an empty array.
// All array items are of the type bool (true or false)

// We want to determine the number of true values in the array.
// We start by creating and giving a variable num the value of 0.
// Then for every value in the array if it's true (exact match only),
// we increment the num variable by 1.
// We return the value of num which represents the amount of true 
// in the array.

function countTrue(array){
  let num = 0;
  for(i=0; i<array.length; i++){
    if (array[i] === true){
      num++;
    }
  }
  return num;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));

// Another alternative way of doing this problem.

function countTrue(array){
  let num = 0;
  for(let n of array){
    num += n;
  }
  return num;
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
