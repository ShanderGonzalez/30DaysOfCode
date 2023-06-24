/*
Reto: Validación de contraseña
Hackeaste la contraseña del laboratorio secreto del villano. Escribe un programa que te permita verificar si una contraseña cumple con lo siguiente:
* La contraseña debe tener al menos 8 caracteres.
* La contraseña debe contener al menos una letra mayúscula y una letra minúscula.
* La contraseña debe contener al menos un número.
* La contraseña no debe contener espacios en blanco.

Mission Impossible: Beat the panther_Reto 5
 */

package Desafio5;

import javax.swing.*;

public class ValidarContra {

    public static void main(String[] args) {

        String contrasenia = JOptionPane.showInputDialog(null, "INGRESE CONTRASEÑA A VALIDAR:");

        boolean may, min, num, space;

        //REGEX
        may = contrasenia.matches(".*[A-Z].*");
        min = contrasenia.matches(".*[a-z].*");
        num = contrasenia.matches(".*\\d.*");
        space = !contrasenia.contains(" ");

        if (contrasenia.length()==8 && may && min && num && space) {
            JOptionPane.showMessageDialog(null, "La contraseña ingresada SI es válida",
                    "VALIDADOR", JOptionPane.INFORMATION_MESSAGE);
        } else {
            JOptionPane.showMessageDialog(null, "La contraseña ingresada NO es válida",
                    "VALIDADOR", JOptionPane.ERROR_MESSAGE);
        }
    }
}
