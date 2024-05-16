
// 1==> Find the Index (Part 1)
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


// 2 ==> Number of Stickers
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

// 3 ==> Check if an Array Contains a Given Number
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


// 4 ==> Check String for Spaces
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

// 5 ==> Find the Bug: Returning the Container
//     The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag. The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
//     getContainer("Bread") ➞ "bag"
//     getContainer("Beer") ➞ "bottle"
//     getContainer("Candy") ➞ "plastic"
//     getContainer("Cheese") ➞ null

function getContainer(item) {
    if (item === 'Bread') {
        return 'bag'
    }
    else if (item === 'Beer') {
        return 'bottle';
    }
    else if (item === 'Candy') {
        return 'plastic'
    }
    else {
        return null
    }
}
console.log(getContainer("Bread"))// ➞ "bag"
console.log(getContainer("Beer"))// ➞ "bottle"
console.log(getContainer("Candy"))// ➞ "plastic"
console.log(getContainer("Cheese"))// ➞ null

// 6 ==> Return the Total Number of Parameters
//     Create a function that returns the total number of parameters passed in.
//     numberArgs("a", "b", "c") ➞ 3
//     numberArgs(10, 20, 30, 40, 50) ➞ 5
//     numberArgs(x, y) ➞ 2
//     numberArgs() ➞ 0

function numberArgs() {
    let arg = arguments.length
    return arg;
}

console.log(numberArgs(1, 4, 442, 113));
console.log(numberArgs("a", "b", "c"))
console.log(numberArgs(10, 20, 30, 40, 50))
// console.log(numberArgs(x, y))
console.log(numberArgs())


// 7==>  Extract City Facts
//     Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
//         name
//         population
//         continent
//         The string should have the following format: 
//     "X has a population of Y and is situated in Z" 
//     (where X is the city name, Y is the population and Z is the continent the city is situated in).
//         cityFacts({
//             name: "Paris",
//             population: "2,140,526",
//             continent: "Europe"
//         }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"
//         cityFacts({
//             name: "Tokyo",
//             population: "13,929,286",
//             continent: "Asia"
//         }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
//         cityFacts({
//             name: "Tokyo",
//             population: "13,929,286"
//         }) ➞ "Tokyo has a population of 13,929,286"

function cityFacts(obj) {
    if (!obj.name && !obj.population && !obj.continent) {
        return 'please enter infomation';
    }
    else if (!obj.population) {
        return `${obj.name} situated in ${obj.continent}.`
    } else if (!obj.continent) {
        return `${obj.name} has a population of ${obj.population}.`
    }
    else {

        return `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`
    }
}

console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286"
}))
console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
}))
console.log(cityFacts({
    name: "Paris",
    // population: "2,140,526",
    continent: "Europe"
}))


// 8 ==> Volume of a Box
//     Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
//         volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
//         volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
//         volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
//     Volume is length * width * height.

function volumeOfBox(box) {
    let volume = box.width * box.height * box.length;
    return volume;
}

console.log(volumeOfBox({ width: 2, length: 5, height: 1 })) //➞ 10
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }))// ➞ 16
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }))//➞ 30

// 9 ==> Stuttering Function
//     Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
//         stutter("incredible") ➞ "in... in... incredible?"
//         stutter("enthusiastic") ➞ "en... en... enthusiastic?"
//         stutter("outstanding") ➞ "ou... ou... outstanding?"

function stutter(word) {
    return `${word.slice(0, 2)}.. ${word.slice(0, 2)}.. ${word} `
}

console.log(stutter("incredible"))//➞ "in... in... incredible?"
console.log(stutter("enthusiastic"))//➞ "en... en... enthusiastic?"
console.log(stutter("outstanding"))//➞ "ou... ou... outstanding?"

// 10 ==> Is the Word Singular or Plural?
//     Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
//         isPlural("changes") ➞ true
//         isPlural("change") ➞ false
//         isPlural("dudes") ➞ true
//         isPlural("magic") ➞ false
//         This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.

function isPlural(word) {
    return word[word.length - 1] === 's'
}

console.log(isPlural("changes"))// ➞ true
console.log(isPlural("change"))// ➞ false
console.log(isPlural("dudes"))// ➞ true
console.log(isPlural("magic"))// ➞ false

