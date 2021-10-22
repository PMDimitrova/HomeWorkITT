let input = [5, 2, 5, 8, 3];

let output = [];

for (let i = 0; i < input.length; i++) {
    output[i] = input[i];
}

for (let i = input.length - 1; i >= 0 ; i--) {
    output.push(input[i]);
}

console.log(output);