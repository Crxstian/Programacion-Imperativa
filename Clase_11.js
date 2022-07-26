/* 
Creá un objeto con las propiedades que debe contener cada nuevo usuario que se registra en DH:
Usuario
Edad
Dirección
Fecha de nacimiento
Contraseña

let usuario = {
    usuario: 'Condorito',
    edad: 77,
    direccion: 'Calle falsa 123',
    fechaNacimiento: '2090-01-01',
    contrasenia:'12345'
}; */

// ---------------------OBJETOS LITERALES------------------
//la lista de clientes.
let arrayCuentas = [
    {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
    },
    {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
    },
    {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
    },
    {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
    },
    {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
    },
];
/*
Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);  */

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function (nombreTitular) {
      // return this.clientes.filter(
      //   (cliente) => cliente.titularCuenta === nombreTitular,
      // );
    for (let i = 0; i < this.clientes.length; i++) {
        if (this.clientes[i].titularCuenta === nombreTitular) {
        return this.clientes[i];
        }
    }
    },
    // Metodo ---------Punto 4-----------------
    deposito:function(titular, dinero){
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === titular) {
            this.clientes[i].saldoEnPesos += dinero;
            return ('Deposito Realizado , su nuevo saldo es: '+ this.clientes[i].saldoEnPesos);
            }
        }
    },
    // Metodo ---------Punto 5-----------------

    extraccion:function(titular,dinero){
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === titular) {
                this.clientes[i].saldoEnPesos -= dinero;
                return this.clientes[i].saldoEnPesos <0 ?'Fondos insuficientes': 'Extracción realizada correctamente, su nuevo saldo es: '+ this.clientes[i].saldoEnPesos;
            }
            
        }
    }

};
//console.log(banco.consultarCliente('Ramon Connell'));
//console.log(banco.deposito('Jacki Shurmer',11));
/*
4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.  
5. Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”. */
//console.log(banco.extraccion('Jacki Shurmer',32983293));


//--------------------------BONUS EXTRA!!------------------

// Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
// parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
// parámetro la propiedad que fue pasada como string.
// Ejemplo:
// let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
// propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
// propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]

let arrayBonus = [ { nombre: 'Lean', edad: 27 }, { nombre: 'Eze', edad: 49} ];

function propiedadUnica(arr1,string1){
    let arrayObjetos = [];
    for (let i = 0; i < arr1.length; i++) {
        arrayObjetos[i]= {arr1:string1}
        
    }
    return arrayObjetos;
}
propiedadUnica(arrayBonus,'edad');


// 5 -Arreglo de objetos
// Debés crear una función llamada `arregloDeObjetos` que reciba un número como
// parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor`
// que contenga el valor del número y sus anteriores.
// Ejemplo:
// - arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4},
// {valor: 5}]
// - arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]



function arregloDeObjetos (num){

    let array = []; 
    for(let i=1 ; i<=num ; i ++) {

        let objeto = {valor: i}; 
        array.push(objeto); 

    }
    return array; 

}

console.log(arregloDeObjetos(5)); 


