//Q1: create function using "function" keyword that takes a string as an argument and returm the Vowels in the string
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            console.log("vowel: ", char);
            count++;
        }
    }
    console.log(count);
}
countVowels("apanacollege");

console.log("************************Using ArrowFunction*****************************************");
const countVow= (str) =>{
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            console.log("vowel: ", char);
            count++;
        }
    }
    console.log(count);
}
countVow('aeiou')

