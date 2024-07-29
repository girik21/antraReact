// 1. Explain what is prototype and what is prototype chain in your own words

// Ans:
// Prototype: Prototypes are the mechanism by which JavaScript objects inherit features from one another. Every object in JavaScript has a built-in property called its prototype, used to share common properties and methods among instances.

// Prototype Chain: The prototype chain is a series of links between objects used to inherit properties and methods. When you access a property or method, JavaScript searches the object, then its prototype, and continues up the chain until it finds it or reaches the end.


// 2. Implement your versions of the following Array methods (choose 6).

// map, filter, reduce, every, find, includes, join, pop, push, reverse, slice, sort

// Ans: I am using map, filter, reduce, find, slice, sort

//Example for map
const american_foods = ['Hamburger', 'Fries', 'Sandwich', 'Coffee']

let addAmerican = (sample) => {
    return 'Original American ' + sample
}

const resultOne = american_foods.map(addAmerican)
console.log(resultOne)

// Example for filter Filter names of people below 25
const antraDB = [
    {
        FirstName: "Chris",
        Age: 25,
        Occupation: "Developer"
    },
    {
        FirstName: "Taylor",
        Age: 22,
        Occupation: "Designer"
    },
    {
        FirstName: "Jordan",
        Age: 35,
        Occupation: "Manager"
    },
]


let resultTwo = antraDB.filter(item => item.Age <= 25)
console.log(resultTwo)


// Example for filter Find name of person whose name is Jordan

const user = antraDB.find(item => item.FirstName === 'Jordan')

if (user) {
    console.log("User found:", user);
} else {
    console.log("User not found or undefined");
}


// Example for sorting (Sorting numbers descending to ascending)

const numbers = [100, 220, 22, 11, 22, 33]
console.log(numbers.sort((low, high) => low - high))


// Using reduce to sum the array
const numbers2 = [2,2,2,2,2];

const sum = numbers2.reduce((total, current) => total + current, 0);

console.log(`Total Sum is`, sum);



// Using slice to extract portions of the dictionary
const dictionary = "apple,banana,cat,dog,elephant";

const slicedWords = dictionary.slice(6, 16);

console.log(slicedWords); //banana,cat