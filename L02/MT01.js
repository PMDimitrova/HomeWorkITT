//we accept that the provided values will be for an realistic triangle

//sides of the triangle
let a = 8;
let b = 10;
let c = 12;

let perimeter =  a + b + c;

let semiPerimeter = perimeter/2;

//we should use the Heron's formula:
let area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter-b) * (semiPerimeter-c));

console.log("The perimeter is " + perimeter);
console.log("The area is " + area);