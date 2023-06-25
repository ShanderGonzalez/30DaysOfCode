# Reto 3: Validación de contraseña
El desafío consiste en encontrar el "número mágico" dentro de un rango específico. 
Se te dará un rango de números enteros, desde un límite inferior hasta un límite superior (ambos inclusivos). 
Tu tarea es encontrar el número mágico siguiendo las siguientes reglas:

1. El número mágico es un número impar.
2. El número mágico es divisible por 3.
3. La suma de los dígitos del número mágico es igual a 7.

Tu objetivo es encontrar el número mágico utilizando razonamiento lógico y operaciones matemáticas básicas.

#### Tabla de Contenido

- [Contexto](#contexto)
- [Solución](#solución)
- [Resultados y Ejecución](#resultados-y-ejecución)

## Contexto
En este desafío, se presenta un rango de números enteros, desde un límite inferior hasta un límite superior. El objetivo es encontrar un número mágico dentro de ese rango cumpliendo las condiciones, teniendo en cuenta de que matemáticamente es imposible que exista un número con estas reglas.

## Solución
Se fijan dos variables, uno para límite inferior y otro para límite superior. Luego de ello se crea un método **encontrarNumeroMagico** en cual contendrá las reglas establecidad para la solución del reto.
```
 public static int encontrarNumeroMagico(int inf, int sup){
        for(int i=inf; i<=sup; i++){
            if((i % 2 != 0) && (i % 3 == 0) && sumaDigitosNumMagico(i)==7){
                return i;
            }
        }
        return -1;
    }
```
Para ello, las condiciones establecidas forman parte de un ```for``` el cual itera en todo el límite fijado hasta encontrar el número mágico.

Puedes encontrar el código completo en [NumeroMagico.java](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/blob/master/src/Desafio3/NumeroMagico.java "NumeroMagico.java")

## Resultados y Ejecución
Los resultados se muestran acontinuación:
```
Ingrese el limite inferior: 1
Ingrese el limite superior: 1000
Matematicamente no existe un numero que cumpla con dichas condiciones

Process finished with exit code 0

Ingrese el limite inferior: 500
Ingrese el limite superior: 9999
Matematicamente no existe un numero que cumpla con dichas condiciones

Process finished with exit code 0
```
