const itemsArray = ["oranges", "cloth", "book", 9, 20, false]

// for (let item = 0; item < itemsArray.length; item++ ){
//     console.log(itemsArray[item])
// }

let a = itemsArray.forEach((eachItem, idx) => {
    console.log(eachItem)

})
console.log(a)

const foodArray = ["beans", "rice", "yam", "egg", "cocoyam"]

const newItem = foodArray.map((foodItem) => foodItem.toUpperCase())
console.log(newItem)

const manyNumbers = [3, 5, 8, 9]
// [3 x 3 = 9, 5 x 5 = 25, 8 x 8 = 64, 9 x 9 = 81]

const itemsby2 = manyNumbers.map((each) => each ** 2)

console.log(itemsby2)

const filteredWords = foodArray.filter(each => !each.includes("e")).map(each => each.toUpperCase())
console.log(filteredWords)

const sum = manyNumbers.reduce((acc, curr, pt, ss) => {
    return acc + curr
}, 9)
console.log(sum)

const allType = foodArray.every((each) => typeof each === "string")
console.log(allType)

const aa = manyNumbers.findIndex(item => item < 8)
console.log(aa)

const bb = itemsArray.some(each => typeof each === "boolean")
console.log(bb)

const myNumbers = [20, 3, 35, 4, 9, 10]
const myStrings = ["Joy", "Apple", "Angel", "people"]
const myObj = [
    {
        name: "peter",
        age: 80
    },

    {
        name: "angel",
        // age: 666
    },
    {
        name: "Joy",
        age: 90
    },
]

let mySortedNum = myNumbers.sort((firstnum, secondnum) => secondnum - firstnum)

let sortedObj = myObj.map(each => {
    return {
        name: each.name.toLowerCase(),
        age: each.age || 0
    }
}).sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
})
console.log(sortedObj)

let mySortedStr = myStrings.map(eachString => eachString.toLowerCase()).sort()

console.log(mySortedNum)
console.log(mySortedStr)


const newObjSort = myObj.sort((itemone, itemtwo) => {
    if (itemone.age < itemtwo.age) return -1
    if (itemone.age > itemtwo.age) return 1
    return 0
})

console.log(newObjSort)

const products = [
    {
        product: "banana",
        price: 3
    },

    {
        product: "mango",
        price: 6
    },
    {
        product: "Tea",
        price: ""
    },
    {
        product: "Coffee",
        price: 10
    },
]
// find the total price of products
// sort based on their product