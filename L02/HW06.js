let a1 = 123;
let a2 = 456;
let a3 = 789;

let temporary = a1;

a1 = a2;
a2 = a3;
a3 = temporary;

console.log(a1 + " " + a2 + " " + a3);