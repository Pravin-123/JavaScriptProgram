
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number: ',(userInput) => {
  console.log('You entered:', userInput);
 if(userInput % 5 ===0){
    console.log(userInput, 'is muliply by 5')
 }
 else{
    console.log(userInput, 'is not muliply by 5')
 }

  rl.close();
});


let gameNumber=25;

rl.question('Enter the game number: ',(userInput) => {
    console.log('You entered:', userInput);
    while(userInput != gameNumber){
        console.log('You entered wrong number, plse try again')
    }
    console.log('Congratulation, You entered correct game number')
   
    rl.close();
  });