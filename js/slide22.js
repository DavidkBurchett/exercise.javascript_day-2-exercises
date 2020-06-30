var userInput = prompt("please enter a number between 0 and 100");
var userInputAsInterger

while(!(0 < userInput && userInput < 100)){
    userInput = prompt("Enter a valid number")
    userInputAsInterger = parseInt(userInput);
}
console.log(userInput * userInput);

// while(true){
//     userInput = prompt("please enter a number between 0 and 100");
//     parseInt(userInput);
//     if( 0 < userInput && userInput > 100){
//         break;
//     }
// }
// console.log(userInput * userInput);
