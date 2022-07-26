const alicia = [10, 80, 75];
const bob = [90, 20, 25];

let Concurso = {
    etapas:[],
    ganador:'',
    encontrarGanador:function (a, b) {
        let puntosPrimerParticipante = 0;
        let puntosSegundoParticipante = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i]>b[i]) {
                puntosPrimerParticipante ++;
                this.etapas.push('Primer Participante')                
            } else if(a[i]<b[i]) {
                puntosSegundoParticipante ++;
                this.etapas.push('Segundo Participante')   
            }        
        }
        const ganador = puntosPrimerParticipante > puntosSegundoParticipante
            ? "Primer Participante"
            : puntosPrimerParticipante < puntosSegundoParticipante
            ? "Segundo Participante"
            : "Ninguno";
        this.ganador = ganador;
        return ganador;
        },
    exportarResultados:function (){
        return JSON.stringify({etapas:this.etapas}) 
    }

    }

//console.log("El ganador es: " + Concurso.encontrarGanador(alicia, bob) + "participante");
//console.log(Concurso);
//console.log(Concurso.exportarResultados());

//------------------------BONUS EXTRA--------------------------------------------------------------
function digitalHouse(n1,n2){
    for (let a = 0; a <= 20; a++) {
        if (a%n1==0 && a%n2==0 ){
            console.log('Digital House');
        }
        else if (a%n1==0) {
            console.log('Digital');
        }
        else if (a%n2==0) {
            console.log('House');
        }

        else console.log(a);
        }        
    }
digitalHouse(7,7);




