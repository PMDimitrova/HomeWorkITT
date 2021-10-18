let n = 1;

let currentStartingNum = n;
let counter = 1;

while (counter <= 10){
    for (let i = currentStartingNum;  ; i++) {
        if ((i % 2 === 0) || (i % 3 === 0) || (i % 5 ===0)){
            console.log(counter + ":" + i);
            currentStartingNum = i+1;
            counter++;
            break;
        }
    }
}

