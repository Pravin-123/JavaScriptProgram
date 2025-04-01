
let foodItem=["tomato", "chip","berger","Pizza"]
console.log("originl list :",foodItem)
foodItem.push("carot")
console.log("after adding item ",foodItem)
let deletedItem =foodItem.pop()
console.log("deleted item: ",deletedItem)
console.log("final list ",foodItem.toString()) // it will print same data but in string format tomato,chip,berger,Pizza

//pop: remove last element
//push: add element to the last to the array