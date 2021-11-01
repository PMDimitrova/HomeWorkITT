function printArray(inputArr){
    for (let i = 0; i < inputArr.length; i++) {
        process.stdout.write(inputArr[i] + '||');
    }
    console.log();
}

printArray(['a', 'b', 'c', 'd']);