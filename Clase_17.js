/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

// let matriz = [
//     [1,1,1,1,1],
//     [1,1,1,1,1],
//     [1,1,1,1,1],
//     [1,1,1,1,1],
//     [1,1,1,1,1],
// ];

// function sumarMatriz(matr) {
//     let suma = 0;
//     for (let i = 0; i < matr.length; i++) {
//         for (let j = 0; j < matr[i].length; j++) {
//             suma += matr[i][j]
//         }
        
//     }
//     return suma;
// }
//console.log(sumarMatriz(matriz));


// Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:

function generarMatriz() {
    let matriz = [];
    let aux = 1;
    for (let i = 0; i < 10; i++) {
        matriz[i]=[]
        for (let j = 1; j <= 10; j++) {
            matriz[i].push(aux)  
            aux ++;          
        }
    }
    return matriz;
}
generarMatriz();
//console.table(generarMatriz());


// 3) Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.

function diagonalRojo(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];       
    }
    return suma;
}
//console.log(diagonalRojo(generarMatriz()));

function diagonalVerde(matriz) {
    let suma = 0;
    for (let i = matriz.length-1; i >=0; i--) {
        suma += matriz[i][i];       
    }
    return suma;
}
console.log(diagonalVerde(generarMatriz()));