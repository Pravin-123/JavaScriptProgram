
let num = [1, 2, 3, 4, 5, 6, 7, 8];

let evenArr = num.filter((val) => {//evenArr is new array created here
    return val % 2 === 0;
})
console.log("Even number from array: ", evenArr);
let OddArr = num.filter((val) => {//OddArr is new array created here
    return val % 2 !== 0;
})
console.log("Odd number from array: ", OddArr);

let greatherNumber = num.filter((val) => {//greatherNumber is new array created here
    return val > 3;
})
console.log("Greather number than 3: ", greatherNumber);
console.log("***********find marks which are greater than 90********");

const marks=[88,99,45,6,98,92];
let topperArray = marks.filter((val)=>{
    return val>90;
})
console.log("Topper : ", topperArray);
//create new array of the elements that gives true for a condition/filter.
//eg: all even elements