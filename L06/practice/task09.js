let table = [
    [1, 2, 3, 10],
    [4, 5, 6, 12],
    [7, 8, 9, 14]
];

//searching for the biggest sum of 2x2 matrix

let maxSum = Number.MIN_VALUE;

for (let row = 0; row < table.length - 1; row++) {
    for (let col = 0; col < table[row].length - 1; col++) {
        let sum = table[row][col] + table[row + 1][col] + table[row][col + 1] + table[row + 1][col + 1];
        if (maxSum < sum){
            maxSum = sum;
        }
    }
}
console.log("Max sum is " + maxSum);