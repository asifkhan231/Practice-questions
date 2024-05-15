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
