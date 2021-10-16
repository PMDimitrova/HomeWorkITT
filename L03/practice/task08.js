let n = 5;

let starsCount = 1;
let spaces = n - 1;
let blankSpaces = 1;

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < spaces; j++) {  //spaces beforehand
        process.stdout.write("..");
    }

    if (i === 1 || i === n){    //first and last row of full stars
        for (let k = 0; k < starsCount; k++) {
            process.stdout.write(" *");
        }
    }else{      //rows of frame stars
        process.stdout.write(" *");
        for (let j = 0; j < blankSpaces; j++) {
            process.stdout.write("..");
        }
        process.stdout.write(" *");
        blankSpaces += 2;
    }

    console.log();
    starsCount += 2;
    spaces--;
}