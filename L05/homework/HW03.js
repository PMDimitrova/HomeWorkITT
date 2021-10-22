//fibonacci sequence

let n = 1;

let output = [];
output.push(n);     //starting with n
output.push(n);     //second num in the sequence is always the same as the first one, since we add 0 to the first one

for (let i = 2; i < 10; i++) {
    output.push(output[i-1] + output[i - 2]);
}

console.log(output);