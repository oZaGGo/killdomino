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
    objectBox.style = "display: block";
    await esperar(1150);
    boxFall.play();
    boxFall2.play();
    await esperar(200);
    objectBox.src = `../sprites/UI/box/caixa19.png`;
    objectBox.style.pointerEvents = "auto"
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
        await esperar(500);
        let n = 0;
        TTS("Pick an item...")
        let objectApear = document.getElementById('objectApear');
        for (object of objects) {
            object.className = `${selectedObjects[n]}`;
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
            switch (this.className) {
                case "luck":
                    objectContainer.innerText = "luck";

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';

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

                    

                    break;
                case "demon":
                    objectContainer.innerText = "demon";

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';

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

                    
                    break;
                case "coin":
                    objectContainer.innerText = "coin";

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';

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

                    
                    break;
                case "blank":
                    objectContainer.innerText = "blank";

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';

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

                    
                    break;
                case "lastBurn":
                    objectContainer.innerText = "lastBurn";

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';

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

                    
                    break;
                case "mirror":
                    objectContainer.innerText = "mirror";

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';

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

                    
                    break;
                case "magnetic":
                    objectContainer.innerText = "magnetic";

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';

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

                    
                    break;
                case "tedTalk":
                    objectContainer.innerText = "tedTalk";

                    filterScreen.style = 'display: none !important;';
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';

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
                    break;
                default:
                    console.log("No object selected")
                    break;
            }
        })
    }
}