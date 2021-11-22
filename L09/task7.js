function findNextNums(starting, counter, step){
    console.log(starting);
    counter--;
    if (counter == 0){
        return starting;
    }else{
        return findNextNums(starting + step, counter, step );
    }
}
findNextNums(3, 5, 3);
