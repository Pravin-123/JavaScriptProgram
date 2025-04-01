let num = [0, 1, 2, 3, 4];

const sum = num.reduce((prev, cur) => {
    return prev + cur;
})
console.log(sum);
console.log("***************Largest number ******************************");
let arr = [5, 6, 2, 1, 3];
const maxNumber = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})
console.log("max number is ", maxNumber);

console.log("***************Smallest  number ******************************");
let smallArray = [5, 6, 2, 1, 3];
const minNumber = smallArray.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
})
console.log("min number is ", minNumber);





///Reduce: perform some operation n& reduce the array to a single value, it returns that single value.
