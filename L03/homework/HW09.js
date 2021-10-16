let a = 1;
let b = 107;

let sum = 0;


for (let i = a; i <= b; i++) {
    if (i % 3 === 0) {
        process.stdout.write("skip " + i + ", ");
    } else {
        let currentNum = i * i;
        sum += currentNum;
        if (sum < 200) { //check if you'll break the for-loop and add a comma (or not)
            process.stdout.write(currentNum + ", ");
        } else {
            process.stdout.write(currentNum + " ");
            break;
        }
    }
}