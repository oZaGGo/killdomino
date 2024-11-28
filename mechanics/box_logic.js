/*

This script contains the logic behind every object i nthe game.


*/


//Demon

async function demonLogic() {
    let demonChange = document.getElementById("demonChange");
    demonChange.volume = 0.6;

    const imagenes = document.querySelectorAll(".dado");
    for (imagen of imagenes) {
        if (imagen.style.display != "none") {
            demonChange.currentTime = 0;
            demonChange.play();
            imagen.src = `../sprites/dados/dado66.png`;
            imagen.className = `dado 66`;
            await esperar(350);
        }
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Funcion para mezclar los objetos

function obtenerTresAleatorios(arr) {
    let mezclados = arr.sort(() => Math.random() - 0.5); // Barajar el array
    return mezclados.slice(0, 3); // Tomar los primeros tres elementos
}


async function boxLogic() {

    //Desplazar dados mano jugada
    const manoJugadaIA = document.getElementById('manoJugada');
    dragSound.currentTime = 0
    dragSound.play();
    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada - screenX}px`

    let objectBox = document.getElementById("objectBox");
    let boxFall = document.getElementById("boxFall");
    let boxFall2 = document.getElementById("boxFall2");
    let boxOpen = document.getElementById("boxOpen");
    let boxDestroyed = document.getElementById("boxDestroyed");
    boxFall.volume = 0.6;
    boxFall2.volume = 0.4;
    objectBox.style.pointerEvents = "none"
    objectBox.src = "../sprites/UI/box/caixacaendo.png"
    objectBox.style = "display: block";
    await esperar(1150);
    boxFall.play();
    boxFall2.play();
    await esperar(200);
    objectBox.src = `../sprites/UI/box/caixa19.png`;
    await esperar(100);
    objectBox.style.pointerEvents = "auto"
    TTS("Pick an item...")
    objectBox.addEventListener("click", async function () {

        objectBox.src = `../sprites/UI/box/caixabrindose.png`;
        boxOpen.play();
        await esperar(730);
        objectBox.src = `../sprites/UI/box/caixa30.png`;
        const filterScreen = document.getElementById('filterScreen');
        filterScreen.style = 'display: block !important;';
        await esperar(500);
        let objectsContainer = document.getElementById('objectsContainer');
        objectsContainer.style = 'display: flex !important;';
        let objects = document.querySelectorAll('.objects');
        let selectedObjects = obtenerTresAleatorios(objetos);
        console.log(selectedObjects);
        await esperar(500);
        let n = 0;
        let objectApear = document.getElementById('objectApear');
        for (object of objects) {
            object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
            object.src = ``;
        }
        await esperar(100);
        for (object of objects) {
            object.style = "display: block !important;";
            object.id = `${selectedObjects[n]}`;
            object.src = `../sprites/objects/${selectedObjects[n]}.png`;
            objectApear.currentTime = 0;
            objectApear.play();
            object.style = 'display: block !important;';
            await esperar(500);
            n++
        }

    })

    let objectContainer = document.getElementById('objectContainer');

    let objects = document.querySelectorAll('.objects');

    for (object of objects) {
        object.addEventListener("click", async function () {
            const filterScreen = document.getElementById('filterScreen');
            switch (this.id) {
                case "luck":
                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`

                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("luck");

                    objectContainer.src = `../sprites/objects/luck.png`;

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();
                    handReset();

                    break;
                case "demon":
                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                    
                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("demon");

                    objectContainer.src = `../sprites/objects/demon.png`;

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();
                    handReset();

                    break;
                case "coin":
                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`

                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("coin");

                    objectContainer.src = `../sprites/objects/coin.png`;

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();
                    handReset();
                    
                    break;
                case "blank":                
                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`

                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("blank");

                    objectContainer.src = `../sprites/objects/blank.png`;

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();
                    handReset();
                    
                    break;
                case "lastBurn":
                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`

                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("lastburn");

                    objectContainer.src = `../sprites/objects/lastburn.png`;

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();
                    handReset();
                    
                    break;
                case "mirror":
                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`

                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("mirror");

                    objectContainer.src = `../sprites/objects/mirror.png`;

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();
                    handReset();
                    
                    break;
                case "magnetic":
                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`

                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("magnetic");

                    objectContainer.src = `../sprites/objects/magnetic.png`;

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();
                    handReset();
                    
                    break;
                case "tedTalk":
                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();
                    handReset();

                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`

                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("tedtalk");

                    objectContainer.src = `../sprites/objects/tedtalk.png`;

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    break;
                default:
                    console.log("No object selected")
                    break;
            }
        })
    }
}