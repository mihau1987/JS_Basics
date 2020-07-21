// 1. Napisz program, aby utworzyć nowy string z podanych dwóch ciągów.

// 2. Napisz program, aby sprawdzić, czy dana liczba dodatnia jest wielokrotnością 3, czy wielokrotnością 7.

// 3. Napisz program, aby sprawdzić, czy dana liczba dodatnia jest wielokrotnością 5, czy wielokrotnością 6.

// 4. Napisz program, aby sprawdzić, czy długość podanego zdania jest dłuższa niż 10.

// 5. Napisz program aby sprawdzić, długość podanego zdania jest wielokrotnością 9.

// 6. Napisz program, który obliczy różnicę między dowolną liczbą i liczbą 19. Wynik podaj jako wartość bezwzględną.

// 7. Napisz program, aby uzyskać różnicę między podaną liczbą, a 13. Jeśli liczba jest większa niż 13, zwróć wartość bezwzględną powiększoną o 10.

// 8. Napisz program, aby obliczyć sumę dwóch podanych liczb całkowitych. Jeśli dwie wartości są takie same, program zwraca ich sumę potrojoną.

// 9. Napisz program, aby sprawdzić dwie podane liczby. Zwróć prawda, jeśli jedna z liczb to 50 lub jeśli ich suma równa się 50. W przeciwnym wypadku zwróć fałsz.

// 10. Napisz program, aby sprawdzić, czy dana liczba całkowita zawiera się w przedziale 20 do 100 lub 100 do 400.

// 11. Napisz program , aby sprawdzić z dwóch podanych liczb całkowitych, czy jedna jest dodatnia, a druga ujemna.


// 1. Napisz program, aby utworzyć nowy string z podanych dwóch ciągów.

let str1 = "Planeta"
let str2 = "Ziemia"

console.log(str1 +" "+ str2);


// 2. Napisz program, aby sprawdzić, czy dana liczba dodatnia jest wielokrotnością 3, czy wielokrotnością 7.

// 7n // 3n - n - dowolna liczba całkowita
// 7 * 3 // 3 * 7
// 7 * 3 * dowolna_liczba
// 7 * 3 * n = 21n // 21 * 1 = 7 * 3 * 1 // 42 = 21 * 2 = 7 * 3 * 2 // 63 = 21 * 3 = 7 * 3 * 3
// else if (num3 % 3 === 0) {
//   console.log("Liczba jest wielokrotnością 3")
// } else if (num3 % 7 === 0) {
//   console.log("Liczba jest wielokrotnością 7")
// } else {
//  console.log("Liczba nie jest wielokrotnością 3 i 7")
// }

let num4 = 28

if (num4 % 21 === 0) {
  console.log("Liczba jest wielokrotnością 3 i 7")
} else if (num4 % 3 === 0) {
  console.log("Liczba jest wielokrotnością 3")
} else if (num4 % 7 === 0) {
  console.log("Liczba jest wielokrotnością 7")
} else {
 console.log("Liczba nie jest wielokrotnością 3 i 7")
}

let numTest = 21

if (numTest % 3 === 0 && numTest % 7 === 0) {
  console.log("Liczba jest wielokrotnością 3 i 7")
}


// 3. Napisz program, aby sprawdzić, czy dana liczba dodatnia jest wielokrotnością 5, czy wielokrotnością 6.

let num = 30

if (num % 5 === 0 && num % 6 === 0) {
  console.log("Liczba jest wielokrotnością 5 i 6")
} else {
  console.log("Liczba nie jest wielokrotnością 5 i 6")
}

//4. Napisz program, aby sprawdzić, czy długość podanego zdania jest dłuższa niż 10.
let sentence = "Ala ma kota"
if (sentence.length > 10) {
  console.log("Zdanie ma więcej niż 10 znaków")
} else {
  console.log("Zdanie ma mniej niż 10 znaków")
}


//5. Napisz program aby sprawdzić, długość podanego zdania jest wielokrotnością 9.
let sentence2 = "Jestem Batman i R!"
// 9 * 2 = 18 , 9 * 3 = 27, 9 * n - 9 * 7 / 9n : 9 = n / 9 18

console.log(sentence2.length)
if (sentence2.length % 9 === 0) {
  console.log("Długość zdania jest wielokrotnością liczby 9")
} else {
  console.log("Długość zdania nie jest wielokrotnością liczby 9")
}


// 6. Napisz program, który obliczy różnicę między dowolną liczbą i liczbą 19. Wynik podaj jako wartość bezwzględną.

let numb = 10

if (numb >= 0) {
  console.log(19 - numb)
} else {
  console.log("Wartość ujemna")
}


//8. Napisz program, aby obliczyć sumę dwóch podanych liczb całkowitych. Jeśli dwie wartości są takie same, program zwraca ich sumę potrojoną.
let number1 = 100
let number2 = 100

if (number1 === number2) {
  console.log((number1 + number2) * 3)
} else {
  console.log(number1 + number2)
}


//9. Napisz program, aby sprawdzić dwie podane liczby. Zwróć prawda, jeśli jedna z liczb to 50 lub jeśli ich suma równa się 50. W przeciwnym wypadku zwróć fałsz.

let num1 = 28
let num2 = 20

if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
  console.log(true)
} else {
  console.log(false)
}
console.log("aaa")
console.log(num1 === 50 || num2 === 50 || num1 + num2 === 50)


// 10. Napisz program, aby sprawdzić, czy dana liczba całkowita zawiera się w przedziale 20 do 100 lub 100 do 400.

let liczba = 200

if (liczba >= 20 && liczba <= 100) {
    console.log("Liczba zawiera się w przedziale od 20 do 100")
}
else if (liczba > 100 && liczba <= 400) {
    console.log("Liczba zawiera się w przedziale od 100 do 400")
} else {
  console.log("Liczba nie zawiera się w żadnym z wymienionych przedziałów")
}


//11. Napisz program , aby sprawdzić z dwóch podanych liczb całkowitych, czy jedna jest dodatnia, a druga ujemna.

let liczba1 = -25
let liczba2 = 40

if ( (liczba1 > 0 && liczba2 < 0) || (liczba2 > 0 && liczba1 < 0 ) ) {
  console.log('Spełnia')
} else {
  console.log('Nie spełnia')
}

if (liczba1 > 0 && liczba2 < 0){
  console.log("Spełnia")
}
else if (liczba2 > 0 && liczba1 < 0){
  console.log("Spełnia")
}else {
  console.log("Nie spełnia")
}


// 12. Dana jest zmienna `sentence` typu string zawierająca zadanie.
//Utwórz nową zmienną, dodając „Py” przed zmienną `sentence`. Jeśli podany string zaczyna się od „Py”, zwróć oryginalny string.

let zdanie = 'Ala ma kota';
let noweZdanie = 'Py' + zdanie

if (zdanie.startsWith('Ala')) {
  console.log(zdanie);
}

if (zdanie.startsWith('Py')) {
  console.log(zdanie);
} else {
  console.log('Py' + zdanie);
}
