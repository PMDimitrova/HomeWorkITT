function littleCrossword(firstWord, secondWord) {
    let hasMatch = false;
    let firstWordIndex = -1;
    let secondWordIndex = -1;

    for (let i = 0; i < firstWord.length; i++) {
        let indexInSecond = secondWord.indexOf(firstWord.charAt(i));
        if (indexInSecond !== -1) {
            hasMatch = true;
            firstWordIndex = i;
            secondWordIndex = indexInSecond;
            break;
        }
    }

    if (hasMatch) {
        let rows = secondWord.length;
        let cols = firstWord.length;

        let outputArray = new Array(rows);

        for (let i = 0; i < rows; i++) {
            outputArray[i] = new Array(cols);
            for (let j = 0; j < cols; j++) {
                if (j === firstWordIndex){
                    outputArray[i][j] = secondWord.charAt(i);
                } else if(i === secondWordIndex){
                    outputArray[i][j] = firstWord.charAt(j);
                } else {
                    outputArray[i][j] = '.';
                }
            }
        }

        return outputArray;
    } else {
        return 'There is NO char matching between the two words.';
    }
}
//според мен условието е грешно зададено, защото първия мач на "машина" и "шапка" би трябвало да е буквата А
console.table(littleCrossword("машина", "винт"));
// console.table(littleCrossword("cal", "pas"));