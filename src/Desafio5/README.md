# Reto 5: Validación de contraseña
Hackeaste la contraseña del laboratorio secreto del villano. Escribe un programa que te permita verificar si una contraseña cumple con lo siguiente:
* La contraseña debe tener al menos 8 caracteres.
* La contraseña debe contener al menos una letra mayúscula y una letra minúscula.
* La contraseña debe contener al menos un número.
* La contraseña no debe contener espacios en blanco.

#### Tabla de Contenido

- [Contexto](#contexto)
- [Solución](#solución)
- [Resultados y Ejecución](#resultados-y-ejecución)

## Contexto
Existen diferentes método para resolver esta problematica, pero la forma mas eficiente es usar expresiones regulares. Algo que ofrece ```java``` en este caso es la expresion ```.matches()``` y ```.contains()``` el cual permite aplicar regex.

## Solución
Se crea un atributo **contrasenia** que recibe un ```string``` en donde se alamacenará la contraseña que se ingrese para validar. Se crean variables ```boolean``` en el que se establecen los siguientes:

 ```boolean may, min, num, space;```

Adicional se muestra una tabla respecto a las expresiones regulares usadas para la solucion de este problema.

| Condicion      | Regex |  
| ----------- | ----------- |
| Contenga al menos una letra mayúscula y minúscula | [A-Z] y [a-z] |
| Contenga por lo menos un número   | \\d |
| No contenga espacios en blando | ! " "  |

Luego de ello, se establece un condicional, en el se deben cumplir las condiciones en base a las expresiones regulares como verdaderas, adicionalmente se verificar que la contraseña sea de tamaño 8.

```
if (contrasenia.length()==8 && may && min && num && space) {
            JOptionPane.showMessageDialog(null, "La contraseña ingresada SI es válida",
                    "VALIDADOR", JOptionPane.INFORMATION_MESSAGE);
        } else {
            JOptionPane.showMessageDialog(null, "La contraseña ingresada NO es válida",
                    "VALIDADOR", JOptionPane.ERROR_MESSAGE);
        }
```
El código completo se encuentra en [ValidarContra.java](https://github.com/ShanderGonzalez/30DaysOfCode/blob/master/src/Desafio5/ValidarContra.java "ValidarContra.java")

## Resultados y Ejecución
Los resultados se muestran acontinuación:

![Imagen 1](https://github.com/ShanderGonzalez/30DaysOfCode/assets/94009521/ba744404-40e6-4663-9441-832ce5ca0fb5)
![Imagen 2](https://github.com/ShanderGonzalez/30DaysOfCode/assets/94009521/b96eebe6-29a5-4f23-9795-8936f41ccdeb)
![Imagen 3](https://github.com/ShanderGonzalez/30DaysOfCode/assets/94009521/12c60a89-1e1e-4b0a-9c88-183ebf0e8a3b)
![Imagen 4](https://github.com/ShanderGonzalez/30DaysOfCode/assets/94009521/ef045447-0e3d-4f26-9b95-34a5af59c320)



