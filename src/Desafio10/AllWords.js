function generateWords(letters) {
  const allWords = [];

  function combine(letters, word) {
    if (letters.length === 0) {
      allWords.push(word);
      return;
    }

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      const otherLetters = letters.slice(0, i) + letters.slice(i + 1);
      combine(otherLetters, word + letter);
    }
  }

  combine(letters, '');

  return allWords;
}

console.log(generateWords('AITLAI'));
console.log(generateWords('AMOR'));
console.log(generateWords('NOITCAAV'));
