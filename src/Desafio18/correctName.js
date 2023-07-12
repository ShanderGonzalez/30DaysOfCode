function checkName(name) {
    let word = name.split(' ');
  
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      let firstLetter = letter.charAt(0).toUpperCase();
      let restLetter = letter.slice(1).toLowerCase();
  
      word[i] = firstLetter + restLetter;
    }
  
    return word.join(' ');
  }
  
  console.log(checkName("chris alan"));
  console.log(checkName("1 w 2 r 3g"));
  