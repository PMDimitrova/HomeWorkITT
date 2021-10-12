let input = 52;


let passedPowers = -1;

//checking if it's the last suit of the power and correcting the result of the Math.floor
if (input % 4 === 0) {
    passedPowers = Math.floor(input / 4) - 1;
} else {
    passedPowers = Math.floor(input / 4);
}

let suit = input - (passedPowers * 4);

let power = "";
let suitName = "";
//could be optimised with calculation about the (passedPowers - 2)
if (passedPowers < 9) {
    power = passedPowers + 2;
} else if (passedPowers === 9) {
    power = "Jack";
} else if (passedPowers === 10) {
    power = "Queen";
} else if (passedPowers === 11) {
    power = "King";
} else if (passedPowers === 12) {
    power = "Ace";
}

if (suit === 1) {
    suitName = "Spade";
} else if (suit === 2) {
    suitName = "Diamond";
} else if (suit === 3) {
    suitName = "Heart";
} else if (suit === 4) {
    suitName = "Club";
}

console.log(power + " " + suitName);
