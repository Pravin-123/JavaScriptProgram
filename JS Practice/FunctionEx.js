//method: block of cod that performs a spacific task, can be invoked whenever needed

function sum(x,y,z){
    console.log("x:", x);
    console.log("y:", y);
    console.log("z:", z);
    let add=x+y;
    return add;
    console.log("after return");// it won't shows error but it will not execute this line after the return statement
    
}
let addition =sum(5,6,7);
console.log(addition);

