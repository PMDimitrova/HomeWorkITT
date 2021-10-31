function equalWords(word1, word2) {
    let wordsAreWithTheSameLength = (word1.length === word2.length);

    console.log(wordsAreWithTheSameLength ?
        "Both words have the same length." :
        "The words are NOT with the same length.");

    if (wordsAreWithTheSameLength){
        for (let i = 0; i < word1.length; i++) {
            if (word1.charAt(i) !== word2.charAt(i)){
                console.log(`${i+1} ${word1.charAt(i)} : ${word2.charAt(i)}`);
            }
        }
    } else {
        let firstWordIsLonger = true;
        let shorterWordLength = word2.length;
        if (word1.length < word2.length){
            firstWordIsLonger = false;
            shorterWordLength = word1.length;
        }

        for (let i = 0; i < shorterWordLength; i++) {
            if (word1.charAt(i) !== word2.charAt(i)){
                console.log(`${i+1} ${word1.charAt(i)} : ${word2.charAt(i)}`);
            }
        }

        if (firstWordIsLonger){
            for (let i = shorterWordLength; i < word1.length; i++) {
                console.log(`${i + 1} ${word1.charAt(i)} : no symbol`);
            }
        }else {
            for (let i = shorterWordLength; i < word2.length; i++) {
                console.log(`${i + 1} no symbol : ${word2.charAt(i)}`);
            }
        }
    }
}

equalWords('hipopotam', 'hipopotuk');
console.log('---------------------');
equalWords('neshto', 'neshtodrugo');