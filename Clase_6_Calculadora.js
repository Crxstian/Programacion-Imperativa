var prompt = require('prompt-sync')();

//Funciones
let suma = (a,b) => {
    return a + b;
}

let restar = (a,b) => {
    return a - b;
}

let multiplicar = (a,b) => {
    return a * b;
}

let dividir = (a,b) => {
    return a / b;
}

let cuadradoDeUnNumero = (a) => {
    return multiplicar(a,a)
}

let PromedioDeTresNumeros = (a,b,c) =>{
    let x = a+b+c;
    return dividir(x,3);
}

let calcularPorcentaje = (a,b) =>{
    let x = dividir(multiplicar(a,b),100);
    return x % a;
}

let generadorDePorcentaje = (a,b) =>{
    return multiplicar(dividir(b,a),100);
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------")
//SUMA
let num1 = parseInt(prompt("Ingrese el primer digito a sumar: "));
let num2 = parseInt(prompt("Ingrese el segundo digito a sumar: "));

console.log("El resultado de la suma es: " + suma(num1,num2));
//RESTA
num1 = parseInt(prompt("Ingrese el primer digito a restar: "));
num2 = parseInt(prompt("Ingrese el segundo digito a restar: "));

console.log("El resultado de la resta es: " + restar(num1,num2));
//MULTIPLICACION
num1 = parseInt(prompt("Ingrese el primer digito a multiplicar: "));
num2 = parseInt(prompt("Ingrese el segundo digito a multiplicar: "));

console.log("El resultado de la multiplicacion es: " + multiplicar(num1,num2));
//DIVISION
num1 = parseInt(prompt("Ingrese el primer digito a dividir: "));
num2 = parseInt(prompt("Ingrese el segundo digito a dividir: "));

console.log("El resultado de la division es: " + dividir(num1,num2));

//CUADRADO DE UN NUMERO
num1 = parseInt(prompt("Ingrese el digito a elevar: "));

console.log("El cuadrado de " + num1 + " es: " + cuadradoDeUnNumero(num1));
//PROMEDIO DE TRES NUMEROS
num1 = parseInt(prompt("Ingrese el primer digito a promediar: "));
num2 = parseInt(prompt("Ingrese el segundo digito a promediar: "));
num3 = parseInt(prompt("Ingrese el tercer digito a promediar: "));

console.log("El promedio es: " + PromedioDeTresNumeros(num1,num2,num3));
//CALCULAR PORCENTAJE
num1 = parseInt(prompt("Ingrese el primer digito: "));
num2 = parseInt(prompt("Ingrese el segundo digito: "));

console.log("El " +num2+ "% de " + num1 + " es: " + calcularPorcentaje(num1,num2));
// GENERADOR DE PORCENTAJE
num1 = parseInt(prompt("Ingrese el primer digito: "));
num2 = parseInt(prompt("Ingrese el segundo digito: "));

console.log(num2+ " Es el " + generadorDePorcentaje(num1,num2) + " de " + num1);