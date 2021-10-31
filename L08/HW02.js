function shuffleWords(word1, word2){
    //we might need to use .trim() to the input, if it's possible for the user to type "space"

    let maxLength = Math.max(word1.length, word2.length);

    let first = word2.slice(0, 5) + word1.slice(5, word1.length);
    let second = word1.slice(0, 5) + word2.slice(5, word2.length);

    console.log(`${maxLength}, ${first}, ${second}`);
}

shuffleWords("pineapple", "pomegranate");