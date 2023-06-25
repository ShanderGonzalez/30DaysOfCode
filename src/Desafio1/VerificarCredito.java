/*
Mission Impossible: Beat the panther_Reto 1
Eres un espía y acabas de extraer el número de tarjeta de crédito de María;
necesitas verificar si el número de tarjeta de crédito es válido antes de realizar una transacción e infiltrarte en la mansión del villano.
Escribe un programa que te permita validar números de tarjeta de crédito utilizando el algoritmo de Luhn.
 */

package Desafio1;

import javax.swing.*;

public class VerificarCredito {

    public static boolean validarNumeros (String datos) {
        return datos.matches("[0-9]*");
    }
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

    public static void main(String[] args) {

        String numeroCredito;
        do {
            numeroCredito = JOptionPane.showInputDialog("INGRESE EL NÚMERO DE LA TARJETA DE CRÉDITO:");
        }while (!validarNumeros(numeroCredito.trim()));

        boolean validacion = validarCredito(numeroCredito);
        if(validacion) {
            JOptionPane.showMessageDialog(null,"ES VALIDA LA TARJETA DE CRÉDITO");
        }
        else {
            JOptionPane.showMessageDialog(null,"NO ES VALIDA LA TARJETA DE CRÉDITO");
        }
    }
}
