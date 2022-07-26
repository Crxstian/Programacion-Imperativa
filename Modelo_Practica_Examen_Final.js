/* ----------------------------------------------------------------------------------- */

//Ejercicio 1:
/* 
Crear una matriz de 4 x 2
Crear una función que sume todos los valores de la fila 2
Crear una función que sume todos los valores de la columna 1 que sean múltiplos de 3
Crear una función que guarde todos los valores pares de la matriz en un array y todos los impares en otro
*/


let matriz = [[1,2],
              [3,4], 
              [5,6],
              [6,8],
              [9,10]    
];
function sumarFila2(matrix) {
  let suma = 0;
  for (let j = 0; j < matrix[1].length; j++) {
    suma += matrix[1][j];
  }
  return suma;
}
//console.log(sumarFila2(matriz));
function sumarCol1MultiploDe2(matrix) {
  let suma = 0;
  for (let j = 0; j < matrix.length; j++) {
    if (matrix[j][0]%3 ===0 ) {
      suma += matrix[j][0];
    }    
  }
  return suma;
}
//console.log(sumarCol1MultiploDe2(matriz));

let arrayPares = [];
let arrayImpares = [];
function guardarEnArrays(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]%2 == 0) {
          arrayPares.push(matrix[i][j]);
        }
        else arrayImpares.push(matrix[i][j]);

      }
    }
    return arrayImpares;
}
//console.table(guardarEnArrays(matriz));

//Ejercicio 2:
/* 
Desarrollar una función que reciba por parámetro él array de cervezas y ordene de forma ascendente según su ibu
Desarrollar una función que reciba por parámetro él array de cervezas y ordene de forma descendente según su nombre
*/

let cervezas = [
  {
    nombre: "ipa",
    ibu: 40,
    aroma: "intensa",
    artesanal: true,
  },
  {
    nombre: "golden",
    ibu: 28,
    aroma: "ligero",
    artesanal: false,
  },
  {
    nombre: "amber",
    ibu: 15,
    aroma: "frutada",
    artesanal: true,
  },
  {
    nombre: "scotish",
    ibu: 30,
    aroma: "suave",
    artesanal: true,
  },
];
function ordenarIbu(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].ibu > arr[j + 1].ibu) {
        let temporal = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temporal;
      }
    }
  }
  return arr;
}
//console.log(ordenarIbu(cervezas));

function ordenarPorNombre(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].nombre > arr[j + 1].nombre) {
        let temporal = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temporal;
      }
    }
  }
  return arr;
}
//console.log(ordenarPorNombre(cervezas));



//Ejercicio 3:
/* Nuevo Arreglo
    Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. 
    Ejemplo: 
    nuevoArreglo(5) debe retornar [1,2,3,4,5] 
    nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
     */

//para completar

function nuevoArreglo(number) {
  let newArray = [];
  for (let i = 1; i <= number; i++) {
    newArray.push(i)
  }
  return newArray;
}
//console.table(nuevoArreglo(10));

/* 
  - newArray[i] = i + 1; 
  - newArray.splice(i);
  - newArray.push(i);
  - newArray(i) = i + 1;
   */

/* Sumatoria
    Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la 
    sumatoria de todos sus números anteriores, incluso ese mismo. 
    Ejemplo: 
    sumattion(3) debe retornar 6 por que hace (1 +2 +3) 
    sumattion(8) debe retornar 36
     */

//para completar

function sumattion(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {   
    sum += i;
  }
  return sum;
}
//console.log(sumattion(8));
/* 
    -  for (let element in number){}
    -  for (let i = 1; i > number; i++){}
    -  for (let i = 0; i < number; i++){} 
    -  for(let j = 0 ; i < number.length; i++){}
    */

//Ejercicio 4:
/* Arreglo de objetos
  Debés crear una función llamada `arregloDeObjetos` que reciba un número como
  parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor`
  que contenga el valor del número y sus anteriores.
  Ejemplo:
  - arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4},
  {valor: 5}]
  - arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]*/

let arregloDeObjet = [];
  function arregloDeObjetos(num) {
    for (let i = 1; i <= num; i++) {
      arregloDeObjet.push({valor: i});
    }
    return arregloDeObjet;
  }
console.log(arregloDeObjetos(3));