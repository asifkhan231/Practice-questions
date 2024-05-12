// 1==> You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// ex:--> 
const drinks = [
    { name: 'lemonade', price: 90 },
    { name: 'lime', price: 432 },
    { name: 'peach', price: 23 }
];

// sortDrinkByPrice(drinks) ➞[{ name: "lime", price: 10 }, { name: "lemonade", price: 50 }]

//solution
const sortDrinkByPrice = (drinks) => drinks.sort(function (a, b) { return b.price - a.price })
const res = sortDrinkByPrice(drinks)
console.log(res)




// 2==> Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:
// {other person name} is {older than / younger than / the same age as} me.

// Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me."

//solution
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(p) {
        if (this.age < p.age) {
            console.log(`${this.name} is younger than ${p.name}`)
        } else if (this.age > p.age) {
            console.log(`${this.name} is older than ${p.name}`)
        } else {
            console.log(`${this.name} is the same age as ${p.name}`)
        }
    }
}


const p1 = new Person("Samuel", 24)
const p2 = new Person("Joel", 36)
const p3 = new Person("Lily", 24)

p1.compareAge(p3)


// 3==>  Create a function to return the amount of potatoes there are in a string.
// Examples
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1

const potatoes = (string) => {
    const arr = string.match(/potato/g)
    console.log(arr.length)
}

potatoes("potato")
potatoes("potatopotato")
potatoes("potatoapple")

// //4 ==> Create a function that returns whether the first array is slightly superior to that of the second.
// // Examples
// isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true
// isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false

//solution

const isFirstSuperior = (a, b) => JSON.stringify(a) == JSON.stringify(b) ? 'true' : 'false'

console.log(isFirstSuperior(["a", "b", "c"], ["a", "b", "c"]))
console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]))
console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]))



//5==>  Create a function that returns the data type of a given variable. These are the eight data types this challenge will be testing for:
// dataType([1, 2, 3, 4]) ➞ "array"
// dataType({key: "value"}) ➞ "object"
// dataType("This is an example string.") ➞ "string"
// dataType(new Date()) ➞ "date"

const dataType = (data) => typeof (data)
console.log(dataType(new Date()))
console.log(dataType("This is an example string."))


//6==> Create a function that returns true if the first array can be nested inside the second and false otherwise.
// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

///solution
const isnest = (arr1, arr2) => Math.min.apply(null, arr1) > Math.min.apply(null, arr2) && Math.max.apply(null, arr1) < Math.max.apply(null, arr2)

console.log(isnest([1, 2, 3, 4], [0, 6]))
console.log(isnest([9, 9, 8], [8, 9]))


//7==> Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
// Examples
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

//solution
const matchHouses = (step) => ((step * 6) - step) + 1
console.log(matchHouses(87))


//7=>Create a function that calculates the number of different squares in an n * n square grid.
// Explanation
// If n = 0 then the number of squares is 0
// If n = 1 then the number of squares is 1 + 0 = 1
// If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
// If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14

//solution
const squar = (n) => {
    if (n == 0) return 0
    return (n ** 2) + squar(n - 1)
}

console.log(squar(4))

//8==> Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// To illustrate:
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true
//ab should be greater than ba

function largestSwap(n) {
    let a = n % 10
    let b = Math.trunc(n / 10)
    let c = (a * 10) + b

    return c < n
}

console.log(largestSwap(27))
console.log(largestSwap(43))


//9==> Create a function which returns the number of true values there are in an array.
// Examples
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

//solution
function countTrue(arr) {
    let newArr = arr.filter(a => a === true)
    return newArr.length
}

console.log(countTrue([true, false, false, true, false]))

console.log(countTrue([false, false, false, false]))

console.log(countTrue([]))


//10==> Write a function redundant that takes in a string str and returns a function that returns str.
// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

const redundant = (str) => () => str
const f1 = redundant('apple')
const f3 = redundant("")
console.log(f1())
const f2 = redundant("pear")
console.log(f2())
// console.log(f3())


//11==> Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
// Examples
// possibleBonus(3, 7) ➞ true
// possibleBonus(1, 9) ➞ false
// possibleBonus(5, 3) ➞ false


const possibleBonus = (a, b) => {
    var status = false
    for (let i = 1; i <= 6; i++) {
        if (a + i === b) {
            status = true

        }
    }
    return status
}

console.log(possibleBonus(1, 8))

//12==> Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
// Examples
// perimeter("s", 7) ➞ 28
// perimeter("c", 4) ➞ 25.12
// perimeter("c", 9) ➞ 56.52

// The catch is you can only use arithmetic or comparison operators, which means:
// No if... else statements.
// No objects.
// No arrays.
// No formatting methods, etc.

//solution
const perimeter = (a, b) => {
  const res=   a === 's' ? 4 * b: 6.28 * b
  return res
}

console.log(perimeter("c", 9) )
console.log(perimeter("s", 7))

//13==> Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
// Examples
// num_of_digits(1000) ➞ 4
// num_of_digits(12) ➞ 2
// num_of_digits(1305981031) ➞ 10
// num_of_digits(0) ➞ 1

const num_of_digits = (num) => num.toString().length
console.log(num_of_digits(1305981031))
console.log(num_of_digits(12))
console.log(num_of_digits(0))