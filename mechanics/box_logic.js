/*

This script contains the logic behind every object in the game.


*/

const { watch } = require("original-fs");


//Demon

async function demonLogic() {
    let demonChange = document.getElementById("demonChange");
    demonChange.volume = 0.6;
    objectContainer.style = "display:none !important" //Hacer que desaparezca el objeto
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

//Magnetic
async function magneticLogic() {
    let imagenes = document.querySelectorAll(".dado");
    for (imagen of imagenes) {
        // Obtener todas las clases del elemento
        let clases = imagen.className.split(" ");
        // Obtener la última clase para saber que dado estamos seleccionando
        let ultimaClase = clases[clases.length - 1];
        let dadoSeleccionado = ultimaClase;
        let manoJugada = document.getElementById('manoJugada');

        if (dadoSeleccionado.length >= 3 && imagen.style.display != "none") {
            let cifra1 = dadoSeleccionado[0];
            let cifra2 = dadoSeleccionado[1];
            let cifra3 = dadoSeleccionado[2];

            if (cifra3 == "n") {
                let indice = dadosVisibles.indexOf(`${cifra1 + cifra2 + cifra3}`);

                if (indice !== -1) { // Si se encuentra el valor
                    // Modifica el valor
                    dadosVisibles[indice] = `${cifra1}${cifra2}p`;
                } else {
                    console.log("Nombre no encontrado");
                }

                let turnOnE = document.getElementById("turnOnE");
                turnOnE.volume = 0.6;
                turnOnE.currentTime = 0;
                turnOnE.play();
                await esperar(250);
                imagen.src = `../sprites/dados/dado${cifra1}${cifra2}p.gif`;
                imagen.className = `dado ${cifra1}${cifra2}p`;

            } else if (cifra3 == "p") {
                let indice = dadosVisibles.indexOf(`${cifra1 + cifra2 + cifra3}`);
                if (indice !== -1) { // Si se encuentra el valor
                    // Modifica el valor
                    dadosVisibles[indice] = `${cifra1}${cifra2}n`;
                } else {
                    console.log("Nombre no encontrado");
                }
                let turnOnE = document.getElementById("turnOnE");
                turnOnE.volume = 0.6;
                turnOnE.currentTime = 0;
                turnOnE.play();
                await esperar(250);
                imagen.src = `../sprites/dados/dado${cifra1}${cifra2}n.gif`;
                imagen.className = `dado ${cifra1}${cifra2}n`;
            }
        }
    }
}

async function lustBurnLogic() {
    if (dadosRestantes == 1) {
        await esperar(1500);

        let fireBurn = document.getElementById("fireBurn")
        fireBurn.currentTime = 0
        fireBurn.volume = 0.4
        fireBurn.play()

        //Animacion objeto
        let objectContainer = document.getElementById('objectContainer');
        objectContainer.src = `../sprites/objects/rompendose.png`;
        await esperar(700)
        objectContainer.src = `../sprites/objects/lastBurn.png`;
        //

        await esperar(100)

        // Mezclar la lista usando el algoritmo de Fisher-Yates
        for (let i = dadosVisibles.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            // Intercambiar elementos
            [dadosVisibles[i], dadosVisibles[j]] = [dadosVisibles[j], dadosVisibles[i]];
        }

        let dadoAQuemar = dadosVisibles.slice(0, 1)

        //Quitar el dado quemado de la lista de dados visibles
        index = dadosVisibles.indexOf(`${dadoAQuemar}`);
        if (index !== -1) {
            dadosVisibles.splice(index, 1);
        }

        console.log("El dado a quemar es: " + dadoAQuemar)

        let dadoQuemado = contenedor.getElementsByClassName(`${dadoAQuemar}`)

        dadoQuemado[0].remove()

        turno = 1

        dadosRestantes--
        checkIfRoundWin();
        win();
        contenedor.style.pointerEvents = "auto";
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
    let manoJugadaIA = document.getElementById('manoJugada');
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
    await esperar(1110);
    boxFall.play();
    boxFall2.play();
    await esperar(1000);
    objectBox.src = `../sprites/UI/box/caixa19.png`;
    await esperar(300);
    objectBox.style.pointerEvents = "auto"
    TTS("Pick an item...")
    objectBox.addEventListener("click", async function () {
        objectBox.src = ``;
        objectBox.src = `../sprites/UI/box/caixabrindose.png`;
        boxOpen.play();
        await esperar(1200);
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
            if (selectedObjects[n] == "mirror") {
                object.src = `../sprites/objects/mirror1.png`;
            } else {
                object.src = `../sprites/objects/${selectedObjects[n]}.png`;
            }
            objectApear.currentTime = 0;
            objectApear.play();
            object.style = 'display: block !important;';
            await esperar(500);
            n++
        }

        objectBox.removeEventListener("click", () => { });

    }, { once: true })

    // Buscar el elemento por su ID
    let imgElement = document.getElementById('objectContainer');

    // Verificar si el elemento existe
    if (imgElement) {
        // Eliminar el elemento del DOM
        imgElement.remove();
        console.log('El elemento fue eliminado.');
    } else {
        console.log('El elemento no existe.');
    }


    // Crear el elemento img
    let objectContainer = document.createElement('img');

    // Agregar el atributo id
    objectContainer.id = 'objectContainer';

    // Agregar el atributo class
    objectContainer.className = 'objectContainer';

    document.body.appendChild(objectContainer);

    let objects = document.querySelectorAll('.objects');

    for (object of objects) {
        object.addEventListener("mouseenter", function () {
            let infoBoxObjects = document.getElementById("infoBoxObjects");
            //Mostrar la caja de descripcion
            infoBoxObjects.style.display = "block";

            switch (this.id) {
                case "luck":
                    //Empezar la transicion de la caja de descripcion
                    infoBoxObjects.style.opacity = "1";
                    infoBoxObjects.innerText = "You are lucky! (Pasive)";
                    break;
                case "demon":
                    //Empezar la transicion de la caja de descripcion
                    infoBoxObjects.style.opacity = "1";
                    infoBoxObjects.innerText = "Six steps ahead. (Active)";
                    break;
                case "coin":
                    //Empezar la transicion de la caja de descripcion
                    infoBoxObjects.style.opacity = "1";
                    infoBoxObjects.innerText = "STONKS! (Pasive)";
                    break;
                case "blank":
                    //Empezar la transicion de la caja de descripcion
                    infoBoxObjects.style.opacity = "1";
                    infoBoxObjects.innerText = "You thought we havent white pieces huh. (Active)";
                    break;
                case "lastBurn":
                    //Empezar la transicion de la caja de descripcion
                    infoBoxObjects.style.opacity = "1";
                    infoBoxObjects.innerText = "Burn the lust idiot. (Pasive)";
                    break;
                case "mirror":
                    //Empezar la transicion de la caja de descripcion
                    infoBoxObjects.style.opacity = "1";
                    infoBoxObjects.innerText = "The reflections are gone... (Pasive)";
                    break;
                case "magnetic":
                    //Empezar la transicion de la caja de descripcion
                    infoBoxObjects.style.opacity = "1";
                    infoBoxObjects.innerText = "Change the polarity. (Active)";
                    break;
                case "tedTalk":
                    //Empezar la transicion de la caja de descripcion
                    infoBoxObjects.style.opacity = "1";
                    infoBoxObjects.innerText = "A very strange piece... (Pasive)";
                    break;
                default:
                    console.log("No object hovered")
                    break;
            }
        })

        object.addEventListener('mouseleave', () => {
            infoBoxObjects.style.opacity = "0";
            infoBoxObjects.style.display = "none !important";

        });

        object.addEventListener("click", fixHandReset, { once: true });

        object.addEventListener("click", async function () {
            const filterScreen = document.getElementById('filterScreen');
            switch (this.id) {
                case "luck":


                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("luck");

                    objectContainer.src = `../sprites/objects/luck.png`;
                    await esperar(400)
                    filterScreen.style = 'display: none !important;';
                    await esperar(200)
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();

                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`


                    break;
                case "demon":


                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("demon");

                    objectContainer.src = `../sprites/objects/demon.png`;
                    await esperar(400)
                    filterScreen.style = 'display: none !important;';
                    await esperar(200)
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();

                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`


                    break;
                case "coin":


                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("coin");

                    objectContainer.src = `../sprites/objects/coin_s.png`;
                    await esperar(400)
                    filterScreen.style = 'display: none !important;';
                    await esperar(200)
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();

                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`


                    break;
                case "blank":


                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("blank");

                    objectContainer.src = `../sprites/objects/blank_s.png`;
                    await esperar(400)
                    filterScreen.style = 'display: none !important;';
                    await esperar(200)
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();

                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`


                    break;
                case "lastBurn":


                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("lastburn");

                    objectContainer.src = `../sprites/objects/lastburn.png`;
                    await esperar(400)
                    filterScreen.style = 'display: none !important;';
                    await esperar(200)
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();

                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`


                    lustBurnSelected = true;

                    break;
                case "mirror":


                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("mirror");

                    objectContainer.src = `../sprites/objects/mirror.png`;
                    await esperar(400)
                    filterScreen.style = 'display: none !important;';
                    await esperar(200)
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();

                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`


                    break;
                case "magnetic":


                    for (object of objects) {
                        object.style = 'display: none !important;'; //Desaparecer los objetos (Por si ya habia alguno)
                        object.src = ``;
                    }

                    selectedObjects = [];

                    objectContainer.classList.add("magnetic");

                    objectContainer.src = `../sprites/objects/magnetic_s.png`;
                    await esperar(400)
                    filterScreen.style = 'display: none !important;';
                    await esperar(200)
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    objectContainer.style = "display: block !important";

                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();

                    //Desplazar dados mano jugada y hacer que desaparezca la caja
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`


                    break;
                case "tedTalk":
                    //Desaparecer los objetos
                    objectsContainer.style = 'display: none !important;';
                    objectsLogic();

                    //Desplazar dados mano jugada y hacer que desaparezca la caja
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
                    await esperar(400)
                    filterScreen.style = 'display: none !important;';
                    await esperar(200)
                    objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                    await esperar(100);
                    boxDestroyed.currentTime = 0.5;
                    boxDestroyed.play();
                    await esperar(1300);
                    objectBox.style = "display: none !important";
                    objectContainer.style = "display: block !important";

                    break;
                default:
                    console.log("No object selected")
                    break;
            }
        }, { once: true })
    }
}