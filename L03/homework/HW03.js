// odds [-10; 10]

let a = -10;
let b = 10;

if (a % 2 === 0){ //to be sure, that the first number will be odd, if on a later stage we want to change a & b
    a +=1;
}

for (let i = a; i < b; i += 2) {
    console.log(i);
}