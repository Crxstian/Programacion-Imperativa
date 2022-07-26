// Dada una matriz, recorrer sus valores y sumar solo los números 
// que estén por encima o sean iguales a 10, pero menores que 1000.

let numeros = [ 
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4], 
    ]; 
    
    
    function sumaEntreDiez_Mil(mat) {
        let acc = 0;
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                if (mat[i][j]>=10 && mat[i][j]<1000)
                acc += mat[i][j];
            }
        }
        return acc;
    }
    
    console.log("-------");
    let total = sumaEntreDiez_Mil(numeros);
    console.log(total);
    