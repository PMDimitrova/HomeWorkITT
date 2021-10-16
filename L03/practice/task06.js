//counter for the 1 bits

let input = 12;

let result = 0;

while (input > 0) {

    let currentResult = input % 2;

    if (currentResult === 1) {
        result++;
    }

    input = Math.floor(input / 2);

}


console.log(result);