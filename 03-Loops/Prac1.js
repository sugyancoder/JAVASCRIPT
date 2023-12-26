//Prac Qs1
// for(let count=0; count<=100; count++) {
//     if(count%2 !== 0) {
//     console.log("num=", count);
//     }
// }


//Prac Qs2
let gameNum = 25;
let userNum = prompt("Guess the game number!");

while (userNum != gameNum) {
  userNum = prompt("You entered the wrong number. Try again :");
}

console.log("conratualtions, you entered the right number");