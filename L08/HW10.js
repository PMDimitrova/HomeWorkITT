function asciiChanger(input) {
    let result = '';

    for (let i = 0; i < input.length; i++) {
        let currentNum = input.charCodeAt(i);
        result += String.fromCharCode(currentNum + 5);
    }
    return result;
}

console.log(asciiChanger('Hello'));