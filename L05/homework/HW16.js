let input = [];
let array = [-1.12, -2.43, 3.1, 4.2, 0, 6.4, - 7.5, 8.6, 9.1, -4];

let correction = 41.25;

for (let i = 0; i < array.length; i++) {
    input.push(array[i]);
    if (array[i] < -0.231){
        array[i] = i * i + correction;
    } else {
        array[i] = array[i] * (i + 1);
    }
}
console.log(input);
console.log(array);

let sumEl = 0;
let notZeros = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0){
        sumEl += array[i];
        notZeros++;
    }
}

let average = sumEl / notZeros;

console.log(average.toFixed(2));