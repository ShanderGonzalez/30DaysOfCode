# Reto 8: Contar palabra de una cadena
Escribe una función que tome una cadena de texto y cuente cuántas 
palabras hay en ella. Puedes asumir que las palabras están separadas por
 espacios y que no hay puntuación adicional.

#### Tabla de Contenido

- [Contexto](#contexto)
- [Solución](#solución)
- [Resultados y Ejecución](#resultados-y-ejecución)

## Contexto
La función del desafío es encontrar cuantas palabras hay en un texto. Por lo tanto se implemento ciertos métodos funcionales como ```.trim()``` y el método de ```.split()``` que son funciones que ```javascript``` proporciona.
## Solución
Para resolver este problema, se ideó resolverlo con arrow function ya que es una forma mas concisa de escribir la funcion. Dentro de la funcion se establecio el atributo **word** como parámetro, adicional a ello, se implemento los métodos funcionales de ```.trim()``` el cual elimina los espacios que estan al inicio y al final; esto en caso de que se introduzca un espacion entre los extremos. El método ```.split()``` permite separar las palabras dependiendo del parámetro que reciba, en ese caso por **espacios**.
```
rlInterface.question("Ingrese la cadena de palabras: ", (word) => {
    console.log(word.trim().split(/\s+/).length);
    rlInterface.close();
 });
```
El código completo se encuentra en [countWord.js](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/blob/master/src/Desafio8/countWord.js "countWord.js")

## Resultados y Ejecución
Para ejecutar el codigo en visual code desde terminal se ingresó lo siguiente:
```
node countWord.js
```

Los resultados se muestran acontinuación:
```
Ingrese la cadena de palabras: Hola como estas
3
Ingrese la cadena de palabras: Todo el dia me la paso pensando como llegar mas lejos
11
```
