const { log } = require("console");

function abc(){
    console.log("calling function");
   
}
function myFunc(abc){
   console.log("calling function of myFunc");
    return abc;
}
myFunc(abc());

console.log("***********ForEach()**********");
let arr=[1,2,3,4,5];
arr.forEach((val,idx,arr,)=>{
console.log(val,idx,arr,);
});

