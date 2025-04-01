let str = 'pravin'
let str2 = 'Pravin'
console.log(str.toUpperCase()) //here new string value would create in memory, still old str value is 'pravin'
console.log(str2.toUpperCase())
console.log(str2.toLowerCase())
let str3 = '   pravin shinde  '
console.log(str3.trim())

let str4 = "pravinshinde"
console.log(str4.slice(1, 5))
console.log(str4.slice(6, 9))
console.log(str4.slice(1))//it will start from 1 index and will print remaining all char bcoz there is no end condition

let str5 = 'pravin'
let str6 = 'shinde'
let res = str6 + str5;
console.log(str5.concat(str6))//string concatenation
console.log(res)

let ans="hi"+123;
console.log(ans)

let str7="hello"
console.log(str7.replace('lo','p'))//replace character
let str8="hello js"
console.log(str8.replace('js','javascript'))//replace character
let str9="hello js js js"
console.log(str9.replaceAll('js','javascript'))//replace character

let str10="hello js js js"
console.log(str10.charAt(4))//replace character




//string is immutable, whenever we perform the operation it would create new string value
//slice-> we need to provide start and end index , here start from 0 index but end with given no,
//slice(1,5)-> here printing start with index 1  and end with 4 because last number is always exlusive
//relace--> it will replace first matching character
//replaceAll() --> it will replace all matching character