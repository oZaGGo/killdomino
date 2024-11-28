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

async function objectsLogic() {

    let objectContainer = document.getElementById('objectContainer');

    //Extraer ultima clase de las clases del objeto

    let objectClass = objectContainer.className.split(' ').pop();

    let isHovered = false;

    switch (objectClass){
        case "mirror":
            //Quita los dados de caras iguales
            dados = ["12", "13", "14", "15", "16", "23", "24", "25", "26", "34", "35", "36", "44", "45", "46", "56", "12t","23t","34t","56t","16t","01f","02f","03f","04f","05f","06f","01n","02p","03n","04p","05n","06p","00e","00c","00c"]
            objectContainer.addEventListener('mouseenter',async function(){

                if (isHovered==false){
                    isHovered=true;
                    await esperar(300)
                    objectContainer.src =  `../sprites/objects/abrindose.png`;
                    await esperar(1050)
                    objectContainer.src =  `../sprites/objects/espello13.png`;
                    await esperar(300)
                    objectContainer.src =  `../sprites/objects/rompendose.png`;
                    await esperar(400)
                    objectContainer.src =  `../sprites/objects/espello28.png`;
                }
            })
            break;
    }
  
}


