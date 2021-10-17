let n = 25;
let m = 249;

if (m < n){
    let temp = n;
    n = m;
    m = temp;
}

let startingPoint = -1;

for (let i = m; i >= n; i--) { //will only iterate to find the starting point for the second cycle
    if (i % 50 === 0){
        startingPoint = i;
        break;
    }
}

for (let j = startingPoint; j >= n; j -= 50) {
    if (j === startingPoint){
        process.stdout.write(j + "");
    }else {
        process.stdout.write(", " + j);
    }
}