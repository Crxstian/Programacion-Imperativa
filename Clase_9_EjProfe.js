const prompt = require("prompt-sync")({ sigint: true });


// let NOTA1 = 10;
// let NOTA2 = 10;
// let NOTA3 = 10;
// console.log("EL promedio de la nota es: "+(NOTA1 + NOTA2 + NOTA3)/3);

// let pesos = prompt('Ingrese pesos Argentinos: ');
// console.log('Son: $'+(pesos*199)+' Dolares');


// Hacer un programa que calcule el salario de un empleado, 
// si se descuenta el 20% de su salario actual.
// function calcularSalario(){
//     let salario = prompt('Ingrese salario: ');
//     let salarioNuevo = salario* 0.80;
//     return (console.log(salarioNuevo))
// }
// calcularSalario();


//Hacer un programa para calcular el promedio de 3 notas; 
//si el promedio es mayor que 10.5 mostrar aprobado, de lo contrario, mostrar desaprobado.
// function promedio(N1,N2,N3){
//     return ((N1+N2+N3)/3);
// }

// function aprobados(a,b,c){
//     promedio(a,b,c) > 10.5 ? console.log('Aprobado'): console.log('Desaprobado')
// }
// aprobados(0,5,3);

//Ingresar un número y mostrar si es número par o impar. 
// function par_impar(numero){
//     if(numero%2 !==0){
//         console.log('Es Impar')
//     }
//     else console.log('Es Par')
// }

// par_impar(11);

// Elaborar un programa que simule una clave de acceso. 
// Si el usuario es: "ADMIN" y la clave "123456" mostrar el mensaje "ACCESO PERMITIDO". 
// Caso contrario, mostrar el mensaje "ACCESO DENEGADO".

// function acceso(){
//     let usuario = prompt('Ingrese su usuario: ');
//     let clave = parseInt(prompt('Ingrese su clave: '));
//     if(usuario==='ADMIN' && clave===123456){
//         return (console.log('ACCESO PERMITIDO'))
//     }
//     else return (console.log('ACCESO DENEGADO'))
// }
// acceso();

// Elaborar un programa que permita ingresar un número entero del 1 al 12 y 
// muestre la tabla de multiplicar de dicho número.

// function crearTabla(numero) {
//     for (let i =0;i<=10;i++){
//         console.log(numero +' x '+i+' = '+(numero*i))
//     }
// }
// crearTabla(200);

//Elaborar un programa que muestre el mayor de 10 números ingresados.
// function elMayor(a,b,c,d,e,f,g,h,i,j) {
//     return console.log((Math.max(a,b,c,d,e,f,g,h,i,j)));
// }
// elMayor(100,2,3,4,5,6,7,8,9,10);


// Elaborar un programa que muestre la cantidad de 
// números pares e impares entre 10 números.
// let pares =0;
// let impar =0;
// let array = [];
// function par_impar(array){
//     for(let i=0;i<10;i++){
//         if(array[i] % 2 !== 0){
//             impar ++;
//         }
//         else pares ++;
//     }
//     console.log('Los numeros impares son: '+impar+ ' Y los numeros pares son: '+pares);
// }
// par_impar(1,2,3,4,5,6,7,8,9,10);


// Escribir un programa que, ingresando un número, imprima los números desde 1 hasta ese mismo.
// function imprimir(numero){
//     for(let i = 1; i <= numero;i++){
//         console.log(i)
//     }
// }
// imprimir(10);