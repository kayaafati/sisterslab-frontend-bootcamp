let a = 2;
let b = 3;
let c = 2;
(a == b) //false
(a == c) //true

typeof "John Doe" // string
typeof 3.14 // number
typeof true // boolean
typeof 234567890123456789012345678901234567890n // bigint
typeof undefined // undefined
typeof null // object
typeof Symbol('symbol') // symbol

let x = 2;
let y = "2";
(x == y) // true
(x === y) // false

let x = 3;
let y = "3";
x + y // 33

let x = 24;
let y = "Hello";
x + y // 24Hello

let name = "Vivek";
let surname = " Bisht";
name + surname // Vivek Bisht

let x = 3;
let y = "3";
x - y // 0


let x = 0;
let y = 23;

if(x) { console.log(x) } // çıktı olmaz çünkü x değişkeninin değeri 0'dır, 0 değeri false olarak değerlendirilir. Bu nedenle koşul sağlanmaz ve console.log(x) ifadesi çalışmayacağından herhangi bir çıktı olmaz.

if(y) { console.log(y) } // 23 çünkü y değişkeninin değeri 23'tür, 0 olmayan tüm sayılar (pozitif veya negatif) true olarak değerlendirilir. Bu nedenle koşul sağlanır ve console.log(y) ifadesi çalışır. Sonuç olarak, çıktı olarak 23 ekrana yazdırılır.


//isNaN() fonksiyonu, parametre olarak aldığı değerin sayı olup olmadığını kontrol eder. Eğer sayı ise false döndürür, eğer sayı değilse true döndürür.
isNaN("Hello") // true
isNaN(345) // false
isNaN('1') // false
isNaN(true) // false
isNaN(false) // false
isNaN(undefined) // true