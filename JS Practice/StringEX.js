let str="pravin"
console.log(str)
console.log(str.length)
console.log(str[0])
console.log(str[7])
console.log(typeof str)

//another way to create string using backticks(``)

let string_2 = `pravin shinde`;
console.log(string_2)
console.log(string_2.length)
console.log(string_2[0])
console.log(string_2[7])
console.log(typeof string_2)

let obj={
    item:"pen",
    price: 10,
};

//template literal
let ans = `the cost is ${obj.item} is ${obj.price}`;
console.log(ans)

let temp=  `${1+2+3}`;
console.log(temp)

//or
console.log(obj.item,'', obj.price)

//how to print to new line

console.log("Hello\njavascript")
console.log("Hello\tjavascript")
let len = "Hello\njavascript"
let len_2 = "Hello\tjavascript"

console.log(len.length)
console.log(len_2.length)


///String : it's sequence of character use to represent text.
//if you using back slash n (\n), it will consider 1 for length