function summarize(end) {
    let sum = 0;
    for (let i = 0; i < end; i++) {
        sum += i;
    }
    return sum;
}

function recursiveSum(num) {
    if (num > 0){
        return num + recursiveSum(num - 1);
    }else{
        return num;
    }
}

console.log(recursiveSum(7));
