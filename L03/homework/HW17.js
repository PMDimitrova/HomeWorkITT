let b = 5;
let c = " o ";

for (let i = 0; i < b; i++) {
    if (i === 0 || i === b-1){
        for (let k = 0; k < b; k++) {
            process.stdout.write(" * ");
        }
        console.log();
    }else{
        for (let m = 0; m < b; m++) {
            if (m === 0 || m === b-1){
                process.stdout.write(" * ");
            }else {
                process.stdout.write(c);
            }
        }
        console.log();
    }
}