//inverting the bits

let a = 789;
let b = a;

let bPosition = 3;
let cPosition = 1;

let positionCounter = 1;
let decimalPos = 1;
let result = 0;

while (b > 0) {

    let currentResult = b % 2;
    if (positionCounter === bPosition || positionCounter === cPosition){
        if (currentResult === 0){
            currentResult = 1;
        }else {
            currentResult = 0;
        }
    }

    result += currentResult * decimalPos;

    b = Math.floor(b / 2);
    decimalPos *= 10;
    positionCounter++;
}

console.log(result);