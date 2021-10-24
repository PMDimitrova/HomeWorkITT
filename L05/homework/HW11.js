let arr = [-23, -55, 17, 75, 56, 105, 134];
let output = [];

for (let i = 0; i < arr.length; i++) {
    if ((arr[i] > 5) && (arr[i] % 5 === 0)) {
        output.push(arr[i]);
    }
}

console.log(output);