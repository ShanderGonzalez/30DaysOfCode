# Reto 6: Matríces
El desafío consiste en escribir un programa que tome un 
número entero positivo n y genere una matriz de tamaño n x n 
que contenga una espiral ascendente de números, comenzando 
desde 1 y siguiendo un patrón en sentido horario.

#### Tabla de Contenido

- [Contexto](#contexto)
- [Solución](#solución)
- [Resultados y Ejecución](#resultados-y-ejecución)

## Contexto
En este reto, se requiere escribir un programa que genere una matriz de tamaño n x n, donde n es un número entero positivo dado por el usuario. La matriz debe contener una espiral ascendente de números, comenzando desde 1 y siguiendo un patrón en sentido horario.

## Solución
Se crea una matriz vacía de tamaño **nxn** en el que se establece una matríz cuadrada. Se crea una variable **acumulador** el cual va aumentando en uno cada que se vaya cumpliendo su ciclo en el ```for```.  Además se establecen las variables **filaInicio, filaFinal, columInicio, columFinal** que definiran las filas y columnas de la matriz espiral.
Dentro de un ```while```  el cual asegura que el algoritmo siga llenando la matriz en espiral mientras haya filas o columnas por recorrerse, además se crea 4 bucles```for```, cada uno de los ```for``` cumple con la siguiente lógica:

| bucle for     | Description |
| ----------- | ----------- |
| Izquierda - Derecha    | LLena toda la primera fila de la matríz |
| Arriba - Abajo        | Llena la matríz desde la siguiente fila hasta el final de la ultima columna |
|Derecha - Izquierda| Llena la matríz desde la columna anterior a la final hasta el inicio de la ultima fila |
|Abajo - Arriba| Llena la matríz desde la fila anterior a la final hasta el inicio de la primera columna |

Acontinuación se presenta la estructura de como se establecieron los ```for``` para que la matriz siguiera un estilo espiral en valor incremental.
```
while (filaInicio <= filaFinal || columInicio <= columFinal) {
            for(int j=columInicio; j<=columFinal; j++){
                espiralM[filaInicio][j] = acumulador++;
            }
            for(int i=filaInicio+1; i<=filaFinal; i++){
                espiralM[i][columFinal] = acumulador++;
            }
            for(int j=columFinal-1; j>=columInicio; j--){
                espiralM[filaFinal][j] = acumulador++;
            }
            for(int i=filaFinal-1; i>=filaInicio+1; i--){
                espiralM[i][columInicio] = acumulador++;
            }
            filaInicio++;
            columInicio++;
            filaFinal--;
            columFinal--;
        }
```
Puedes encontrar el código completo en [MatrizEspiral.java](https://github.com/ShanderGonzalez/30DaysOfCode/blob/master/src/Desafio6/MatrizEspiral.java "MatrizEspiral.java")

## Resultados y Ejecución
Los resultados se muestran acontinuación:
```
INGRESE EL TAMAÑO DEL LA MATRIZ: 5
[1, 2, 3, 4, 5]
[16, 17, 18, 19, 6]
[15, 24, 25, 20, 7]
[14, 23, 22, 21, 8]
[13, 12, 11, 10, 9]

Process finished with exit code 0

INGRESE EL TAMAÑO DEL LA MATRIZ: 8
[1, 2, 3, 4, 5, 6, 7, 8]
[28, 29, 30, 31, 32, 33, 34, 9]
[27, 48, 49, 50, 51, 52, 35, 10]
[26, 47, 60, 61, 62, 53, 36, 11]
[25, 46, 59, 64, 63, 54, 37, 12]
[24, 45, 58, 57, 56, 55, 38, 13]
[23, 44, 43, 42, 41, 40, 39, 14]
[22, 21, 20, 19, 18, 17, 16, 15]

Process finished with exit code 0
```
