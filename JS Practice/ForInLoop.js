let nameOfUser = '123';
for (let values in nameOfUser) {
    console.log(values)
}

//note: for in loop use for to print key value here we don't have object hence it will print index / size

let student ={
    name:"pravin",
    age:34,
    org:"xyz"
};

for(let key in student){
    console.log("student key is:",key, "value is", student[key])
}

//for in loop: for object we can use to print key and their value