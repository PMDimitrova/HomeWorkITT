let a = 13;
let b = 1;

if (a > b){
    let temp = a;
    a = b;
    b = temp;
}

for (let i = a; i <= b; i++) {
    if( i % 3 === 0 ) {
        console.log(i);
    }
}