/* let numVentas = parseInt(prompt("Total de ventas?"))

let totalVentas = 0

for (let i = 1; i <= numVentas; i++){

  let ventaIndividual = parseInt(prompt("Venta número " + i));

  totalVentas += ventaIndividual

}

console.log(totalVentas) */

/* 
const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]

let dia = prompt("Dime un dia").toLowerCase();

let resto = dias.indexOf(dia)

if (resto % 7 < 5 && resto >= 0) {
  console.log("laboral") 
} else if (resto < 0) {
  console.log("Error en dia")
} else {
  console.log("Festivo")
} */


const password = "test123"
const intentosTotales = 3
let intento = 0

for (let i = 1; i <= intentosTotales; i++) {

  let passUsuario = prompt("Introduce la contraseña")

  if (passUsuario == password) {
    console.log("Enhorabuena")
    break;
  }
  if (i == intentosTotales) {
    console.log("contraseña equivocada");
  }
}
