// console.log("how are we?");
// console.log('hello');
// console.log(`Hi everyone`);
// // "good afternoon" '' `` strings

// // 0 integer
// // 1 integer
// // 2.4 float

// //  true or false boolean

// // object data type
// let myObject = {
//     name:"Peace",
//     gender: "female",
//     nationality: "Nigeria",
//     height: 2.5,
//     isTrue: false,
// }
// console.log(myObject.name)

// // array [1,2,3,4]
// let myArr = ["dog", "cat", false, {name:"Joy"}]

// let firstNum = "4";
// console.log(typeof firstNum);

// let secondNum = 2;
// firstNum = parseInt(firstNum);
// let sum = firstNum + secondNum;
// console.log(typeof firstNum);
// console.log(sum);

// console.log(firstNum <= secondNum)

// let a = 2
// let b = 6
// // BEDMAS
// console.log(!(a < 2 || b < 5))

// a = 8

// if (a == 9) {
//     console.log(a * a)
// } else if (a == 2) {
//     console.log(a ** 3)
// } else if (a == 8) {
//     console.log("A is 8")
// } else {
//     console.log("A can be any number asides 9,8 and 2")
// }

// // ternary operator
// // condition ?(if true run this) :(it's not true)
// a == 9 ? console.log("it is 9") : a == 2 ? console.log("A is 2") : a == 8 ? console.log(a ** 3) : console.log("none is met")

// let day = "Monday"

// switch (day) {
//     case 9:
//         console.table("it is 9")
//         break
//     case 2:
//         console.table("a is 2")
//         break
//     case "8":
//         console.table(a ** 3)
//         break
//     default:
//         console.table("none is a valid number")

// }

// console.table({
//     name: "Joy",
//     gender: "female"
// })


// Math method
let myDecimalPlace = 58.3
let answer = Math.round(myDecimalPlace)
let myFloor = Math.floor(myDecimalPlace)
let myCeil = Math.ceil(myDecimalPlace);
let randomNum = Math.floor(Math.random() * 6)


// console.log(answer)
console.log(myFloor)
console.log(myCeil)
console.log(randomNum)

// date Method
const myDate = new Date()
console.log(myDate)
let getYear = myDate.getFullYear()
console.log(getYear)
let getMonth = myDate.getMonth() + 1
console.log(getMonth)
console.log(typeof getMonth)

if (getMonth === 12) {
    console.log("December is my month")
} else {
    console.log("It's not my month")
}

// alert("Good afternoon")
let hourOfTheDay = myDate.getHours()
console.log(hourOfTheDay)

// let myName = prompt("Enter your name")
// console.log(myName.trim())

// if (hourOfTheDay <= 11) {
//     alert("Good morning " + myName)
// } else if (hourOfTheDay <= 15) {
//     alert("Good afternoon " + myName)
// } else {
//     alert("Good evening " + myName)
// }

// let confirmText = confirm("Are you sure you want to delete?")
// console.log(confirmText)

// if(confirmText  === true){
//     alert("Successfully deleted")
// }else{
//     alert("Not deleted")
// }

// hourOfTheDay <= 11 ? alert("Good morning " + myName) : hourOfTheDay <= 15 ? alert("Good afternoon " + myName) : alert("Good evening " + myName)\\

let me = "pos"
let you = "agent"
let we = "bank"
let them = "institution"

// concatenation
let allWords = me + " " + you + " " + we

console.log(allWords)

// template literals
let allWordsTwo = `My ${me} ${you} is in the ${we}`
 console.log(allWordsTwo)
 console.log(allWordsTwo.length)
 console.log(allWordsTwo[0])
 console.log(allWords.toUpperCase())

 console.log(allWords.split(" "))

 let newItem = "secondary"
 let newItemArray = newItem.split("")
 console.log(typeof newItem)
 console.log(newItemArray)
//  console.log(Array.isArray(newItemArray))

 console.log(newItem.replace("ry","ries"))
 console.log(newItem.indexOf("j"))
 let stringi = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
let string = 'I love JavaScript. If you do not LOVE JavaScript what else can you love.'
console.log(string.match(patternTwo))

let n = "9"
parseInt(n)
