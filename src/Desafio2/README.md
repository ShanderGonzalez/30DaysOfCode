# Reto 2: Conversor de unidades
Te encuentras realizando una misión en China y necesitas convertir unidades de medida para evitar ser descubierto. Escribe un programa que te permita convertir entre diferentes unidades de medida, como centímetros a pulgadas, kilómetros a millas, etc.

#### Tabla de Contenido

- [Contexto](#contexto)
- [Solución](#solución)
- [Resultados y Ejecución](#resultados-y-ejecución)

## Contexto
Se está llevando a cabo una misión encubierta en China y se necesita realizar conversiones de unidades de medida para evitar levantar sospechas. Entonces se crear una solucion que permita hacer conversiones. Esto te ayudará a comunicarte con los lugareños y llevar a cabo tus tareas de manera eficiente sin levantar sospechas.

## Solución
La solución planteada, es un programa en el que se crea un menú en donde se puede escoger los tipos de conversiones a realizar. 
```
int menu = Integer.parseInt(JOptionPane.showInputDialog("""
                MENÚ
                1. Cm a Pulg
                2. Km a Millas
                3. Pulg a Cm
                4. Millas a Km
                5. Salir"""));
```
Por cada opción del menú que escoga se presentará en pantalla una ventana donde tendra que ingresar los datos flotantes ya sea en **centímetros a pulgadas, kilómetros a millas**.
Puedes encontrar el código completo en [ConversorUnidades.java](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/blob/master/src/Desafio2/ConversorUnidades.java "ConversorUnidades.java")

## Resultados y Ejecución
Los resultados se muestran acontinuación:

![1](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/7713ecb5-bce2-4549-a220-43652c9028da)
![2](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/3d432af0-6a6c-496f-b70b-fa77054f6194)
![3](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/fbe88e7f-335f-462f-a294-0e14962018cc)
![4](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/c5fd854c-374b-435e-80b9-6f0a7a968b74)
![5](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/829eada8-9e4b-49e1-b95f-f0f9fad2ab68)
![6](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/3fcb61c2-ebf1-43d7-b382-c262c357d2fa)
![7](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/db30b259-5d3c-4697-a719-ab4e4cc51c5e)
![8](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/4e85e417-ad03-447a-bfe4-3f0055a00b4c)
![9](https://github.com/ShanderGonzalez/30DaysOfCode-Panthers/assets/94009521/ba195de2-1410-4156-a388-2816e7ac50c8)
