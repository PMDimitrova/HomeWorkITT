for (let i = 1; i <= 9; i++) {
    for (let j = i; j <= 9; j++) {
        process.stdout.write(j + " ");
    }
    for (let k = 0; k < i; k++) {
        process.stdout.write(k + " ");
    }
    console.log();
}