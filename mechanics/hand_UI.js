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

        bipCounter = 1; //para resetear el contador de notas

        negativeScreen.style.display = "none"; //para quitar la pantalla negativa

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
            mirrored = true;
            objectContainer.addEventListener('mouseenter',async function mirrorA(){
                if (isHovered==false){
                    isHovered=true;
                    await esperar(300)
                    let openClick = document.getElementById("openClick");
                    openClick.play();
                    objectContainer.src =  `../sprites/objects/abrindose.png`;
                    await esperar(1030)
                    objectContainer.src =  `../sprites/objects/espello13.png`;
                    await esperar(300)
                    objectContainer.src =  `../sprites/objects/rompendose.png`;
                    await esperar(50)
                    let brokenGlass = document.getElementById("brokenGlass");
                    brokenGlass.play(); 
                    await esperar(400)
                    objectContainer.src =  `../sprites/objects/espello28.png`;
                }
            }, {once: true})
            coinEarnings = false;
            lustBurnSelected = false;
            luck = false;
            break;
        case "demon":
            objectContainer.addEventListener('click',async function demonC(){
               
                demonLogic()

            }, {once: true})
            coinEarnings = false;
            lustBurnSelected = false;
            luck = false;
            mirrored = false;
            break;
        case "blank":
            coinEarnings = false;
            lustBurnSelected = false;
            luck = false;
            mirrored = false;
            objectContainer.addEventListener('click',async function blankU(){

                let dragSound = document.getElementById('dragSound');
                dragSound.volume = 0.5;

                let manoJugada = document.getElementById('manoJugada');

                let resultadoJugada = document.createElement('img');

                if (blankUsed == false){

                    blankUsed = true; //Para que no se pueda usar mas de una vez por ronda

                    objectContainer.style = "display:none !important" //Hacer que desaparezca el objeto


                    contenedor.style.pointerEvents = "none";

                    resultadoJugada.src = `../sprites/objects/hblank.png`; //Dado en blanco

                    resultadoJugada.className = `dadoJugado blank`;

                    manoJugada.appendChild(resultadoJugada);

                    sonidoSeleccion.currentTime = 0;
                    sonidoSeleccion.play();

                    manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld
                    dadosJugados++;
                    blankFace = true;
                    contenedor.style.pointerEvents = "auto";
                }
            }, {once: true})
            break;
        case "lastburn":
            coinEarnings = false;
            lustBurnSelected = true;
            luck = false;
            mirrored = false;
            break;
        case "coin":
            coinEarnings = true;
            lustBurnSelected = false;
            luck = false;
            mirrored = false;
            break;
        case "luck":
            //Animacion al pasar el raton
            objectContainer.addEventListener('mouseenter',async function luckA(){
                if (isHovered==false){
                    objectContainer.src =  `../sprites/objects/luckHover.png`;
                    await esperar(800)
                    objectContainer.src =  `../sprites/objects/luck.png`;
                }
            }, {once: true})
            luck = true;
            coinEarnings = false;
            lustBurnSelected = false;
            mirrored = false;
            
            break;
        case "magnetic":
            objectContainer.addEventListener('click',async function magneticA(){
                if (magnetic==false){
                    magnetic = true;
                    objectContainer.src =  `../sprites/objects/magnetic_on.png`;
                    let turnOn = document.getElementById("turnOn");
                    turnOn.play();
                    let magnet = document.getElementById("magnet");
                    magnet.volume = 0.02;
                    magnet.play();
                    await esperar(520)
                    magneticLogic()
                    objectContainer.src =  `../sprites/objects/turned_on.png`;
                }
            }, {once: true})
            break;      
        default:
            coinEarnings = false;
            lustBurnSelected = false;
            luck = false;
            mirrored = false;
            break;   
    }
  
}


