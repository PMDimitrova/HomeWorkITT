let number = 1343;

let containsZero = false;

let residue = number % 10;

if (residue === 0){
    containsZero = true;
}else{
    number -= residue;
    number /= 10;
    residue = number % 10;

    if (residue === 0){
        containsZero = true;
    }else {
        number -= residue;
        number /= 10;
        residue = number % 10;

        if (residue === 0){
            containsZero = true;
        }
    }
}

if(containsZero){
    console.log("The number contains zero.");
}else {
    console.log("The number does not contain zero.")
}