//positive num into binary

let input = 1001;

let position = 1;
let result = 0;

while (input > 0) {

    let currentResult = input % 2;

    result += currentResult * position;

    input = Math.floor(input / 2);
    position *= 10;

}

console.log(result);