let a = 2;
let b = 2;

let result = -1;

for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
        result = i * j;
        console.log(i + " * " + j + " = " + result);
    }
}