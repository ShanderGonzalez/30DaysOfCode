function anagramsCheck(firstWord, secondWord) {
  firstWord = firstWord.toLowerCase().replace(/\s/g, '').split('').sort();
  secondWord = secondWord.toLowerCase().replace(/\s/g, '').split('').sort();
  
    if (firstWord.length !== secondWord.length) {
      return false;
    }
  
    for (let i = 0; i < firstWord.length; i++) {
      if (firstWord[i] !== secondWord[i]) {
        return false;
      }
    }
  
    return true;
  }

  console.log(anagramsCheck('raza', 'zara'));
  console.log(anagramsCheck('frase', 'fresa')); 
  console.log(anagramsCheck('abc', 'def')); 
  
  