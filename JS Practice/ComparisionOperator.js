//comparision operator, ==

let a=5;
let b=2;
let c=5;
console.log("5 == 2", a==b)//false
console.log("5 == 5", a==c)//true

console.log("5 != 2", a!=b)//true
console.log("5 != 5", a!=c)//false


let d="5";
console.log("a == d", a==d)//true because js convert string to number 

//===  -> strict and double equal to

let e=5;
let f="5";
console.log("e === f", e===f) //false, because if we don't want convert string to number then we can use ===
console.log("e !== f", e!==f) // true