//even no
function evenNumber(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i, "is even number")
        }
        else{
            console.log(i, "is odd number")
        }
    }
}
let n = 100;
evenNumber(n);