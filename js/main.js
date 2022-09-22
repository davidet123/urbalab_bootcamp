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

/* 
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

} */

/* class Test  {

  constructor(texto) {
    this.texto = texto
  }

  imprimir() {
    console.log(this.texto)
  }
}

prueba1 = new Test("Hola")

prueba1.imprimir() */

// Ejercicios JS Vanilla II

// 2
/* 
let totalNumeros = parseInt(prompt("Total de valores"))
let rangoMin = parseInt(prompt("Mínimo"));
let rangoMax = parseInt(prompt("Máximo"));

const aleatorio = (max, min) => {

  return Math.floor(Math.random() * ((max + 1)  - min) + min )
}

for (let i = 0; i < totalNumeros; i++) {
  console.log(aleatorio(rangoMax, rangoMin))
} */

// 3

/* const verificarPrimo = valor => {
  for (let i = 2; i <= valor-1; i++) {
    if (valor % i == 0) {
      return(" no es primo");
    }
  }
  return(" es primo");
}
let numeroRepeticiones = parseInt(prompt("Dime un numero"))
for (let i = numeroRepeticiones; i >= 2; i--) {
  console.log(`El numero ${i + verificarPrimo(i)}`)
}

 */


/* console.log(verificarPrimo(parseInt(prompt("Dime un numero")))) */


// 4

/* 
const Factorial = valor => {
  let resultado = 1
  for(let i = 1; i <= valor; i++) {
    resultado *= i
  }

  return resultado
};

console.log(Factorial(parseInt(prompt("Dime un numero")))) */

// 5
/* const CalcularBinario = valor => {
  let valorBinario = ""
  while(valor > 0.5) {
    let  resto = (valor % 2).toString()
    valorBinario = resto + valorBinario
    valor = parseInt(valor / 2)

  }
  return valorBinario
}

console.log(CalcularBinario(17)) */

/* 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
(hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
pasando el número por parámetro devolverá el número de cifras. */

/* let valor = prompt("DIme un numero");


const NumeroCifras = val => val.toString().split("").length;


if (parseInt(valor) < 0) {
  console.log("Necesito un valor positivo");
} else {
  console.log(NumeroCifras(valor));
}
 */


