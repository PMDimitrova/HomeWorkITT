let firstArray = [18, 19, 32, 1, 3, 4, 5, 6, 7, 8];
// let secondArray = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11]; original
let secondArray = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11, 13, 15]; //longer array than the first one

let output = [];

//first we should determine which is longer, because we do not know if they will be the same size
//we should iterate the longer array
let endOfSearch = (firstArray.length > secondArray.length) ? firstArray.length : secondArray.length;

for (let i = 0; i < endOfSearch; i++) {
    if (firstArray[i] > secondArray[i]){
        output.push(firstArray[i]);
    }else {
        output.push(secondArray[i]);
    }
}
console.log(firstArray);
console.log(secondArray);
console.log(output);