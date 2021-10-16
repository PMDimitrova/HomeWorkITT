// from 3 the first n nums, that are dev by 3

let n = 5;

let currentNumber = 3;

for (let i = 0; i < n; i++) {
    if (i < n - 1){
        process.stdout.write(currentNumber + ", ");
    }else {
        process.stdout.write(currentNumber + "");
    }
    currentNumber += 3;
}