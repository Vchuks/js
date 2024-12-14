
const fruitArray = ["orange", "mango", "paw-paw", "pineapple"]
console.log(fruitArray)

const numberArray = [8, 9, 7, 20,8]

// index starts with 0
// length starts with 1

const myName = "Vivian is a girl"
console.log(myName.split(""))

console.log(fruitArray[3])
// console.log(numberArray[2])

numberArray[2] = 30
console.log(fruitArray.indexOf("mango"))

console.log(typeof numberArray)

console.log(Array.isArray(numberArray))

console.log(fruitArray.toString())
console.log(fruitArray.join("#"))

const newItems = ["pen", 20, 9, 5, 'chicken', true, {name: "joy"}, undefined, "peter"]

const arraySlice = newItems.slice(4)
console.log(arraySlice)
console.log(newItems)


// console.log(newItems.splice(1,2, "newA",3, 7.8))
// console.log(newItems)

const nameArray = []
nameArray.push("People")
nameArray.push("Javascript")
console.log(nameArray)

nameArray.pop()

nameArray.unshift("Everybody")
nameArray.unshift("Apple")
nameArray.shift()
console.log(nameArray)
nameArray.reverse()
console.log(nameArray)

const a =[1,2,3,4,5]

console.log(a.reverse())
console.log(newItems.sort())

// for loop

for (let num = 1; num < 6; num ++){
    console.log(num + num)
}

const person = {
    name: "Joy",
    gender: "female",
    language: "English",
    weight: "20kg",
    age: 40,
    isMarried: false,
}

for (let one in person){
    
    if(one === "name"){
        console.log(`My name is ${person.name}`)
    }else{
        console.log("no name")
    }
}

for (let each of fruitArray){

    console.log(each.toUpperCase())
}

let b= 2;
// while (b < 8){
//     console.log(b,b * b, "hello")
//     b++
// }

do {
    console.log(b,b * b, "hi")
    b++
} while (b <8)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// for (let i = 0; i < ages.length){
//     ages[i]
// }

let total = 0;

for (let each of ages){
    // total = total + each
    total += each
}

console.log(total/ages.length)