function changeText(input){
    let output = [];

    let words = input.split(" ");

    for (let i = 0; i < words.length; i++) {
        output.push(words[i].toUpperCase());
        output.push(words[i].toLowerCase());
    }

    return output.join(" ");
}
console.log(changeText("Abcd Efgh"));