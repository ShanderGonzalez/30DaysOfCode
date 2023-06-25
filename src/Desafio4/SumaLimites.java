/*
Descripción del desafío:

El programador debe ingeniar una manera de ingresar una pareja de límites (inferior y superior).
Debe ser capaz de manejar varios casos que consisten en parejas de límites. (ejemplo 1-10,20-30,...)
Para cada caso, el programa debe encontrar y sumar todos los números pares dentro del rango especificado.
El programa debe mostrar en pantalla la suma de los números pares obtenida para cada caso.

Mission Impossible: Beat the panther_Reto 4
 */

package Desafio4;

import java.util.Scanner;

public class SumaLimites {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Ingrese una pareja de limite: ");
        String numero = sc.nextLine().replace(" ", "");
        String[] limites = numero.split(",");
        int sumaPorLimites;

        for (String limite : limites) {
            sumaPorLimites = separarLimites(limite);
            System.out.println("Suma de pares contenidos en [" + limite + "] es " + sumaPorLimites);
        }

    }

    public static int separarLimites(String limites) {
        int inf, sup;
        String[] subLimites = limites.split("-");
        inf = Integer.parseInt(subLimites[0]);
        sup = Integer.parseInt(subLimites[1]);
        return sumaRangoLimites(inf, sup);
    }

     public static int sumaRangoLimites(int inf, int sup) {
        int sumaPar = 0;
        for(int i=inf; i<=sup; i++){
            if(i%2==0){
                sumaPar+=i;
            }
        }
        return sumaPar;
     }

}
