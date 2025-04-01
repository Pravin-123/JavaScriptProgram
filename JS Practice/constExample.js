const studentData={
 fullNmae:"pravin shinde",
 age:34,
 org:"xyz"
};

console.log(studentData)//it will print all the data of student
console.log(studentData['fullNmae']) //it will print spacific value of key
//OR
console.log(studentData.fullNmae)////it will print spacific value of key
console.log(studentData.age)//it will print spacific value of key
console.log(studentData.org)//it will print spacific value of key

//typeof: find the type of data
console.log(typeof(studentData))
console.log("-------------------------------------------------------")
console.log("type of student object is: ",typeof studentData)
console.log("type object of student -org  is: ",typeof studentData.org)

console.log(typeof(studentData.age))
console.log("-------------------------------------------------------")

//how to change the value of age by 1

studentData['age']=studentData['age']+1;
studentData['fullNmae']='rahul sh';

console.log(studentData['age'])
console.log(studentData['fullNmae'])

//const : we can't update value
 const nameval="pravin"
 //const nameval='ggg'  //Cannot redeclare block-scoped variable 'nameval'.ts(2451)


//object: collection of different variable
//const : we can't redeclare

