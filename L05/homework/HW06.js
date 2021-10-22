let firstArr = [13, 2, 7];
let secondArr = [13, 2, 6];

let evenLength = (firstArr.length === secondArr.length);
let arrAreTheSame = evenLength ? true : false;

if (evenLength){

    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]){
            arrAreTheSame = false;
            break;
        }
    }
}

console.log(arrAreTheSame ? "Arrays are the same" : "Arrays are NOT the same");
console.log(evenLength ? "Arrays have the same length" : "Arrays does NOT have the same length");