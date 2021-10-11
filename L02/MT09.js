let a = 12;
let b = 12;
let c = 12;

let itsPossible = false;

if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)){
    itsPossible = true;
}

if (itsPossible){
    console.log("The provided measurements could be of a triangle.");
}else {
    console.log("The provided measurements could NOT be of a triangle.");
}