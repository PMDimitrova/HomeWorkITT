let arr = [1,254,345,34,6,34,3,5,6,5,53,656,35,47,567,567];

//1 => find the sum of all elements
//2 => find the max element in the array
//3 => find the difference between max and min element
//4 => which is more -> odd or even elements in the array?
//5 => tell me if the array has at least one negative value


//111111
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Task1 => " + sum);

//222222222

let maxElement = Number.MIN_VALUE;

for (let i = 0; i < arr.length; i++) {
    if (maxElement < arr[i]){
        maxElement = arr[i];
    }
}

console.log("Task2 => " + maxElement);

//333333

let maxEl = Number.MIN_VALUE;
let minEl = Number.MAX_VALUE;

for (let i = 0; i < arr.length; i++) {
    if (maxEl < arr[i]){
        maxEl = arr[i];
    }

    if (minEl > arr[i]){
        minEl = arr[i];
    }
}

let resultSubtr = maxEl - minEl;
console.log("Task3 => " + resultSubtr);

//44444444

let countOdds = 0;
let countEvens = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
        countEvens++;
    }else{
        countOdds++;
    }
}
let result = (countOdds > countEvens) ? "Odd numbers are more" : "Even numbers are more";
console.log("Task4 => " + result);
console.log(countOdds);
console.log(countEvens);

//5555555
let containsNegative = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0){
        containsNegative = true;
        break;
    }
}

console.log(containsNegative ? "The array has at least one negative" : "The array does not have negatives");