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


/* const password = "test123"
const intentosTotales = 3

for (let i = 1; i <= intentosTotales; i++) {

  let passUsuario = prompt("Introduce la contraseña")

  if (passUsuario == password) {
    console.log("Enhorabuena")
    break;
  }
  if (i == intentosTotales) {
    console.log("contraseña equivocada");
  }
} */

//13

/* let valor1 = parseInt(prompt("Primer número"));
let valor2 = parseInt(prompt("Segundo número"));

let operacion = prompt("Operación")

switch (operacion) {
  case "+":
    alert(valor1 + valor2);
    break; 
  case "-":
    alert(valor1 - valor2);
    break; 
  case "*":
    alert(valor1 * valor2);
    break; 
  case "/":
    alert(valor1 / valor2);
    break; 
  case "^":
    alert(valor1 ** valor2);
    break; 
  case "%":
    alert(valor1 % valor2);
    break; 
} */

/* 
Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo.
Pediremos al usuario que figura queremos calcular su área y según lo introducido
pedirá los valores necesarios para calcular el área. Para ello has de crear un método
por cada figura para calcular cada área, este devolverá un número real. Muestra el
resultado por consola.
Aquí te mostramos que necesita cada figura:
• Circulo: (radio^2)*PI
• Triangulo: (base * altura) / 2
• Cuadrado: lado * lado
 */


let figura = prompt("Dime una figura").toLowerCase();


const CalculaCirculo = () => {
  let radio = parseInt(prompt("Dime el Radio"))

  return (radio ** 2) * Math.PI
}


const CalculaCuadrado = () => {
  let lado = parseInt(prompt("Dime el lado"))

  return (lado ** 2);
}


const CalculaTriangulo = () => {
  let base = parseInt(prompt("Dime la base"))
  let altura = parseInt(prompt("Dime la altura"))

  return base * altura / 2
}


switch (figura) {
  case "circulo":
    console.log(`Área del círculo => ${CalculaCirculo()}`)
    break;
  case "triangulo":
    console.log(`Área del triángulo => ${CalculaTriangulo()}`);
    break;
  case "cuadrado":
    console.log(`Área del cuadrado => ${CalculaCuadrado()}`);
    break;
  default:
    console.log("Figura equivocada")
    break;

}