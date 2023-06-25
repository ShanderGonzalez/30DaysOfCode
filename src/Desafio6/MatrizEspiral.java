/*
El desafío consiste en escribir un programa que tome un
número entero positivo n y genere una matriz de tamaño n x n
que contenga una espiral ascendente de números, comenzando
desde 1 y siguiendo un patrón en sentido horario.

Mission Impossible: Beat the panther_Reto 6
 */

package Desafio6;

import java.util.Arrays;
import java.util.Scanner;

public class MatrizEspiral {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("INGRESE EL TAMAÑO DEL LA MATRIZ: ");
        int numero = sc.nextInt();

        int[][] espiralM = new int[numero][numero];
        int acumulador = 1;
        int filaInicio = 0, filaFinal = numero-1, columInicio = 0, columFinal = numero-1;

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

        for (int[] ints : espiralM) {
            System.out.println(Arrays.toString(ints));
        }
    }
}

