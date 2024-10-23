//-------------------------------------------------------------------------------------------------------------------------------------------------------


//Logica para el boton de pasar turno

const passB = document.getElementById("passB");

passB.addEventListener("click", function(){

    if (turno==1){ //si le toca al jugador

        console.log("He presionado el boton de turno")

        turno=0;

        turnoIA()

    }

})

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Logica del boton para pedir fichas

const giveMeButton = document.getElementById("giveMeButton");

const contadorFichas = document.getElementById("contadorFichas");

let fichasContadas = 3;

giveMeButton.addEventListener("click", function(){
    

    if (dadoInvisible<=10){

        let dadoInv = document.getElementById(`dado${dadoInvisible}`)

        dadoInv.style = "display:block !important"

        dadoInvisible++;

        fichasContadas--

        contadorFichas.innerText = `${fichasContadas}/3`

    } else {
        console.log("No puedes pillar mas fichas!")
    }

})

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Logica destras de la seleccion de los dados jugados

piecesLogic()