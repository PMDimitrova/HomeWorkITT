function oddNumsRecursive(start, end){
    if (start % 2 === 0){
        console.log(start);
    }
    if (start < end){
        oddNumsRecursive(start + 1, end);
    }
}

oddNumsRecursive(-10, 10);