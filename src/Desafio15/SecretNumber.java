package Desafio15;

import java.util.Random;
import java.util.Scanner;

public class SecretNumber {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Random random = new Random();

        int numberRandom = random.nextInt(100) + 1;

        System.out.println("El numero secreto es: " + numberRandom);

        for (int i = 0; i < 5; i++) {
            System.out.println("INTENTO " + (i + 1));
            System.out.print("Ingrese el numero a adivinar: ");
            int number = sc.nextInt();

            if (number == numberRandom) {
                System.out.println("Numero igual al numero secreto");
                break;
            } else if (number < numberRandom) {
                System.out.println("El numero es menor al numero secreto");
            } else {
                System.out.println("El numero es mayor al numero secreto");
            }
        }

        System.out.println("FIN DE INTENTOS");
    }

}
