function createArrayTillN(n){
    let output = [];
    for (let i = 1; i <=n ; i++) {
        output.push(i);
    }

    return output;
}

console.log(createArrayTillN(5));