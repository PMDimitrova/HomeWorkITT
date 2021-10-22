let table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//additionally we can check if the matrix is square, so that it would have central diagonal; but we assume it is

let sum = 0;

for (let row = 1; row < table.length; row++) {
    for (let col = 0; col < row; col++) {
        sum += table[row][col];
    }
}

console.log(sum);