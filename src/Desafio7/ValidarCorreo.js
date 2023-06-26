/*
Medianamente complejo: Validar una dirección de correo electrónico
Desafío: Crea una función que verifique si una cadena dada representa 
una dirección de correo electrónico válida. La dirección de correo 
electrónico debe tener el formato "nombre@dominio.extension" y cumplir
 con algunas reglas básicas, como tener al menos un carácter antes y 
después del símbolo "@".
*/

import { createInterface } from 'readline';

let rlInterface = createInterface({
  input: process.stdin,
  output: process.stdout
});

function ValidateMail (mail) {
    let regexMail = /^[\w.]{3,}@[a-z]{3,}\.[\w.]{2,}$/;
    return regexMail.test(mail);
}

rlInterface.question('Ingrese el correo a validar: ', (mail) => {
    if (ValidateMail(mail)) {
      console.log('El correo es válido.');
    } else {
      console.log('El correo no es válido.');
    }
    rlInterface.close();
  });