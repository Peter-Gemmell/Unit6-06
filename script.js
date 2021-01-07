//asks to guess the age and also has 10 guesses 
alert("You have 10 guesses. Guess my age!")
//variable for the answer that you are guessing is 15
let answer= 15;
//variable for the input in the prompt
let guess= prompt("What's your guess");
//its the loop,until 10 guesses
for(i=0;i<10;i++){
  //loop until answer is same as guess
  if(answer==guess){
    //alert user for correct answer
     alert("You guessed correctly, Congratulations!, Wanna play again?");
     //break so you can leave
     break;
     //if guess lower than answer
  } else if (guess <= answer){
    //alert player when too low
    guess=prompt('Incorrect! Too small. Please Try again?')
    //alert 
  } else if (guess >= answer){
    guess=prompt('Incorrect! Too big. Please Try again?')
  } else{
    guess=prompt('That is not a valid entity must be a number')
  }
}