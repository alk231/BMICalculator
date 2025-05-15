const form = document.querySelector('form');
const result=document.querySelector('#results')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  if(isNaN(height)||height<0){
    result.innerHTML="Please write a valid height"
  }
  if(weight<0||isNaN(weight))
  {
    result.innerHTML="Please write a valid weight"
  }
  else
  {
    const bmi = weight / ((height / 100) ** 2);
    result.innerHTML=`Your Bmi is ${bmi}`
  }
});









document.addEventListener('DOMContentLoaded', () => {
  const lastResult = document.querySelector('.lastResult');
  let guessesRemaining = parseInt(lastResult.textContent);

  const guessField = document.querySelector('.guessField');
  
  function randomNumberGenerator() {
    return Math.round(Math.random() * 100);
  }
  const randomNumber = randomNumberGenerator();

  const resultParas = document.querySelector('.resultParas');
  const form = document.querySelector('.guessform');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userGuess = parseInt(guessField.value);
    
    if (isNaN(userGuess) || userGuess < 0) {
      resultParas.innerHTML = "Please write a valid number";
      return;
    }

    if (userGuess === randomNumber) {
      resultParas.innerHTML = "You have guessed it right!";
    } else {
      guessesRemaining--;
      lastResult.innerHTML = guessesRemaining;

      if (guessesRemaining <= 0) {
        resultParas.innerHTML = "Game Over! Please try again later";
      } else {
        resultParas.innerHTML = "You have guessed it wrong";
      }
    }
  });
});

