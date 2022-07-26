/*Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente. */
let peliculas = ['star wars','totoro','rocky','pulp fiction','la vida es bella'];

//console.log(peliculas[2]);

/*Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase(). */

    function mayusculas(movies){
        //console.log(movies)
        return( movies = movies.map(function(x){ return x.toUpperCase(); }))
    }
//console.log(mayusculas(peliculas));
//console.log(peliculas)
/*Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas. */

let peliculasAnimadas =['toy story','finding nemo','kung-fu panda','wally','fortnite'];
// [backup]= Destructuracion de arreglo, basicamente descompone los elementos de un arreglo y devuelve el valor pelado
// splice = Elimina un valor segun el indice y de ahi la cantidad que le pases como segundo parametro
function unificarArray(array1,array2) {
    const indice = array2.indexOf('fortnite');
    const[backup]= array2.splice(indice,1);
    const largoArray2 =array2.length;
    for (let i = 0; i < largoArray2; i++) {
            array1.push(array2.shift(i)) 
    }
    console.log(backup);
    return mayusculas(array1);
}
//  console.log(unificarArray(peliculas,peliculasAnimadas)); 
//let moviesUnidas = unificarArray(peliculas,peliculasAnimadas);

/* 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable. */


/*5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son iguales
o diferentes. Te confirman que están en el orden adecuado y que solo traen
valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden en
orden al del array resultante de combinar películas con películas animadas. Es
decir, el primer elemento del array de películas general corresponde al primer
elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de las
funciones y testear su correcto funcionamiento.
Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar
extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo!

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];


function compararScores(arrayAsia,ArrayEuro){
    for (let i = 0; i < arrayAsia.length; i++) {
        if (arrayAsia[i]==ArrayEuro[i]) {
            console.log(i+'° Calificacion Coinciden')
        }
        else console.log(i+'° Calificacion No coinciden')        
    }
}
compararScores(asiaScores,euroScores);

function ScoreMovie (a,c){
    for (let b = 0; b < asiaScores.length; b++) {
        console.log(a[b] + ' Puntos para ');
        console.log(c[b])
    }
}
//Prueba Mostrar Pelicula junto a su punutacion con Scores de Asia o Europa
ScoreMovie(euroScores,moviesUnidas);
*/



//--------------------------------EXTRA BONUS-------------------------------
/*1. Creá la función imprimirInverso que tome un array como argumento y que
imprima en la consola cada elemento en orden inverso (no tenés que invertir el
array). */

function imprimirInverso (arrayej){
    for (let c = arrayej.length -1 ; c >=0; c-- ){
        console.log(arrayej[c]);        
    }
}

const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

//imprimirInverso(euroScores);

/*Creá la función inversor que tome un array como argumento y devuelva uno
nuevo invertido. */

function inversor(zarray){
    let arrayInvertido = [...zarray].reverse()
    return arrayInvertido;
}

//console.log(inversor(euroScores));

/*En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
números (3 elementos) y devuelva la suma de todos ellos. Ejemplo: 
sumArray([-5,100, 19]) = 114 */
arrayDeTres = [-5,100,19];
function sumaArray(arraySum){
    return (arraySum[0]+arraySum[1]+arraySum[2])
}
//console.log(sumaArray(arrayDeTres));

/*
En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
strings de 4 elementos y simule el comportamiento del método Array.join(). 
join(["h","o","l","a"]) debe retornar el string "hola". */
let hola = ["h","o","l","a"];
let string1 = '';

function join(par){
    string1 = hola.toString()
    return string1.replace(/,/g,"");

}
console.log(join(hola));