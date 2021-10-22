let arr = [10, 3, 5, 8, 6, -3, 7];

let minNum = Number.MAX_VALUE;

for (let i = 0; i < arr.length; i++) {
    if (minNum > arr[i]){
        minNum = arr[i];
    }
}

console.log("The smallest number from the array is " + minNum);
