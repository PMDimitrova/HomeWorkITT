let input = [1, 2, 3, 4, 5, 6, 7];

//manipulation for 0 & 1 index
let temp = input[0];
input.shift();
input.splice(1, 0 , temp);

//manipulation for 2 & 3 index

//manipulation for 4 & 5 index

console.log(input);