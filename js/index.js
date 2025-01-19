// Prevent us from attempting to use variables
// that are not declared
"use strict"
/*
// Basic Loop
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// For...of
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
    console.log(fruit);
}

// ForEach
const colors = ['red', 'green', 'blue'];
colors.forEach(color => {
    console.log(color);
});

// Modifying for...of

const scores = [75, 80, 85];
for (let score of scores) {
    score = 100; // This won't modify the original array
}
console.log(scores); // Still outputs: [75, 80, 85]

// Modifying forEach
const prices = [10, 20, 30];
prices.forEach((price, index, array) => {
    array[index] = 50; // This works because we're directly modifying the array
});
console.log(prices); // Outputs: [50, 50, 50]

//for...in loop is designed for objects, not arrays. While it can be used with arrays, it's generally not recommended

const arr = ['a', 'b', 'c'];
arr.customProperty = 'something';

for (let index in arr) {
    console.log(index); // Outputs: "0", "1", "2", "customProperty"
} */