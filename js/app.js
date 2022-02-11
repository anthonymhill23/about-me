'use strict';

console.log('I am the greatest');



let userName = prompt('what shall we call you?');
alert(`Welcome ${userName}! Please play this guessing game I have constructed for you to learn a little bit about me, the person who made this page`);
let counter = 0;

let answerOne = prompt('Am I am a fan of Star Wars?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  alert('This is the way');
  counter++;
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('wrong, I do in fact know the ways of the darkside');
}



let answerTwo = prompt('Am I an only child?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y'); {
  alert('Nope, I have 4 Brothers and 4 Sisters');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert(`You are correct, I have 4 brothers and 4 sisters, I'm the oldest`);
  counter++;
}



let answerThree = prompt('Am i into Powerlifting?').toLowerCase();

if (answerThree === 'y' || answerThree === 'yes') {
  alert(' Yes I am, I am preparing for my first meet next year  ');
  counter++;
} else if (answerThree === 'n' || answerThree === 'no') {
  alert`you are wrong, I am a amateur powerlifter in training`;
}




let answerFour = prompt('Do I have any pets?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  alert('Yes I do, I have two cats');
  counter++;
} else if (answerFour === 'n' || answerFour === 'no') {
  alert(`Actually I do have pets, I have two cats`);
}





let answerFive = prompt(' Am I new to coding?').toLowerCase();
if (answerFive === 'yes ' || answerFive === 'y') {
  alert(`I am super new to coding, I have never programmed ANYTHING before attending code fellows`);
  counter++;
} else if (answerFive === 'n' || answerFive == 'no') {
  alert(` I am actually very new to coding, this is the first class I've ever attended to learn my new skillset`);
}

alert(`well ${userName} I appreciate you playing the guessing game . I had fun creating it, How many did you get correct?`);




//let userGuess = prompt('Guess a number between 1-6');
let guessAnswer = 6;
let attempts = 4;
while (attempts) {

  attempts--;
  let userGuess = prompt('guess a number');
  if (parseInt(userGuess) === guessAnswer) {
    alert('You guessed correct!');
    counter++;
    break;
  } else if (userGuess > guessAnswer) {
    alert('That\'s too high');
  } else if (attempts === 0) {
    alert(' You ran out of guesses , the correct number was 6!');
  } else {
    alert(`That\'s  too low`);
  }
}

let favSithlords = ['darthvader', 'darthplagus', 'darthsidious', 'darthbane', 'darthrevan'];

// -------- NESTED FOR-LOOP ----------
// need to build logic for incorrect answer
//for (let count = 1; count <= 6; count++) {
//}




let userAttempts = 6
starwars: while (userAttempts >= 0) {
  let response = prompt("Name one of my fav sith lords").toLowerCase();
  userAttempts--

  for (let i = 0; i < favSithlords.length; i++) {

    let fav = favSithlords[i];
    // console.log(i);
    if (fav === response) {
      alert('You got one!');
      counter++;
      //count = 6;
      break starwars;
    }
    //else { 
    //alert ('Nope, that\'s wrong');

    //}
  }

}
alert(favSithlords)



