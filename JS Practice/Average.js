let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let item of marks) {
    sum = sum + item;
}
let avg = sum / marks.length;
console.log(`Average mark of the student =${avg}`)

