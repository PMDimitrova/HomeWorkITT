// for (let i = 0; i < 101; i++) {
//     console.log(i);
// }

function recursiveLine(number) {
    console.log(number);
    if (number < 100) {
        return recursiveLine(number + 1);
    }
}

recursiveLine(1);