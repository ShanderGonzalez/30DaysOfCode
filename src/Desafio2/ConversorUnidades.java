/*
Reto: Conversor de unidades
Te encuentras realizando una misión en China y necesitas convertir unidades de medida para evitar ser descubierto.
Escribe un programa que te permita convertir entre diferentes unidades de medida, como centímetros a pulgadas, kilómetros a millas, etc.

Mission Impossible: Beat the panther_Reto 2
 */

package Desafio2;

import javax.swing.*;

public class ConversorUnidades {

    public static void main(String[] args) {

        float cm, pulg, km, m, pies, millas;

        int menu = Integer.parseInt(JOptionPane.showInputDialog("""
                MENÚ
                1. Cm a Pulg
                2. Km a Millas
                3. Pulg a Cm
                4. Millas a Km
                5. Salir"""));

        switch (menu) {
            case 1 -> {
                cm = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el valor en cm:"));
                JOptionPane.showMessageDialog(null, cm + " cm es " + String.format("%.4f", (cm / 2.54)) +
                        " Pulg", "Solucion", JOptionPane.PLAIN_MESSAGE);
            }
            case 2 -> {
                km = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el valor en km:"));
                JOptionPane.showMessageDialog(null, km + " Km es " + String.format("%.4f", (km / 1.60934)) +
                        " Millas", "Solucion", JOptionPane.PLAIN_MESSAGE);
            }
            case 3 -> {
                pulg = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el valor en pulg:"));
                JOptionPane.showMessageDialog(null, pulg + " Pulg es " + String.format("%.4f", (pulg * 2.54)) +
                        " Cm", "Solucion", JOptionPane.PLAIN_MESSAGE);
            }
            case 4 -> {
                millas = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el valor en millas:"));
                JOptionPane.showMessageDialog(null, millas + " Millas es " + String.format("%.4f", (millas * 1.60934)) +
                        " Km", "Solucion", JOptionPane.PLAIN_MESSAGE);
            }
            case 5 -> System.exit(0);
        }
    }

}
