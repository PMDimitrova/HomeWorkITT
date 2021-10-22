let table = [[1,2,3], [4,5,6], [7,8,9]];

let maxRowNum = -1;
let maxSum = 0;

for (let row = 0; row < table.length; row++) {
    let sum = 0;
    for (let col = 0; col < table[row].length; col++) {
        sum += table[row][col];
    }
    if (sum > maxSum){
        maxRowNum = row;
        maxSum = sum;
    }
}
console.log("The numbers on row " + maxRowNum + " have the maximum sum.");