// Given a number, n, return a function which adds n to the number passed to it.
// Examples
// add(10)(20) ➞ 30
// add(0)(20) ➞ 20

function addNum(n1) {
    return function (n2) {
        console.log(n1 + n2)
    }
}
const nextfun = addNum(10)
nextfun(20)

// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
// Examples
// add_ly = add_suffix("ly")
// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"
// add_less = add_suffix("less")
// add_less("fear") ➞ "fearless"

const add_suffix = (suff) => (str) => console.log(str + suff)

let add_ly = add_suffix('ly')
add_ly('hopeless')
add_ly('total')

add_ly = add_suffix('less')
add_ly('ruth')
add_ly('fear')


// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.
// Examples
// triangle(1) ➞ 1
// triangle(6) ➞ 21
// triangle(215) ➞ 23220

function dots(n) {
    if (n == 0) return 0
    return n + dots(n - 1)
}

console.log(dots(6))
console.log(dots(215))


const arrayOfMultiples = (num , len) => {
const arr = []
for(let i=1;i<=len;i++){
    arr.push(num*i)
}    
console.log(arr)
}


// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(7, 5)
arrayOfMultiples(12, 10)

// Write a function that returns an anonymous function, which adds n to its input
// Examples
// adds1 = addsNum(1)
// adds1(3) ➞ 4
// adds1(5.7) ➞ 6.7

// adds10 = addsNum(10)
// adds10(44) ➞ 54
// adds10(20) ➞ 30

const addsNum = (num)=>(inp) => console.log(num+inp)

adds10 = addsNum(10)
adds10(44) 
adds10(20)


// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]


const keysAndValues = (obj) => {
    const arr = []
    const keyArr = []
    const valueArr = []
    for(let [key,value] of Object.entries(obj)){
        keyArr.push(key)
        valueArr.push(value)
    }
    arr.push(keyArr)
    arr.push(valueArr)
    console.log(arr)
}


keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
keysAndValues({ key1: true, key2: false, key3: undefined })