function validateRoman(numero) {
    const regex = /^(M{0,3})(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;
    
    if (!regex.test(numero)) {
      return false;
    }
  
    const decimalNumber = convertRomDec(numero);
    if (decimalNumber < 1 || decimalNumber > 3999) {
      return false;
    }
  
    return true;
  }
  
  function convertRomDec(number) {
    const romNumber = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let decimal = 0;
    let preview = 0;
  
    for (let i = number.length - 1; i >= 0; i--) {
      const character = number[i];
      const value = romNumber[character];
  
      if (value >= preview) {
        decimal += value;
      } else {
        decimal -= value;
      }
  
      preview = value;
    }
  
    return decimal;
  }
  
  const romNumber = "CDXXI";
  const checkNumber = validateRoman(romNumber);
  console.log(checkNumber);