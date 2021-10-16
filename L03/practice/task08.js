let n = 5;

let starsCount = 1;
let spaces = n - 1;

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < spaces; j++) {  //spaces before
        process.stdout.write("  ");
    }

    //first and last row of full stars
        for (let k = 0; k < starsCount; k++) {
            process.stdout.write(" *"); // I have a space, because if there's no space WS does not visualise it correctly
        }
    console.log();
    starsCount += 2;
    spaces--;
}