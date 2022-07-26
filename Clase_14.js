const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
// Obtener en un nuevo array las edades menores a 18.
// Obtener en un nuevo array las edades mayor o igual a 18.
// Obtener en un nuevo array las edades igual a 18.
// Obtener el menor.
// Obtener el mayor. 
// Obtener el promedio de edades.
// Incrementar en 1 todas las edades.
let edadesMenores = [];
function menores(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<18) {
            edadesMenores.push(arr[i]);
        }        
    }
    return edadesMenores;
}
//console.log(menores(edades));
let edadesMayores = [];
function mayores(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>18) {
            edadesMayores.push(arr[i]);
        }        
    }
    return edadesMayores;
}
//console.log(mayores(edades));
let edadesIguales = [];
function iguales(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===18) {
            edadesIguales.push(arr[i]);
        }        
    }
    return edadesIguales;
}
//console.log(iguales(edades));

let elMayor = Math.max(...edades);
//console.log(elMayor);

let elMenor = Math.min(...edades);
//console.log(elMenor);

function promedio(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
        
    }
    return (suma/arr.length)
}
//console.log(promedio(edades));

function incrementarUno(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
                    
    }
    return arr;
    }
//console.log(incrementarUno(edades));
//------------------------------------------------------------------------------------------

const arrayCuentas = [
    {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: "$3,253.40",
    edadTitular: 33,
    tipoCuenta: "sueldo",
    },
    {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: "$3,229.45",
    edadTitular: 27,
    tipoCuenta: "sueldo",
    },
    {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: "$1,360.19",
    edadTitular: 34,
    tipoCuenta: "corriente",
    },
    {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: "$3,627.12",
    edadTitular: 30,
    tipoCuenta: "sueldo",
    },
    {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: "$1,616.52",
    edadTitular: 34,
    tipoCuenta: "sueldo",
    },
    {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: "$1,408.68",
    edadTitular: 25,
    tipoCuenta: "corriente",
    },
];
// ----------------------Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
let cuentasEdadMenoraTreinta = [];
function objetosMenores(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].edadTitular < 30) {
            cuentasEdadMenoraTreinta.push(arr[i]);
        }        
    }
    return cuentasEdadMenoraTreinta;
}
//console.log(objetosMenores(arrayCuentas));
// ----------------------Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
let cuentasEdadMayorIgualaTreinta = [];
function objetosMayoresigualesaTreinta(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].edadTitular >= 30) {
            cuentasEdadMayorIgualaTreinta.push(arr[i]);
        }        
    }
    return cuentasEdadMayorIgualaTreinta;
}
//console.log(objetosMayoresigualesaTreinta(arrayCuentas));
// ----------------------Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
let cuentasEdadDieciocho = [];
function objetosIgualTreinta(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].edadTitular == 30) {
            cuentasEdadMenoraTreinta.push(arr[i]);
        }        
    }
    return cuentasEdadMenoraTreinta;
}
//console.log(objetosIgualTreinta(arrayCuentas));

// --------------------Obtener la cuenta con el titular de la misma más joven.
function titularJoven(arr) {
    let masJoven = arr[0].edadTitular;
    let objetoPosicion =0;
        for (let i = 0; i < arr.length; i++) {
        if (arr[i].edadTitular<masJoven) {
            masJoven = arr[i].edadTitular;
            objetoPosicion =i;
        }
    }
    return arr[objetoPosicion];
}
// console.log(titularJoven(arrayCuentas));


// Obtener un nuevo array por cada tipo de cuenta.



// ------------------Obtener un nuevo array con las cuentas habilitadas.

function cuentasHabilitadas(arr) {
    let nuevoArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].estaHabilitada) {
            nuevoArray.push(arr[i]);
        }        
    }
    return nuevoArray;
}
//console.log(cuentasHabilitadas(arrayCuentas));

// -------------------Obtener un nuevo array con las cuentas deshabilitadas.7

function cuentasDeshabilitadas(arr) {
    let nuevoArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].estaHabilitada) {
            nuevoArray.push(arr[i]);
        }        
    }
    return nuevoArray;
}
//console.log(cuentasDeshabilitadas(arrayCuentas));

// --------------------Obtener la cuenta con el menor saldo.
function menorSaldo(arr) {
    let saldoMenor = arr[0].saldo;
    let objetoPosicion =0;
        for (let i = 0; i < arr.length; i++) {
        if (arr[i].saldo<saldoMenor) {
            saldoMenor = arr[i].saldo;
            objetoPosicion =i;
        }
    }
    return arr[objetoPosicion];
}
//console.log(menorSaldo(arrayCuentas));

// ---------------------Obtener la cuenta con el mayor saldo.

function mayorSaldo(arr) {
    let saldoMayor = arr[0].saldo;
    let objetoPosicion =0;
        for (let i = 0; i < arr.length; i++) {
        if (arr[i].saldo>saldoMayor) {
            saldoMayor = arr[i].saldo;
            objetoPosicion =i;
        }
    }
    return arr[objetoPosicion];
}
//console.log(mayorSaldo(arrayCuentas));



// ------------------DESAFIO    --------------------


// Del siguiente array de “ceros” tenemos un intruso, carácter que no es
// “cero” (cero entre comillas)
// nuestro trabajo será desarrollar una función que lo detecte
// reemplazando por un “cero” y retorna él índice que se encontraba él
// intruso
let ceros = ['0', '0', '0', '0', '0', 'O', '0', '0', '0'];
function detectarIntruso(arr) {
    let indice = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !=='0') {
            arr[i] = '0';
            indice = i;
        }
        
    }
    return indice;
}
//console.log(detectarIntruso(ceros));
//console.log(ceros);

// Ahora tenemos un caso similar, solo que esta vez tenemos más de un intruso
//nuestro trabajo será crear una función que los reemplace por ceros y
//retorna un array con las posiciones que se encontraban estos

let ceros2 = ['0', '0', '0', '0', '0', 'O', '0', '0', 'O', '0', 'O'];
function detectarVariosIntrusos(arr) {
    let indice = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !=='0') {
            arr[i] = '0';
            indice.push(i)
        }
        
    }
    return indice;
}
console.log(detectarVariosIntrusos(ceros2));
console.log(ceros2);


