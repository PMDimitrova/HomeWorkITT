let n = 4;
let m = 5;

let counter = 1;

let resultTable = new Array(n);

for (let row = 0; row < n; row++) {
    resultTable[row] = new Array(m);
    for (let col = 0; col < m; col++) {
        resultTable[row][col] = counter++;
    }
}
console.log(resultTable);