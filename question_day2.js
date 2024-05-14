//1==> Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }
// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

//solution
const addName = (obj, name, value) => ({ ...obj, [name]: value })

console.log(addName({}, "Brutus", 300))
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440))


//2==> Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

// Examples
// derivative(1, 4) ➞ 1
// derivative(3, -2) ➞ 12
// derivative(4, -3) ➞ -108

//solution
const derivative = (b, m) => b * (m ** (b - 1))

console.log(derivative(3, -2))
console.log(derivative(4, -3))


//3==> Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, "f") ➞ "granddaughter"
// generation(-3, "m") ➞ "great grandfather"
// generation(1, "f") ➞ "daughter"

//solution
const generation = (num, c) => {
    if (num === -3 && c === 'f') { return 'great grandmother' }
    else if (num === -3 && c === 'm') { return 'great grandfather' }
    else if (num === -2 && c === 'f') { return 'grandmother' }
    else if (num === -2 && c === 'm') { return 'grandfather' }
    else if (num === -1 && c === 'f') { return 'mother' }
    else if (num === -1 && c === 'm') { return 'father' }
    else if (num === 0) { return 'me' }
    else if (num === 1 && c === 'f') { return 'daughter' }
    else if (num === 1 && c === 'm') { return 'son' }
    else if (num === 2 && c === 'f') { return 'grand daughter' }
    else if (num === 2 && c === 'm') { return 'grand Son' }
    else if (num === 3 && c === 'f') { return 'great grand daughter' }
    else if (num === 3 && c === 'm') { return 'great grand son' }

}

console.log(generation(2, "f"))
console.log(generation(-3, "m"))
console.log(generation(0, "f"))
console.log(generation(1, "f"))


//4==>  A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.
// Create a function that takes an integer n and returns the nth tetrahedral number.

// Examples
// tetra(2) ➞ 4
// tetra(5) ➞ 35
// tetra(6) ➞ 56

//solution
const tetra = (n) => n * (n + 1) * (n + 2) / 6;
console.log(tetra(6))
console.log(tetra(5))
console.log(tetra(2))


//5==> According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// Examples
// compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]

const compact = (arr) => arr.filter(a => {
    return a !== false && a !== '' && a !== undefined && a !== null && a !== NaN && a !== 0
})
console.log(compact([0, 1, false, 2, "", 3]))

//alternate solution
const compact1 = (arr) => arr.filter(a => !!a)
console.log(compact1([0, 1, false, 2, "", 3]))

const compact2 = (arr) => arr.filter(Boolean)
console.log(compact2([0, 1, false, 2, "", 3]))


//6==>Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.
// Please check the examples below for a clearer representation of the behavior expected.

// Examples
// // Calling makePlusFunction(5) returns a new function that takes an input,
// // and returns the result when adding 5 to it.
// const plusFive = makePlusFunction(5)
// plusFive(2) ➞ 7
// plusFive(-8) ➞ -3

const makePlusFunction = (base) => (newNum) => base + newNum
const plusFive = makePlusFunction(5)
console.log(plusFive(2))

const add = (n) => (newN) => n + newN
console.log(add(10)(20))


//7==> solve sum(2)(6)(1)

const sum = (a) => (b) => (c) => console.log(a + b + c)

sum(2)(6)(1)

// 8==> Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:
// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples
// makeRug(3, 5) ➞ [
//   "#####",
//   "#####",
//   "#####"
// ]

// makeRug(3, 5, '$')  ➞ [
//   "$$$$$",
//   "$$$$$",
//   "$$$$$"
// ]

//solution
const makeRug = (m, n, s) => {
    let str = ''
    let arr = []
    for (let i = 0; i < n; i++) {
        str = s ? str + s : str + '#'
    }

    for (let i = 0; i < m; i++) {
        arr.push(str)
    }

    console.log(arr)
}

makeRug(3, 5, '$')


//9==> Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []

const toArray = (obj) => {
    let objArr = []
    for (let [key, value] of Object.entries(obj)) {
        objArr.push([key, value])
    }
    console.log(objArr)
}

toArray({ a: '12', b: '13' })
toArray({ shrimp: 15, tots: 12 }) 
toArray({}) 


//10==> Create a function that concatenates n input arrays, where n is variable.
// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

const concatfun = (arr,...arr1) =>  arr.concat(...arr1)
console.log(concatfun([1, 2, 3], [4, 5], [6, 7]) )
console.log(concatfun([1], [2], [3], [4], [5], [6], [7]))