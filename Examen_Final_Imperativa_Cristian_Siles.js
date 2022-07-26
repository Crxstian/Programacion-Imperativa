//1 .
//Dado el siguiente arreglo de objetos:

let paises = [
    {
    nombre: "Argentina",
    continente: "Sudamerica",
    copaMundial: true,
    clima: "nublado"
    },
    {
    nombre: "brasil",
    continente: "Sudamerica",
    copaMundial: true,
    clima: "soleado"
    },
    {
    nombre: "venezuela",
    continente: "Sudamerica",
    copaMundial: true,
    clima: "nublado"
    },
    {
    nombre: "chile",
    continente: "Sudamerica",
    copaMundial: false,
    clima: "lluvioso"
    },
    {
    nombre: "australia",
    continente: "oceania",
    copaMundial: false,
    clima: "soleado"
    },
    {
    nombre: "nueva zelanda",
    continente: "oceania",
    copaMundial: true,
    clima: "lluvioso"
    },
    ];
//Crear una función que reciba como parámetro un arreglo de objetos, un continente, y un país. 
//La función deberá retornar un nuevo arreglo que contenga solo los países que sean del 
//continente pasado por parámetro, y además, que dicho país tenga una copaMundial.

function obtenerPaises(arreglo,continent) {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].continente == continent && arreglo[i].copaMundial) {
            nuevoArreglo.push(arreglo[i]);
        }        
    }
    return nuevoArreglo;
}
console.log(obtenerPaises(paises,'Sudamerica'));


/*2. 
Dado el siguiente array de numeros :
 */
let arrayDeNumeros = [1, 2, 3, 8, 9, 104, 5, 6, 7, 15];
/** Crear una función que reciba como parámetros el array y un string que represente el sentido de ordenamiento, 
 * la función deberá realizar un ordenamiento interno del array según el orden indicado 

“ASC” lo ordenará ascendente
“DESC” lo ordenará descendente
	
Para analizar el correcto funcionamiento imprimir por consola el array antes y después de ejecutar la función. 
 */
function ordenarArray(array, sentido) {
  if (sentido == "ASC") {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temporal = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temporal;
        }
      }
    }
  } else if (sentido == "DESC") {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] < array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
  return array;
}
console.log(arrayDeNumeros);
console.log(ordenarArray(arrayDeNumeros,'ASC'));


/** 3.
Crear una matriz de 5 x 3
Sumar todos los valores de las filas impares (considerando que la primera fila es la 0, la segunda la 1, etc)
Crear una función que recorra la columna 1 y me devuelva, por cada valor de la columna, 
un objeto con una propiedad llamada ‘número’ y que el valor sea el elemento de la matriz*/

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15]
];

function sumarFilasImpares(matrix) {
  let suma = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 == 0) {
        suma += matrix[i][j];
      }
    }
  }
  return suma;
}

console.log(sumarFilasImpares(matriz));

/**Crear una función que recorra la columna 1 y me devuelva, por cada valor de la columna, 
un objeto con una propiedad llamada ‘número’ y que el valor sea el elemento de la matriz*/ 

function retornarObjeto(matrix) {
    let arregloDeObjet = [];
    for (let j = 0; j < matrix.length; j++) {
        arregloDeObjet.push({numero: matrix[j][0]});
    }
    return arregloDeObjet;
    }
console.log(retornarObjeto(matriz));