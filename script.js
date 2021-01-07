// asks to guess the age and also has 10 guesses
alert('You have 10 guesses. Guess my age!')
// defines variable i
let i = 0
// variable for the answer that you are guessing is 15
const answer = 15
// variable for the input in the prompt
let guess = parseInt(prompt('Whats your guess'))
// its the loop,until 10 guesses
  for(i=0 ;i <10 ;i++) {
   // loop until answer is same as guess
   if(answer === guess) {
    // alert user for correct answer
    alert('You guessed correctly, Congratulations!, Wanna play again?')
    // break so you can leave
    break
    // if guess lower than answer
  } else if (guess <= answer) {
    // alert player when too low of a number to the guessed
    guess = parseInt(prompt('Incorrect! Too small. Please Try again?'))
    // if guess higher than answer
  } else if (guess >= answer) {
    // alert  player when too high of a number to guessed
    guess = parseInt(prompt('Incorrect! Too big. Please Try again?'))
    // else
  }  else {
    // alert taht this is not a number
    guess =prompt('That is not a valid entity must be a number')
  }
}
