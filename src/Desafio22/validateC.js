function validarCedula(cedula) {
    if (cedula.length !== 10) {
      return false;
    }
  
    let coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let verificador = parseInt(cedula.charAt(9));
    let suma = 0;
  
    for (let i = 0; i < 9; i++) {
      let digito = parseInt(cedula.charAt(i)) * coeficientes[i];
      if (digito > 9) {
        digito -= 9;
      }
      suma += digito;
    }
  
    let resultado = 10 - (suma % 10);
    if (resultado === 10) {
      resultado = 0;
    }
  
    return resultado === verificador;
}
  
function obtenerProvincia(cedula) {
    let codProvincia = Number(cedula.substring(0, 2));
  
    if (codProvincia >= 1 && codProvincia <= 24) {
    
      let provincias = [
        'Azuay', 'Bolívar', 'Cañar', 'Carchi', 'Cotopaxi', 'Chimborazo', 'El Oro',
        'Esmeraldas', 'Guayas', 'Imbabura', 'Loja', 'Los Ríos', 'Manabí', 'Morona Santiago',
        'Napo', 'Pastaza', 'Pichincha', 'Tungurahua', 'Zamora Chinchipe', 'Galápagos',
        'Sucumbíos', 'Orellana', 'Santo Domingo de los Tsáchilas', 'Santa Elena'
      ];
  
      let provincia = provincias[codProvincia - 1];
  
      return provincia;
    }
}
  
let cedula = '0927946624';
if(validarCedula(cedula)){
    console.log("La cédula es válida");
    console.log("Pertenece a la provincia de: "+ obtenerProvincia(cedula));
} else {
    console.log("Cédula no válida");
}
  
  