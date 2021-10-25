// let arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
let arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 3, 3, 3, 3, 1];

let maxCount = 1;
let maxNum = arr[0];
let maxIndexEnd = 0;

let currentCount = 1;
let currentNum = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
        currentCount++;
    } else {
        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxNum = currentNum;
            maxIndexEnd = i;
        }
        currentCount = 1;
        currentNum = arr[i + 1];
    }
}
let startingIndexOfMaxSeq = maxIndexEnd - maxCount + 1;
console.log(arr.slice(startingIndexOfMaxSeq, maxIndexEnd+1));