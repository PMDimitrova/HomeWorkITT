let input = [2, 3, -11, 7];

let output = new Array(input.length);
output[0] = input[1]; //the first element is always == second element from the input ( +0)

for (let i = 1; i < output.length - 1; i++) {
    output[i] = input[i - 1] + input[i + 1];
}

output[output.length - 1] = input[input.length - 2]; //last element from output is always == to the second from last from the input ( +0)

console.log(output);