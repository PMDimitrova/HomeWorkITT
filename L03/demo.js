
//1
for (let i = 1; i < 101 ; i++) {
    console.log(i);
}

//2
for (let i = 1; i > -101 ; i--) {
    console.log(i);
}

//3
for (let i = 10; i <=50 ; i+=2) {
    console.log(i);
}

//4
for (let i = 5; i <= 55; i++) {
    if((i % 3 === 0) && (i % 4 ===0)){
        console.log(i);
    }
}

//5
let n = 5;
let m = 8;

for (let i = n; i <= m; i++) {
    console.log(i);
    console.log("---------");
}

let nn = 3;
let mm = 1;

if (nn>mm){
    let temp = nn;
    nn = mm;
    mm = temp;
}

for (let i = mm; i < nn; i++) {
    console.log(i);
    console.log("---------");
}
