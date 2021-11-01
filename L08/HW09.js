function sumNums(input) {
    let myReg = /[-]*[\d]+/g;
    let result = input.match(myReg);

    let sum = 0;

    if (result.length > 0 ){
        for (let i = 0; i < result.length; i++) {
            sum += Number(result[i]);
        }
    }

    return sum;
}

console.log(sumNums('asd-12sdf45-56asdf100'));

