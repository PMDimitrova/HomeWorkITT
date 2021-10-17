let n = 11;

while (n > 1) {
    if (n % 2 === 0) {
        n = n / 2;
        process.stdout.write(n + " ");
    } else {
        n = (3 * n) + 1;
        process.stdout.write(n + " ");
    }
}