for (let i = 1; i <= 9 ; i++) {
    for (let k = i; k <= 9; k++) {
        process.stdout.write(i + "*" + k + "; ")
    }
    console.log();
}