function findNFactorial(n){
    let result = 1;
    let counter = 1;

    while (counter <= n){
        result *= counter;
        counter++;
    }

    return result;
}

function recursiveFactorial(n){
    let result = 1;
    if (n != 1){
        result = n * recursiveFactorial(n -1);
    }
    return result;
}

console.log(findNFactorial(6));
console.log(recursiveFactorial(6));