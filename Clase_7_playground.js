/*let dia = 'jueves'
function finDeSemana (dia) {	
	switch(dia){
		case 'viernes':
			console.log('buen finde');
			break;
		case 'lunes':
			console.log('buena semana');
			break;
		default:
			console.log('dia incorrecto');
	}
}*/
/*--------------- Ejercicio TotalAPagar-----------------
let vehiculo = prompt("Hola Que vehículo? ");
let litrosConsumidos = prompt ("Cuantos litros? ");
añadir = 50;
añadirMayor = 25;
function totalAPagar(vehiculo, litrosConsumidos){
    switch (vehiculo) {
        case "coche":
            if (litrosConsumidos <= 25){
            console.log("Tu vehiculo es un coche el Total a Pagar $" + (( litrosConsumidos * 86) + añadir));
            } else if (litrosConsumidos >= 25){
            console.log("Tu vehiculo es un coche el Total a Pagar $" + (( litrosConsumidos * 86) + añadirMayor ));
            }
        break;
        case "moto":
            if (litrosConsumidos <= 25){
                console.log("Tu vehiculo es una moto el Total a Pagar $" + (( litrosConsumidos * 70) + añadir));
                } else if (litrosConsumidos >= 25){
                console.log("Tu vehiculo es una moto el Total a Pagar $" + (( litrosConsumidos * 70) + añadirMayor ));
                }
            break;
        case "autobús", "autobus":
            if (litrosConsumidos <= 25){
                console.log("Tu vehiculo es un autobús el Total a Pagar $" + (( litrosConsumidos * 70) + añadir));
                } else if (litrosConsumidos >= 25){
                console.log("Tu vehiculo es un autobús Total a Pagar $" + (( litrosConsumidos * 70) + añadirMayor ));
                }
            break;
        default:
            console.log("Disculpe, no tenemos tarifa para este tipo de vehículo.");
            break;
    }
}
totalAPagar(vehiculo, litrosConsumidos); */

/*-------------------Ejercicio Sandwicheria-------------------
function totalAPagar(base,pan,queso,tomate,lechuga,cebolla,mayonesa,mostaza){
	let precioTotal = 0;
// Base 
switch (base) {
    case "pollo":
        precioTotal += 150;
        break;
    case "carne":
        precioTotal += 200;
        break;
    case "veggie":
        precioTotal += 100;
        break;
    default:
        break;
}
// Pan
switch (pan) {
    case "blanco":
        precioTotal += 50;
        break;
    case "negro":
        precioTotal += 60;
        break;
    case "gluten":
        precioTotal += 75;
        break;
    default:
        break;
}
//Adicionales
if (queso){ precioTotal += 20;}
if (tomate){ precioTotal += 15;}
if (lechuga){ precioTotal += 10;}
if (cebolla){ precioTotal += 15;}
if (mayonesa){ precioTotal += 5;}
if (mostaza){ precioTotal += 5;}
	return (console.log("El total a Pagar es: $"+precioTotal));
}
totalAPagar('pollo','blanco',1,1,1,1,1,1); */

/*--------------Ejercicio Numero Secreto----------------------
function numeroSecreto(num){
	let numeroRandom = Math.ceil(Math.random()*10);
	if(num== numeroRandom){
		return (console.log('Felicitaciones, ah encontrado el numero secreto'))
	}
	else{
		return(console.log('Sigue intentandolo, El numero ingresado es :'+num+' y el numero secreto es :'+numeroRandom));
	}
	
	
}
numeroSecreto(5); */

/*---------------------Ejercicio Paracaidas----------------------------
function abrirParacaidas(velocidad,altura){
	if (velocidad<100 &&((altura>=2000)&&(altura<3000))) {
		return console.log('Abra el paracaidas')
	}
	else{ return console.log('No Abra el paracaidas')}
}
abrirParacaidas(99,2000); */


function menciona (texto,palabra){
    if(texto.indexOf(palabra)!=-1){
        return true;
    }
    
    else return false;
}

console.log(menciona('hola como estan','dsadsa'));

