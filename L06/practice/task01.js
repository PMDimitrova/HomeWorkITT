let table = [ [1,2,-3], [4,5,6], [7,8,9]];

let allNumsArePositive = true;

for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
        if (table[row][col] < 0){
            allNumsArePositive = false;
            break;
        }
    }
}

console.log(allNumsArePositive ? "All nums are positive" : "Not all nums are positive");