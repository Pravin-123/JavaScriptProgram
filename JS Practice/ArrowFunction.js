//Arrow function

const arrowSum =(a,b)=>{
    console.log(a+b);  
}

arrowSum(5,6);

const arrowMul=(a,b)=>{
    console.log(a*b);
}
arrowMul(5,6);


let arrowDiv=(a,b)=>{
     return a/b;
}
let value =arrowDiv(50,5);
console.log(value);

//single line of code
const printHello =() =>{
    console.log('hellooooooo');
    
}
printHello();
