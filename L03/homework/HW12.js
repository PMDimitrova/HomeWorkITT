for (let first = 1; first <=9; first++) { //starting from 1, not 0!
    for (let sec = 0; sec <= 9; sec++) {
        for (let third = 0; third <= 9; third++) {
            if ((first !== sec) && (sec !== third) && (first !== third) ){
                console.log("" + first + sec + third);
            }
        }
    }
}