// Primer Parcial Programacion Imperativa
// Alumno: Cristian Siles

// Ejercicio 1: 
// Desarrollar una función para cada uno de las siguientes apartados: 
// Que reciba por parámetro un número entero y retorne su doble.
function obtenerDoble(numero) {
    return (numero *numero)
}
//console.log(obtenerDoble(5));
// Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
function multiplicar(numero1,numero2) {
    return (numero1 * numero2);
}
//console.log(multiplicar(10,10));
// Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne 
// la división de ambos. 

function dividir(numero1,numero2) {
    if (numero1 !=0 && numero2 !=0) {
        return (numero1 / numero2);
    }
    else console.log("No puede ingresar un 0 como parametro");
}
//console.log(dividir(97,2));

// Ejercicio 2
// Deberás escribir un objeto literal llamado ciclista que contenga las siguientes propiedades 
// que deberás completar con tus datos:
// nombre
// apellido 
// edad
// tiene Bici (TRUE/FALSE)
let ciclista = {
    nombre:'cristian',
    apellido:'siles',
    edad:25,
    tieneBici:true
};

// 2. Teniendo en cuenta los datos del punto número 1.
// Crear una función que reciba por parámetro el objeto y retorne un string en base a las 
// siguientes condiciones : 
// si edad es mayor o igual a 18 y tiene bici  “puede competir”
//  si tiene bici y es menor a 18   “podrá competir pero con un adulto acompañante”
//  si no tiene bici “No podrá competir ” 
// *Deberás realizar la invocación de la función de forma que se pueda ver el resultado 

function puedeCompetir(objeto) {
    let veredicto = '';
    if (ciclista.edad >= 18 && ciclista.tieneBici) {
        veredicto = 'puede competir';
    }
    else if (ciclista.edad < 18 && ciclista.tieneBici) {
        veredicto = 'podra competir pero con un adulto responsable';
    }
    else if (!ciclista.tieneBici) {
        veredicto = 'No podrá competir';
    }
    return veredicto;
}
//console.log(puedeCompetir(ciclista));

// Ejercicio 3:
// 1)Crear un array VACÍO llamado competidores.
let competidores = [];
// 2)Dados estos tres objetos	 
let competidor1 = {
    nombre: 'Juan',
    edad: 42,
    kilometrosRecorridos: 80,
    }

let competidor2 = {
    nombre: 'Sofia',
    edad: 22,
    kilometrosRecorridos: 90
    }
let competidor3 = {
    nombre: 'Maria',
    edad: 45,
    kilometrosRecorridos: 70
    }

// 2.a)Agregarlos al array. (utilizando un método JS, pensa cual podrías utilizar)
competidores.push(competidor1,competidor2,competidor3);
// 2.b)Mostrar por consola el array para ver que contenga esos objetos.
console.log(competidores);
// 3)Crea una función que reciba el array competidores como parámetro, e incremente en 100 
// la cantidad de kilómetros recorridos de cada uno de los competidores, 
// llámala competencia100Km .
// * Debes utilizar alguna estructura de repetición vista en la materia.

function competencia100Km(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].kilometrosRecorridos += 100;        
    }
    return array;
}
//  4)Mostrar por consola el array de competidores antes y después de la ejecución de la función.
console.log(competidores);
console.log(competencia100Km(competidores));
