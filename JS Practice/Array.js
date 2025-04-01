let marks=[33,56,77,88,36];
console.log(marks)
console.log(marks.length)//property
console.log(marks[1]) //print array index value
marks[2]=78; //change the value of particular index
console.log(marks)

let heroes=["abc","pqr","xyz"]
console.log(heroes)
console.log(typeof heroes)
console.log("****************for loo******************")
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}

console.log("****************for Of loop******************")
for(let  item of heroes){
    console.log(item);
}


///array : collection of items
//arrays is an object

//here lenght is property, it gives something for us
//if method is there it perform some operation