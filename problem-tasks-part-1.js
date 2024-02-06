// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function temperature(Celsius) {
  let fahrenheit = (9 / 5) * Celsius + 32;
  return fahrenheit;
}
console.log(temperature(4));

console.log("=======================");

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0
const numbers = [5, 6, 11, 12, 98, 5];
function countNumber(array) {
  let count = 0;
  for (const element of array) {
    if (element === 5) {
      count += 1;
    }
  }
  return count;
}
console.log(countNumber(numbers));

console.log("=======================");

// Task-3:
// Write a function to count the number of vowels in a string.
function countVowel(string) {
  let items = string.split("");
  let vowels = 0;
  for (const item of items) {
    if (item === "A" || item === "a") {
      vowels += 1;
    } else if (item === "E" || item === "e") {
      vowels += 1;
    } else if (item === "I" || item === "i") {
      vowels += 1;
    } else if (item === "O" || item === "o") {
      vowels += 1;
    } else if (item === "U" || item === "u") {
      vowels += 1;
    }
  }
  return `This string contain ${vowels} vowels`;
}
console.log(countVowel("I am learning web development."));

console.log('==========================');


// Task-4:
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming
const str ='I am learning Programming to become a programmer';
function longestWord(string){
    let singleWord = string.split(" ");
    let longest = '';
    for(const single of singleWord){
        if(longest.length < single.length){
            longest = single;
        }
    }
    return longest;
}
const longWord = longestWord(str)
console.log(longWord);


console.log(';=============================');

// Task-5:
// Generate a random number between 10 to 20.
console.log(Math.round(Math.random()*10));
