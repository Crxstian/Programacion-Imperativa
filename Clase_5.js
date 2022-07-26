const prompt = require("prompt-sync")({ sigint: true });

/*Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

let pulgada = prompt ('Ingresa las pulgadas: ')
function convertir(pulgada) {
    return pulgada * 2.54
}

console.log(convertir(pulgada));

/*Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”
let name = prompt('Ingrese nombre: ')
function url(name) {
    return 'http:/www.' + name + '.com'
}
console.log(url(name));

/*Crear una función que recibe un string y devuelve la misma frase pero con
admiración.
let frase = prompt('Ingrese frase: ')
function admiracion(frase) {
    return frase + '!'
}
console.log(admiracion(frase));
/*Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos
let edad = prompt('Ingrese edad: ')
function perro(edad) {
    return edad * 7
}
console.log(perro(edad));
/*Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.
let hora = prompt( 'Ingresa salario: ')
function calculo (hora){
    return hora / 40
}
console.log(calculo(hora));

/*Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.

let peso = prompt('Ingresa peso: ')
let altura = prompt('Ingresa altura: ')
function IMC(peso,altura) {
    return peso / (altura * altura)
    
}
console.log(IMC(peso,altura))

/*Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.
Investigá qué hace el método de strings .toUpperCase()

let min = prompt('Ingrese palabra: ')
function mayuscula (min){
    return min.toUpperCase()
}
console.log(mayuscula(min))

/*Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro.
Pista: te servirá revisar qué hace la palabra reservada typeof.
9.

let parametro = prompt ('Ingrese parametro: ')
function dato (parametro){
    return typeof (parametro)
}
console.log(dato(parametro))*/

/*Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.*/

let radio = prompt ('Ingrese radio: ')
function circunferencia(radio) {
    return 2*Math.PI*radio
}
console.log(circunferencia(radio))