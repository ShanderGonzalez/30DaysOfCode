# Reto 1: Algoritmo de Luhn
Eres un espía y acabas de extraer el número de tarjeta de crédito de María; 
necesitas verificar si el número de tarjeta de crédito es válido antes de realizar una transacción e infiltrarte en la mansión del villano.  
Escribe un programa que te permita validar números de tarjeta de crédito utilizando el algoritmo de Luhn.


#### Tabla de Contenido

- [Contexto](#contexto)
- [Solución](#solución)
- [Resultados y Ejecución](#resultados-y-ejecución)

## Contexto
Como espía, se ha obtenido el número de tarjeta de crédito de María, pero antes de realizar cualquier transacción e infiltrarse en la mansión del villano, se necesita asegurar que el número de tarjeta de crédito sea válido. Para hacerlo, se utilizará el algoritmo de Luhn.
El algoritmo de Luhn es un método simple pero efectivo para verificar la validez de los números de tarjeta de crédito.
El objetivo es escribir un programa que implemente este algoritmo y verifique la validez del número de tarjeta de crédito de María.

## Solución
Se crea un método el cual permite que el dato ingresado sea solo número por medio de una expresion regular y el metodo ```.matches()```. Adicional a esto, se procedió a establecer el método **validarCredito** el cual aplica la lógica del algoritmo de Luhn. Este código sigue las siguientes condiciones:

> 1. En número ingresado, se recorrerá desde derecha a izquierda para realizar la operacion de Luhn.
> 2. Si el índice de dicho número es par, se aplica la operacion multiplicando por 2.
> 3. Si el índice es impar, el número permanece igual.
> 4. Si el número obtenido es mayor o igual a 10, este suma sus dos dígitos.
> 5. Luego se suman todos sus dígitos.
> 6. Si el resultado de la suma dio un número divisible para 10 con residuo 0 entonces se dice que es una tarjeta de crédito válido.

Acontinuación se presenta el método en el que se implementó el algoritmo de Luhn para llevar a cabo dicha solucion:
```
public static boolean validarCredito(String valor) {
        int multiplo;
        int sumaTotal = 0;

        for(int i=valor.length()-1; i>=0; i--) {
            int valorConvertido = Character.getNumericValue(valor.charAt(i));
            if((i+1)%2==0){
                multiplo = valorConvertido * 2;
            }
            else {
                multiplo = valorConvertido;
            }
            if(multiplo >= 10) {
                String numero = String.valueOf(multiplo);
                multiplo = 0;
                for(int j=0; j<numero.length(); j++) {
                    multiplo += Character.getNumericValue(numero.charAt(j));
                }
            }
            sumaTotal+=multiplo;
        }
        return sumaTotal % 10 == 0;
    }
```
Puedes encontrar el código completo en [VerificarCredito.java](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/blob/master/src/Desafio1/VerificarCredito.java "VerificarCredito.java")
## Resultados y Ejecución
Los resultados se muestran acontinuación:

![1](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/f5345ae1-092b-4745-bb60-43fd4fd880d4)
![2](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/7e32b566-357f-4e26-bdef-34221cb01c78)
![3](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/d35d39fc-b8d3-4a8f-95e7-599b7dec4de7)
![4](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/01bf31f4-1b39-4c21-b897-bb4eb32a73dc)
