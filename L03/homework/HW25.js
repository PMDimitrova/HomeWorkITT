let n = 5;

let result = 1;
let counter = 1;

do {
    result *= counter;
    counter++;
}while (counter <= n);

console.log(result);