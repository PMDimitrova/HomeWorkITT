let input = [7.13, 0.2, 4.9, -5.1, 6.34, 1.12];

let biggestNum = Number.MIN_VALUE;
let second = Number.MIN_VALUE;
let third = Number.MIN_VALUE;

let index = -1;

for (let j = 0; j < input.length; j++) {
    input[j] = Math.abs(input[j]);
    if (input[j] > biggestNum) {
        biggestNum = input[j];
        index = j;
    }
}

input.splice(index, 1);

for (let i = 0; i < input.length; i++) {
    if (input[i] > second){
        second = input[i];
        index = i;
    }
}

input.splice(index, 1);

for (let i = 0; i < input.length; i++) {
    if (input[i] > third){
        third = input[i];
        index = i;
    }
}
input.splice(index, 1);

console.log(biggestNum, second, third);