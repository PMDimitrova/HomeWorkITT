let input = [2, 3, 7, -5];

let secondIndex = input.length - 1;

for (let firstIndex = 0; firstIndex < Math.floor(input.length/2); firstIndex++) {
    let temp = input[firstIndex];
    input[firstIndex] = input[secondIndex];
    input[secondIndex] = temp;
    secondIndex--;
}

console.log(input);