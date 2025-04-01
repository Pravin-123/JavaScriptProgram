var score;
function calculategrade(mark) {
    if (mark >= 90 && mark <=100) {
        console.log("Grade A")
    } else if (mark >= 70 && mark <= 89) {
        console.log("Grade B")
    } else if (mark >= 60 && mark <= 69) {
        console.log("Grade c")
    } else if (mark >= 50 && mark <= 59) {
        console.log("Grade d")
    } else if (mark >= 0 && mark <= 49) {
        console.log("Grade f")
    }else{
        console.log("invalid input");
    }
}
calculategrade(70)