package Desafio14;

import java.util.Locale;
import java.util.Scanner;

public class raceTurtle {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.US);

        double[] speed = new double[3];

        for(int i = 0; i< speed.length; i++){
            System.out.print("Ingrese el numero de velocidad de la Tortuga " + (i+1) + ": ");
            speed[i] = sc.nextDouble();
            sc.nextLine();
        }

        double maxNumber = speed[0];
        int index = 1;

        for(int i = 1; i< speed.length; i++){
            if(speed[i] > maxNumber){
                maxNumber = speed[i];
                index = i+1;
            }
        }

        System.out.println("La tortuga ganadora es " + index +
                "\nCon velocidad de " + maxNumber);

    }
}
