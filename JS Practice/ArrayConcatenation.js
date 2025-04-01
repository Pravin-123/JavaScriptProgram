let marvelHeroes=["Thor", "Spiderman","Ironman"];
let dcHeroes= ["Superman","batman"];
let man=["shaktiman","Junior ji"]
let ans = marvelHeroes.concat(dcHeroes,man); //in concat method it print array value as per the array sequence.
console.log(ans)




//unshift: add element at starting
let fruit=["apple","banana"]
console.log(fruit)
fruit.unshift("orange")
console.log(fruit)
console.log("**************")
//shift: delete element at starting of index
let fruit_2=["apple","banana"]
console.log(fruit_2)
fruit_2.shift()
console.log(fruit_2)

console.log("********Slice******")

let marvelHeroesSlice=["Thor", "Spiderman","Ironman","dr","jr"];
console.log(marvelHeroesSlice)
console.log("slicing array: ",marvelHeroesSlice.slice(1,3)) 
console.log("slicing array: ",marvelHeroesSlice.slice(1,4))
console.log("********splice******")

let arr=[1,2,3,4,5,6,7];
arr.splice(1,2,11,12); //after performing 1,2,11,12,5,6,7
console.log("splice result",arr);// 1, 11, 12, 4, 5,  6,  7

//concat: concat maultiple array.
//unshift: add element at starting
//shift: delete element at starting of index
//console.log(arr.splice(3,1) )