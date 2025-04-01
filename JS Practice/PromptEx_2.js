//enter the userr name via terminal and generate the username based on the input
//start user name with @, followd by their entered name and ending with the fullname length


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the name: ', (userInput) => {
  console.log('You entered name:', userInput);
  let userName= "@"+userInput+userInput.length;
  console.log(userName)
  rl.close();
});


