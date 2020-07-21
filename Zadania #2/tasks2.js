// 1. Write a JS program to find maximum between two numbers.
let num1 = 30
let num2 = 40

if (num1 > num2) {
  console.log("Num1 jest liczbą maksymalną")
}
if (num1 < num2) {
  console.log("Num2 jest liczba maksymalną")
}
if (num1 === num2) {
  console.log("Num1 i Num2 są równe")
}


// 2. Write a JS program to find maximum between three numbers.

let numb1 = 50
let numb2 = 20
let numb3 = 30

if (numb1 > numb2 && numb1 > numb3) {
  console.log("Numb1 jest liczbą maksymalną")
}
if (numb2 > numb1 && numb2 > numb3) {
  console.log("Numb2 jest liczbą maksymalną")
}
if (numb3 > numb1 && numb3 > numb2) {
  console.log("Numb3 jest liczbą maksymalną")
}


// 3. Write a JS program to check whether a number is negative, positive or zero.

let numTest = 2

if (numTest < 0) {
  console.log("The number is negative")
}
if (numTest > 0) {
  console.log("The number is positive")
}
if (numTest === 0) {
  console.log("The number is zero")
}


// 4. Write a JS program to check whether a number is divisible by 5 and 11 or not.

let num3 = 55

if (num3 % 5 === 0 && num3 % 11 === 0) {
  console.log("Liczba jest podzielna przez 5 i 11")
} else {
  console.log("Liczba nie jest podzielna przez 5 i 11")
}


// 5. Write a C program to check whether a number is even or odd.

let num4 = 5

if (num4 % 2 === 0) {
  console.log("The number is even")
}
else if (num4 % 2 !== 0) {
  console.log("The number is odd")
}


// 6. Write a C program to check whether a year is leap year or not.

let year = 2018

if (year % 4 === 0 && year % 100 !== 0) {
  console.log("The year is leap")
} else {
  console.log("The year is common")
}
