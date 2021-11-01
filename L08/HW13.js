function combineArrays(arr1, arr2){
    let output = [];
    for (let i = 0; i < arr1.length; i++) {
        output.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        output.push(arr2[i]);
    }

    return output;
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]));