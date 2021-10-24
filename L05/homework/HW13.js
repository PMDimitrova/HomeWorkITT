let input = 99;

let output = [];

while(input > 0 ){
    let current = input % 2;
    input = Math.floor(input/2);
    output.unshift(current);
}

console.log(output);