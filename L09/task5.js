function recursiveLineNums(first, second){
    console.log(first);
    if (first < second){
        return recursiveLineNums(first + 1, second);
    }
}

recursiveLineNums(12, 15);