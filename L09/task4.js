function recursiveLineReversed(start, end){
    console.log(start);
    if (start > end){
        return recursiveLineReversed(start - 1, end);
    }
}

recursiveLineReversed(10, 1);