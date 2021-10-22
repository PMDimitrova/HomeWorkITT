let table = [
    [ "c", "b", "cc"],
    [ "a", "ccc", "a"],
    [ "c", "a", "c"]
];

//we should check if the matrix is square

let centralDiagonal = [];

for (let row = 0; row < table.length; row++) {
    if (table.length !== table[row].length){
        console.log("The matrix is not square and it has no central diagonal");
        break;
    }
    centralDiagonal.push(table[row][row]);
}

console.log(centralDiagonal);

