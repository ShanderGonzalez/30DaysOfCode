import { createInterface } from 'readline';

let rlInterface = createInterface({
  input: process.stdin,
  output: process.stdout
});

const words = ['caballo', 'oveja', 'cerdo', 'chimpance'];
function selectWord() {
  let index = Math.floor(Math.random() * words.length);
  return words[index]; 
}

let tryGuess = 0;
let chooseWord = selectWord();
let guessLetter = [];

function inicializarAdivinadas() {
  for (let i = 0; i < chooseWord.length; i++) {
    guessLetter[i] = '_';
  }
}

function gameLoop() {
  rlInterface.question("Ingresar una letra: ", (letter) => {
    console.clear();

    if(chooseWord.includes(letter)){
      dibujarAhorcado(tryGuess);
      for (let i = 0; i < chooseWord.length; i++) {
        if (chooseWord[i] === letter) {
          guessLetter[i] = letter;
        }
      }
      
    } else {
      tryGuess++;
      dibujarAhorcado(tryGuess);
    }

    console.log(guessLetter.join(' '));

    if (tryGuess >= 6) {
      console.log("Perdiste. Elige otra palabra.");
      rlInterface.close();
    } else if (guessLetter.join('') === chooseWord) {
      console.log("¡Felicidades! Adivinaste la palabra.");
      rlInterface.close();
    } else {
      gameLoop();
    }
  });
}

function dibujarAhorcado(intentos) {
  const dibujo = [
    `
       +---+
       |   |
           |
           |
           |
           |
    =========`,
    `
       +---+
       |   |
       O   |
           |
           |
           |
    =========`,
    `
       +---+
       |   |
       O   |
       |   |
           |
           |
    =========`,
    `
       +---+
       |   |
       O   |
      /|   |
           |
           |
    =========`,
    `
       +---+
       |   |
       O   |
      /|\\  |
           |
           |
    =========`,
    `
       +---+
       |   |
       O   |
      /|\\  |
      /    |
           |
    =========`,
    `
       +---+
       |   |
       O   |
      /|\\  |
      / \\  |
           |
    =========`
  ];

  console.log(dibujo[intentos]);
}

inicializarAdivinadas();
gameLoop();

