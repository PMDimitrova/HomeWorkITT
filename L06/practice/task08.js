let table = [
    [false, false, false, false],
    [false,  false, false, false],
    [true, false, false, false],
    [false, false, false, false]
];

//additionally we can check if the matrix is square, so that it would have central diagonal; but we assume it is
//and we assume that "second diagonal is the diagonal from upper right corner to down left

let containsTrueValue = false;

for (let row = 0; row < table.length - 1; row++) {
    for (let col = 0; col < (table[row].length - row - 1); col++) {
        if (table[row][col]){
            containsTrueValue = true;
            break;
        }
    }
}

console.log(containsTrueValue ? "Contains" : "Does not contain");