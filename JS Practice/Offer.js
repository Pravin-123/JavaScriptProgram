//5 item -> [250, 645, 300, 900, 50][250,645,] all item have an offer of 10% OFF on them, 
//change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50]
//with for of loop
let i = 0;
for (let val of items) {
    let offer = val / 10;
    items[i]= items[i] - offer;
    console.log(`value after offer = ${items[i]}`)
    i++;
}
console.log("****************************************")
//with for  loop
let items_2 = [250, 645, 300, 900, 50]
for(let i=0;i<items_2.length;i++){
    let offer_2 =items_2[i]/10;
    items_2[i]= items_2[i]-offer_2;
}
console.log(`value after offer = ${items_2}`)