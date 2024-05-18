
// 1 ==> Flip the Boolean
//     Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
//     Create a function that returns the opposite of the given boolean, as a number.

// console.log(flipBaloon(true))
// console.log(flipBaloon(false))
// console.log(flipBaloon(1))
// console.log(flipBaloon(0))

function flipBoolean(n) {
    if (n) {
        return !n;
    } else {
        return !n;
    }
}


console.log(flipBoolean(true))
console.log(flipBoolean(false))
console.log(flipBoolean(1))
console.log(flipBoolean(0))

// 2 ==> Kinetic Energy
//     Kinetic energy can be calculated with the following formula:
//     Kinetic energy = (0.5) * m * v^2

// console.log(kineticEnergy(60,3))
// console.log(kineticEnergy(45,10))
// console.log(kineticEnergy(63.5,7.35))

function kineticEnergy(m, v) {
    return 0.5 * m * (v ** 2);
}

console.log(kineticEnergy(60, 3))
console.log(kineticEnergy(45, 10))
console.log(kineticEnergy(63.5, 7.35))

// 3 ==> Name Greeting!
//     Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".

// console.log(fun("Gerald"))
// console.log(fun("Tiffany"))
// console.log(fun("Ed"))

let fun = name => `WelCome ${name}`;

console.log(fun("Gerald"))
console.log(fun("Tiffany"))
console.log(fun("Ed"))


// 4 ==> To the Power of _____
//     Create a function that takes a base number and an exponent number and returns the calculation.
// console.log(calculteExponent(5, 5))
// console.log(calculteExponent(10, 10))
// console.log(calculteExponent(3, 3))


// function calculteExponent(b,e){
//     return b**e;
// }

let calculteExponent = (b, e) => b ** e;

console.log(calculteExponent(5, 5))
console.log(calculteExponent(10, 10))
console.log(calculteExponent(3, 3))


// 5 ==> Word without First Character
//     Create a function that takes a word and returns the new word without including the first character.
// console.log(newWord("apple"))
// console.log(newWord("cherry"))
// console.log(newWord("plum"))

function newWord(word) {
    let nWord = word.substr(1);
    return nWord;
}

console.log(newWord("apple"))
// console.log(newWord("cherry"))
// console.log(newWord("plum"))



// 6 ==> Concatenating Two Integer Arrays
//     Create a function to concatenate two integer arrays.
// console.log(concat([1, 3, 5], [2, 6, 8]))
// console.log(concat([7, 8], [10, 9, 1, 1, 2]))
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]))

function concat(Array1, array2) {
    let newArray = Array1.concat(array2);
    return newArray;
}

console.log(concat([1, 3, 5], [2, 6, 8]))
console.log(concat([7, 8], [10, 9, 1, 1, 2]))
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]))


// 7 ==> Find the Index (Part 1)
//     Create a function that finds the index of a given item. If the item is not present, return -1.
// console.log(search([1, 5, 3], 5))
// console.log(search([9, 8, 3], 3))
// console.log(search([1, 2, 3], 4))
// console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"))


function search(arr, item) {
    return arr.indexOf(item)

}

console.log(search([1, 5, 3], 5))
console.log(search([9, 8, 3], 3))
console.log(search([1, 2, 3], 4))
console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"))


// 8 ==> Number of Stickers
//     Given an n * n * n Rubik's cube, return the number of individual stickers that are needed to cover the whole cube. Keep in mind there are 6 faces to keep track of.
// console.log(howManyStickers(1))
// console.log(howManyStickers(2))
// console.log(howManyStickers(3))

function howManyStickers(n) {
    return 6 * (n * n * n)
}
console.log(howManyStickers(1))
console.log(howManyStickers(2))
console.log(howManyStickers(3))

// 9 ==> Check if an Array Contains a Given Number
//     Write a function to check if an array contains a particular number.
// console.log(check([1, 2, 3, 4, 5], 3))
// console.log(check([1, 1, 2, 1, 1], 3))
// console.log(check([5, 5, 5, 6], 5))
// console.log(check([], 5))

function check(array, item) {
    let isAvailable = array.includes(item)
    return isAvailable;
}
console.log(check([1, 2, 3, 4, 5], 3))
console.log(check([1, 1, 2, 1, 1], 3))
console.log(check([5, 5, 5, 6], 5))
console.log(check([], 5))


// 10 ==> Check String for Spaces
//     Create a function that returns true if a string contains any spaces.
// console.log(hasSpaces("hello"))
// console.log(hasSpaces("hello, world"))
// console.log(hasSpaces(" "))
// console.log(hasSpaces(""))
// console.log(hasSpaces(",./!@#"))

function hasSpaces(item) {
    let isAvailable = item.includes(' ');
    return isAvailable
}
console.log(hasSpaces("hello"))
console.log(hasSpaces("hello, world"))
console.log(hasSpaces(" "))
console.log(hasSpaces(""))
console.log(hasSpaces(",./!@#"))
