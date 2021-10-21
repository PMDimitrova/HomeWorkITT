let num = 17571;

let copy = num;

let firstDivider = -1;
let digits = 0;

do { //finding how many digits does the input have, so that we can set the first divider correctly
    copy = Math.floor(copy / 10);
    digits++;
} while (copy > 0);

switch (digits) {
    case 2:
        firstDivider = 10;
        break;
    case 3:
        firstDivider = 100;
        break;
    case 4:
        firstDivider = 1000;
        break;
    case 5:
        firstDivider = 10000;
        break;
}

copy = num;

let numIsPalindrome = true;

do {
    let firstDigit = Math.floor(copy / firstDivider);
    let lastDigit = copy % 10;

    if (firstDigit !== lastDigit){
        numIsPalindrome = false;
        break;
    }
    copy = copy - firstDivider * firstDigit;
    copy = Math.floor(copy / 10);
    firstDivider /= 100;

}while (copy > 10)

console.log(numIsPalindrome);
