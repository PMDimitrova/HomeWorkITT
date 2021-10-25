let table = [1, 3, 2, 7];

let isNazyben = true;

for (let i = 1; i < table.length - 1 ; i++) {
    let currentNum = table[i];
    let previousNum = table[i - 1];
    let nextNum = table[i + 1];

    if (!(((currentNum < previousNum) && (currentNum < nextNum)) || ((currentNum> previousNum) && (currentNum > nextNum)))){
        isNazyben = false;
        break;
    }

}
console.log(isNazyben ? "nazyben e" : "ne e nazyben");