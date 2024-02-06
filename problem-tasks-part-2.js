// Task -1:
// Find the lowest number in the array below.
const heights = [167, 190, 120, 165, 137];
function lowestNumber(array){
    let lowestNum = array[0];
    for(const number of array){
        if(lowestNum > number){
            lowestNum = number;
        }
    }
    return lowestNum;
}
console.log(`The lowest number is ${lowestNumber(heights)}`);

console.log('=======================');

// Task -2:
// Find the friend with the smallest name.
const nameArray = ["rahim", "robin", "rafi", "ron", "rashed"];
function nameFunction(names){
  let smallestNamme = names[0];
  for(const name of names){
    if(smallestNamme.length > name.length){
      smallestNamme = name;
    }
  }
  return smallestNamme;
}
console.log(nameFunction(nameArray));

console.log('=========================');


// Task-3:
// Your task is to calculate the total budget required to buy electronics:
//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
function calculateElectronicsBudget(laptop, tablet, mobile){
  const laptopPrice = 35000 * laptop;
  const tabletPrice = 15000 * tablet;
  const mobilePrice = 20000 * mobile;
  return laptopPrice + tabletPrice + mobilePrice;
}
const laptopNum = 1;
const tabletNum = 1;
const mobileNum = 3;
console.log(`Total money requierd ${calculateElectronicsBudget(laptopNum, tabletNum, mobileNum)} TK`);

console.log('==========================');

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
// Input
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(phones){
  let sumOfPrice = 0;
  let number = 0;
  for(const phone of phones){
    sumOfPrice += phone.price
    number += 1;
  }
  return sumOfPrice / number;
}
console.log(`The avarage price of device is ${findAveragePhonePrice(phones)} TK`);


// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
