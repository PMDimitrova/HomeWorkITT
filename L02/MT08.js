let xa = -3;
let ya = 2;

/*
first we check if the result of the multiplication of xa & ya is a positive number
if it's positive - than the number is in the first or the third quadrant
else it's in the second or fourth quadrant
 */

let result = xa * ya;

if (result > 0) {
    if (xa > 0){
        console.log("Point A is in the first quadrant.");
    }else {
        console.log("Point A is in the third quadrant.");
    }
}else {
    if (xa > 0){
        console.log("Point A is in the second quadrant.");
    }else {
        console.log("Point A is in the fourth quadrant.");
    }

}
