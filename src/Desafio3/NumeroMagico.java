/*
El desafío consiste en encontrar el "número mágico" dentro de un rango específico.
Se te dará un rango de números enteros, desde un límite inferior hasta un límite superior (ambos inclusivos).
Tu tarea es encontrar el número mágico siguiendo las siguientes reglas:

1. El número mágico es un número impar.
2. El número mágico es divisible por 3.
3. La suma de los dígitos del número mágico es igual a 7.

Tu objetivo es encontrar el número mágico utilizando razonamiento lógico y operaciones matemáticas básicas.
 */

package Desafio3;

import java.util.Scanner;

public class NumeroMagico {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Ingrese el limite inferior: ");
        int limiteInferior = sc.nextInt();
        System.out.print("Ingrese el limite superior: ");
        int limiteSuperior = sc.nextInt();

        int numeroMagico = encontrarNumeroMagico(limiteInferior, limiteSuperior);
        if(numeroMagico!=-1){
            System.out.println("El numero magico es: "+numeroMagico);
        } else{
            System.out.println("Matematicamente no existe un numero que cumpla con dichas condiciones");
        }

    }

    public static int encontrarNumeroMagico(int inf, int sup){
        for(int i=inf; i<=sup; i++){
            if((i % 2 != 0) && (i % 3 == 0) && sumaDigitosNumMagico(i)==7){
                return i;
            }
        }
        return -1;
    }

    public static int sumaDigitosNumMagico(int numMagico){
        int suma = 0;
        while (numMagico!=0){
            suma += numMagico % 10;
            numMagico /= 10;
        }
        return suma;
    }

}
