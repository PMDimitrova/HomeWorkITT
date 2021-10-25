let array = [1, 3, 2, 4, 3, 7];
// let array = [3, 7, 9];

let isZigZag = true;

for (let i = 1; i < array.length - 1 ; i++) {
    let currentNum = array[i];
    let previousNum = array[i - 1];
    let nextNum = array[i + 1];

    if (!(((currentNum < previousNum) && (currentNum < nextNum)) || ((currentNum> previousNum) && (currentNum > nextNum)))){
        isZigZag = false;
        break;
    }

}
console.log(isZigZag ? "The array is ZigZag sequence" : "The array is NOT ZigZag sequence");