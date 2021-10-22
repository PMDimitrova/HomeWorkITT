         //0  1    2  3  4  5  6  7   8   9, length = 10, even count of numbers
let arr = [6, 27, -1, 5, 7, 7, 5, -1, 27, 6];
// let arr = [6, 27, -1, 5, 7, 8, 5, -1, 27, 6]; - not palindrome

//       //0  1   2  3  4, length = 5, odd count of numbers
//let arr = [1, 3, 55, 3, 1];

let isPalindrome = true;

let lastIndex = arr.length - 1;

for (let i = 0; i < Math.floor(arr.length/2); i++) {
    if (arr[i] !== arr[lastIndex]){
        isPalindrome = false;
        break;
    }
    lastIndex--;
}

console.log(isPalindrome? "The array is palindrome" : "The array IS NOT palindrome");