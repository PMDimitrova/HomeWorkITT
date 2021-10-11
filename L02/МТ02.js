let number = 1234;

let a = number % 10;
number -= a;
number /= 10;

let b = number % 10;
number -= b;
number /= 10;

let c = number % 10;
number -= c;
number /= 10;

console.log(number);
console.log(c);
console.log(b);
console.log(a);
