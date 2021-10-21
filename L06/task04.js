let array = [0, 1, 0, 0, 1, 1, 0];
//obache priemame, che imame samo 0 i 1, reshenieto nqma da e lesno za modifikaciq

let zerosCount = 0;
let onesCount = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        zerosCount++;
    } else {
        onesCount++;
    }
}

let newArray = new Array(array.length);

for (let i = 0; i < zerosCount; i++) {
    newArray[i] = 0;
}

for (let i = zerosCount; i < newArray.length; i++) {
    newArray[i] = 1;
}

console.log(newArray);