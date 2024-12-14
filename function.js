// our function script file

function greet () {
    const myDate = new Date()
    const hour = myDate.getHours()
    return hour
}

console.log(greet())


function printName(myName, age){
    let word = `Hello ${myName}.You are ${age} years old.`
    return word
}

console.log(printName("Peter", 20))

function addNumbers(firstNum = 3, secondNum = 9){
    let sum = firstNum + secondNum
    return sum
}

console.log(addNumbers(2, 3))

function all(){
    return arguments
}
console.log(all("hello", 2, true, ["joy"]))

const minusNum = function (a , b){
    return a - b
}

console.log(minusNum(20, 8))


const sum  = (function(a){
    console.log("hello")
    return a * a
})(6)

console.log(sum)

function someWords (one, two) {
    return one
}

const oneWord = (one, two) => {

    let a = "me"
 "hello everybody"
 return a
}


console.log(oneWord())



function go(){
    let total = "people"
    return total
}

console.log(go())

const person = { 
    firstName: "John", 
    lastName: "Peter", 
    age: 250, 
    country: 'Finland', 
    city: 'Helsinki', 
    skills: [ 'HTML', 'CSS', 'JavaScript','React','Node','MongoDB','Python','D3.js'], 
    isMarried: true,
    getDetails: function(){
        return `My name is ${this.firstName} ${this.lastName}. I am from ${this.country} and these are my skills ${this.skills}`
    }
}

console.log(person.isMarried)
console.log(person["isMarried"])

console.log(person.getDetails())

person.gender = "male"
console.log(person)


const personTwo = Object.assign({}, person)
console.log("clone:" ,personTwo)

console.log(Object.keys(person))
console.log(Object.entries(person))

console.log(person.hasOwnProperty("lastName"))