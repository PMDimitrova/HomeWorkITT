function observationOfWords(input){
    let words = input.split(" ");
    let count = words.length;
    let longestWord = -1;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord){
            longestWord = words[i].length;
        }
    }

    return `${count} words, longest word has ${longestWord} syllables.`
}

console.log(observationOfWords("asd fg hjkl"));