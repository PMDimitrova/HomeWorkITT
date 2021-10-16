//2 nums, from smaller to larger

let a = 12;
let b = 15;

if (a > b){
    let temp = a;
    a = b;
    b = temp;
}

for (let i = a; i <= b ; i++) {
    console.log(i);
}