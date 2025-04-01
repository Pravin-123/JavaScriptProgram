const { log } = require("console");

//to find square of each number
let num=[2,3,4,5,6];

num.forEach((nums)=>{
    console.log("square of each number: ", nums*nums); 
})


console.log("*************** OR *******************************");
let num1=[2,3,4,5,6];

let calcSquare = (val) =>{
    console.log("square of each number: ", val*val); 
}
num1.forEach(calcSquare);
