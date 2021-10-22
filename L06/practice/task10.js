let arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];

/*
we'll do to arrays, which correspond one to another
first array will keep the unique nums
second will keep the count of the occurrences of the number from the first array
the indexes of both arrays will be corresponding => index=0 == [unique number from first array; count of it's occurrences from the second array]
 */


let arrayOfUniqueNums = [];
arrayOfUniqueNums.push(arr[0]);

let countOfNums = [];
countOfNums[0] = 1;

for (let i = 1; i < arr.length; i++) {
    if (arrayOfUniqueNums.indexOf(arr[i]) === -1) {
        arrayOfUniqueNums.push(arr[i]);
        countOfNums.push(1);
    } else {
        let index = arrayOfUniqueNums.indexOf(arr[i]);
        countOfNums[index]++;
    }
}

let maxCount = -1;
let indexOfNumWithMostCounts = -1;

for (let i = 0; i < countOfNums.length; i++) {
    if (countOfNums[i] > maxCount){
        maxCount = countOfNums[i];
        indexOfNumWithMostCounts = countOfNums.indexOf(maxCount);
    }
}
let numWithMostCounts = arrayOfUniqueNums[indexOfNumWithMostCounts];

console.log(numWithMostCounts + "(" + maxCount + " times)");
