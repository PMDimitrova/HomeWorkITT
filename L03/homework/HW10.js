let number = 13;
let isPrime = true;

for (let i = 2; i < number; i++) {
    let dividedNum = (number / i);
    let flooredNum = Math.floor(number/i);
    if (dividedNum === flooredNum){
        isPrime = false;
        break;
    }
}


if(isPrime){
    console.log("The number is prime!");
}else {
    console.log("The number is not prime!");
}