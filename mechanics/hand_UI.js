/*

This script contains the events and the code to the UI in the hand.


*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Logica para el boton de pasar turno

const passB = document.getElementById("passB");
const ding = document.getElementById("ding");

passB.addEventListener("click", async function(){

    if (turno==1){ //si le toca al jugador

        bellTouched = true; //para temas de la IA

        console.log("He presionado el boton de turno")

        turno=0;

        comboNumber=0;
        this.src = "../sprites/UI/buttons/timbre.gif"
        await esperar(100)
        ding.play()
        await esperar(900)
        this.src = "../sprites/UI/buttons/timbre.png"
        turnoIA()
        //TTS(`HOW TO SUMMON THE CUM DEMON`)

    }

})

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Logica para pedir fichas


const contadorFichas = document.getElementById("contadorFichas");

const taptapTable = document.getElementById("taptapTable");
taptapTable.volume = 0.8;

let fichasContadas = 3;

const taptap = document.getElementById("taptap");

//Se pide ficha "golpeando la mesa 2 veces", es decir haciendo doble click en cualquier parte de la mesa.
taptap.addEventListener("dblclick", async function(){
    
    if (dadoInvisible<=10){
        taptapTable.play()

        await esperar(1000)

        sonidoSeleccion.play();

        let dadoInv = document.getElementById(`dado${dadoInvisible}`)
        // Obtener todas las clases del elemento
        const clases = dadoInv.className.split(" ");
                    
        // Obtener la última clase para saber que dado estamos seleccionando
        const ultimaClase = clases[clases.length - 1];

        dadosVisibles.push(ultimaClase)

        console.log(dadosVisibles)
        dadoInv.style = "display:block !important"

        dadoInvisible++;

        fichasContadas--

        contadorFichas.innerText = `${fichasContadas}/3`

        dadosRestantes++
        dadosInvisiblesRestantes--
        console.log(dadosVisibles)

    } else {
        console.log("No puedes pillar mas fichas!")
    }

})

//-------------------------------------------------------------------------------------------------------------------------------------------------------


//Logica de los objetos en la mesa

let objectContainer = document.getElementById("objectContainer");

objectContainer.addEventListener("click", function(){

    if (turno==1){
        let object = objectContainer.innerText;
        switch(object){
            case "demonio":
                demonLogic();
                break;
        }
    }
})


