//I assume that we search from n to 10 in descending order

let n = 145;

for (let i = n; i > 10; i--) {
    if (i % 7 === 0){
        console.log(i);
    }
}