let n = 4;

let currentNum = n - 1;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        process.stdout.write(currentNum + "");
    }
    console.log();
    currentNum += 2;
}