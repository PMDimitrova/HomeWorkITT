let first = 1;
let second = 12;
let third = 123;

if ((first >= second) && (first >= third)) {
    if (second >= third) {
        console.log(first + " " + second + " " + third);
    } else {
        console.log(first + " " + third + " " + second);
    }
} else {
    if ((second >= first) && (second >= third)) {
        if (first >= third) {
            console.log(second + " " + first + " " + third);
        } else {
            console.log(second + " " + third + " " + first);
        }
    } else {
        if (second >= first) {
            console.log(third + " " + second + " " + first);
        } else {
            console.log(third + " " + first + " " + second);
        }
    }
}

//source : stackoverflow; couldn't think of a solution myself