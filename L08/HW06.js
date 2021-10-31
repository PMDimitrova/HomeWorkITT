function pascalCase(input){
    let words = input.split(" ");
    let output = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalChar = word.charAt(0).toUpperCase();

        word = word.replace(word.charAt(0), capitalChar);
        output.push(word);
    }


    return output.join(" ");
}

console.log(pascalCase("some text inserted here"));