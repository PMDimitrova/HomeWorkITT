let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr = [5, 2, 3, 4, 9, 1, 8];

let sum = 0;
let count = arr.length;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let average = Math.round(sum / count);

let minDiff = Number.MAX_VALUE;
let minDiffIndex = -1;

for (let i = 0; i < arr.length; i++) {
    let currentDiff = Math.abs(average - arr[i]);
    if (currentDiff < minDiff){
        minDiff = currentDiff;
        minDiffIndex = i;
    }
}

console.log("The number closest to the average of the array is: " + arr[minDiffIndex]);