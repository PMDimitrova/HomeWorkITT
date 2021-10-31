//todo finish it!


function littleCrossword(firstWord, secondWord) {
    let hasMatch = false;

    let longerWord = '';
    let shorterWord = '';
    let inOrderOfInput = true;

    if (firstWord.length > secondWord.length) {
        longerWord = firstWord;
        shorterWord = secondWord;
    } else {
        longerWord = secondWord;
        shorterWord = firstWord;
        inOrderOfInput = false;
    }

    let indexOfLongerWord = -1
    let indexOfShorterWord = -1

    for (let i = 0; i < longerWord.length; i++) {
        if (shorterWord.includes(longerWord.charAt(i))) {
            indexOfLongerWord = i;
            indexOfShorterWord = shorterWord.indexOf(longerWord.charAt(i));
            hasMatch = true;
            break;
        }
    }

    let indexOfFirst = inOrderOfInput ? indexOfLongerWord : indexOfShorterWord;
    let indexOfSecond = inOrderOfInput ? indexOfShorterWord : indexOfLongerWord;

    if (hasMatch){
        let output = new Array(secondWord.length - 1);
        for (let row = 0; row < secondWord.length; row++) {
            output[row] = (new Array(firstWord.length - 1));
            for (let col = 0; col < output[row].length; col++) {
                output[row][col] = "x";
            }
            return output;
        }
    }else {
        return "The words does NOT have a matching syllable.";
    }
}

// console.log(littleCrossword("машина", "шапка"));
console.log(littleCrossword("cal", "pas"));