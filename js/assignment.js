"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

function findSmallest(arr) {
    return Math.min(...arr);
}


function findLargest(arr) {
    return Math.max(...arr);
}

function findAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return (sum / arr.length).toFixed(2);
}

submissionBtn.addEventListener('click', function() {
    smallestNumberElement.textContent = findSmallest(myNumbers);
    largestNumberElement.textContent = findLargest(myNumbers);
    averageNumberElement.textContent = findAverage(myNumbers);
});