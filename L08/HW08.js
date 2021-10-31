function isPalindrome(input){
    let isPalindrome = true;
    let lastIndex = input.length - 1;

    for (let i = 0; i < Math.floor(input.length/2); i++) {
        if (input.charAt(i) !== input.charAt(lastIndex)){
            isPalindrome = false;
            break;
        }
        lastIndex--;
    }

    return isPalindrome ? "The input is palindrome" : "The input IS NOT palindrome.";
}

console.log(isPalindrome("kapak"));
console.log(isPalindrome("tendjera"));