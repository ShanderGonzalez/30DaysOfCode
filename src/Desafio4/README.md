# Reto 4: Límites
El programador debe ingeniar una manera de ingresar una pareja de límites (inferior y superior). 
Debe ser capaz de manejar varios casos que consisten en parejas de límites. (ejemplo 1-10,20-30,...)
Para cada caso, el programa debe encontrar y sumar todos los números pares dentro del rango especificado.
El programa debe mostrar en pantalla la suma de los números pares obtenida para cada caso.

#### Tabla de Contenido

- [Contexto](#contexto)
- [Solución](#solución)
- [Resultados y Ejecución](#resultados-y-ejecución)

## Contexto
Para manejar este tipo de problema, es recomendable aplicar metodos funcionales que el propio lenguaje ofrece. En este caso se uso ```.split()``` el cual permite separar el string ingresado por medio de un caracter especificado en el método ```.split()```
El objetivo es calcular la suma de todos los números pares dentro de cada rango y mostrar el resultado en pantalla.

## Solución
Para resolver ese reto, se establecio el método por el cual los límites fijados se van a separar; es decir que para el primer caso se uso el siguiente método:
```
String[] limites = numero.split(",");
```
El cuál permite separar los límites de otros límites en un arreglo de string. Luego de ello se creo una función llamada **separarLimites**, esto permite separar los límites inferiores y los límites inferiores.
```
public static int separarLimites(String limites) {
        int inf, sup;
        String[] subLimites = limites.split("-");
        inf = Integer.parseInt(subLimites[0]);
        sup = Integer.parseInt(subLimites[1]);
        return sumaRangoLimites(inf, sup);
    }
```

Finalmente, se procede a realizar la suma entre el límite establecido por medio del método **sumaRangoLimites** el cuál cumple con la condicion de que sea número par.

Puedes encontrar el código completo en [SumaLimites.java](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/blob/master/src/Desafio4/SumaLimites.java "SumaLimites.java")

## Solución
Los resultados se muestran acontinuación:
```
Ingrese una pareja de limite: 1-10, 20-30, 40-50
Suma de pares contenidos en [1-10] es 30
Suma de pares contenidos en [20-30] es 150
Suma de pares contenidos en [40-50] es 270

Process finished with exit code 0

Ingrese una pareja de limite: 1-100
Suma de pares contenidos en [1-100] es 2550

Process finished with exit code 0
```
