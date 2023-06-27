/*Fácil: Contar palabras en una cadena
Desafío: Escribe una función que tome una cadena de texto y cuente cuántas 
palabras hay en ella. Puedes asumir que las palabras están separadas por
 espacios y que no hay puntuación adicional. */

 import { createInterface } from 'readline';

 let rlInterface = createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rlInterface.question("Ingrese la cadena de palabras: ", (word) => {
    console.log(word.trim().split(/\s+/).length);
    rlInterface.close();
 });
