function recursiveLine(start, end){
    console.log(start);
    if (start < end){
        return recursiveLine(start + 1, end)
    }
}
recursiveLine(-20, 50);