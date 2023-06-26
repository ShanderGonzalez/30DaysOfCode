# Reto 7: Validación de Correo

Medianamente complejo: Validar una dirección de correo electrónico
Desafío: Crea una función que verifique si una cadena dada representa 
una dirección de correo electrónico válida. La dirección de correo 
electrónico debe tener el formato "nombre@dominio.extension" y cumplir
 con algunas reglas básicas, como tener al menos un carácter antes y 
después del símbolo "@".

#### Tabla de Contenido

- [Contexto](#contexto)
- [Solución](#solución)
- [Resultados y Ejecución](#resultados-y-ejecución)

## Contexto

En este problema se solicita crear una función que verifique si una cadena dada representa una dirección de correo electrónico válida. Para ello se aplico expresiones regulares, algo que ```javascript``` proporciona es hacer un ```.test()``` en el que se verifique el correo ingresado.

## Solución
Para la solución de este ejercicio se implemento la lógica de las expresiones regulares, en el que se estableció una función que me permita ingresar datos en terminal. Luego se creo el método **ValidateMail** que recibe como parámetro un **mail** cuya funcion es verificar si el correo que se ingreso es válido.

Adicional se muestra una tabla respecto a las expresiones regulares usadas para la solucion de este problema.

| Condicion      | Regex |  
| ----------- | ----------- |
| Sea un caracter alfanumérico y punto | [\w.] |
| Contenga un caracter específico   | @ |
| Contenga letras de la a hasta la z   | [a-z] |
| Obligado que exista un punto | \\.  |

Respecto a lo anterior, la función respecto a la expresion regular se presenta de la siguiente manera:
```
function ValidateMail (mail) {
    let regexMail = /^[\w.]{3,}@[a-z]{3,}\.[\w.]{2,}$/;
    return regexMail.test(mail);
}
```

El código completo se encuentra en [ValidarCorreo.js](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/blob/master/src/Desafio7/ValidarCorreo.js "ValidarCorreo.js")

## Resultados y Ejecución
Para ejecutar el codigo en visual code desde terminal se ingresó lo siguiente:
```
node ValidarCorreo.js
```
Los resultados se muestran acontinuación:
```
Ingrese el correo a validar: hola.todos@gmail.com
El correo es válido.
Ingrese el correo a validar: nombre@dominio.com
El correo es válido.
Ingrese el correo a validar: nombre@outlook
El correo no es válido.
```
