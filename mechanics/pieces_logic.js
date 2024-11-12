/*

This script contains the logic of the pieces played. You can add your own pieces here and make the mod u want :)

FOR MODERS!

If u want to do a mod to this game is so easy. U have to put the sprite of ur piece in the "sprites" folder and put a name for the sprite with this format:

1) For vertical sprite: dado{number of the top face + number of the bottom face + a character to indentify ur piece in the .js file}.png or gif(for animation).
2) For horizontal sprite: the same but with an H as a first char, like "hdado12t.gif" for example.

After implementing the sprites u have to go to the switch on this code and insert the case of ur piece and make the code.

Ah! And one last thing... U have to put the name of ur pieces on the "global_variables.js" in the array "dados"

Some notes:

"cifra1" is the first number of the piece, "cifra2" is the second and "cifra3" is the type of the piece.

"caraNecesaria" is the face that u require to continue the input sequence.


The code is pretty simple but thats my help for u.

Thx for keeping the game alive! 



*/

const { sin } = require("three/webgpu");

//Funcion debounce para evitar que se hagan varias llamadas a la vez
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

async function piecesLogic() {

    // Seleccionar todas las imágenes con la clase "dado"
    const imagenes = document.querySelectorAll(".dado");

    //Extraer el sonido de error en caso de seleccioanr un dado erroneo
    const sonidoErrorDado = document.getElementById('sonidoErrorDado');

    sonidoErrorDado.volume = 0.2;

    const dragSound = document.getElementById('dragSound');
    dragSound.volume = 0.5;



    // Recorrer cada imagen y agregarle el evento de click
    imagenes.forEach(function (imagen) {
        imagen.addEventListener("click", debounce(async function () {


            // Obtener todas las clases del elemento
            const clases = this.className.split(" ");
            // Obtener la última clase para saber que dado estamos seleccionando
            const ultimaClase = clases[clases.length - 1];
            dadoSeleccionado = ultimaClase;
            const manoJugada = document.getElementById('manoJugada');
            const resultadoJugada = document.createElement('img');
            console.log(dadosVisibles)


            if (dadoSeleccionado.length < 3 && turno == 1) {

                turno = 0

                let cifra1 = dadoSeleccionado[0];
                let cifra2 = dadoSeleccionado[1];

                if (cifra1 == caraNecesaria) { //la primera cara es la que vale

                    caraNecesaria = parseInt(cifra2)
                    contenedor.style.pointerEvents = "none";

                    resultadoJugada.src = `../sprites/dados_h/hdado${dadoSeleccionado}.png`;

                    resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                    manoJugada.appendChild(resultadoJugada);


                    this.remove();

                    sonidoSeleccion.currentTime = 0;
                    sonidoSeleccion.play();

                    //Quitar la pieza seleccionada de las piezas visibles ya que va a ser destruida de la mano
                    let index = dadosVisibles.indexOf(`${cifra1 + cifra2}`);
                    if (index !== -1) {
                        dadosVisibles.splice(index, 1);
                    }


                    contenedor.style.gridTemplateColumns = `repeat(${dadosMano - 1}, 1fr)`
                    manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosMano--;
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld
                    dadosRestantes--
                    turno = 1
                    contenedor.style.pointerEvents = "auto";



                } else if (cifra2 == caraNecesaria) { //la segunda cara es la que vale

                    caraNecesaria = parseInt(cifra1)
                    contenedor.style.pointerEvents = "none";

                    resultadoJugada.src = `../sprites/dados_h/hdado${dadoSeleccionado}.png`;

                    resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;
                    resultadoJugada.style.transform = `scale(2.1) scaleX(-1)`;

                    manoJugada.appendChild(resultadoJugada);


                    this.remove();

                    sonidoSeleccion.currentTime = 0;
                    sonidoSeleccion.play();

                    //Quitar la pieza seleccionada de las piezas visibles ya que va a ser destruida de la mano
                    let index = dadosVisibles.indexOf(`${cifra1 + cifra2}`);
                    if (index !== -1) {
                        dadosVisibles.splice(index, 1);
                    }


                    contenedor.style.gridTemplateColumns = `repeat(${dadosMano - 1}, 1fr)`
                    manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosMano--;
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld
                    dadosRestantes--
                    turno = 1
                    contenedor.style.pointerEvents = "auto";

                } else {

                    this.style.filter = "sepia(1) saturate(5) hue-rotate(-60deg)"

                    this.classList.add('vibrar');

                    sonidoErrorDado.play();
                    setTimeout(() => {
                        this.style.filter = "none"
                        this.classList.remove('vibrar');
                    }, 500);


                    turno = 1
                }


            } else if (turno == 1) {
                let cifra1 = dadoSeleccionado[0];
                let cifra2 = dadoSeleccionado[1];
                let cifra3 = dadoSeleccionado[2];
                turno = 0
                switch (cifra3) {
                    case "t":

                        //FIcha transparente

                        if (cifra1 == caraNecesaria) { //la primera cara es la que vale

                            caraNecesaria = parseInt(cifra1)
                            contenedor.style.pointerEvents = "none";

                            resultadoJugada.src = `../sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                            resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                            manoJugada.appendChild(resultadoJugada);

                            this.remove();

                            infoBox.style.opacity = "0";
                            infoBox.style.display = "none";


                            sonidoSeleccion.currentTime = 0;
                            sonidoSeleccion.play();

                            //Quitar la pieza seleccionada de las piezas visibles ya que va a ser destruida de la mano
                            let index = dadosVisibles.indexOf(`${cifra1 + cifra2 + cifra3}`);
                            if (index !== -1) {
                                dadosVisibles.splice(index, 1);
                            }

                            contenedor.style.gridTemplateColumns = `repeat(${dadosMano - 1}, 1fr)`
                            manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                            await esperar(200)
                            dragSound.currentTime = 0
                            dragSound.play();
                            manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                            dadosMano--;
                            dadosJugados++;
                            desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld
                            dadosRestantes--
                            turno = 1
                            contenedor.style.pointerEvents = "auto";


                        } else if (cifra2 == caraNecesaria) { //la segunda cara es la que vale

                            caraNecesaria = parseInt(cifra2)
                            contenedor.style.pointerEvents = "none";

                            resultadoJugada.src = `../sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                            resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;
                            resultadoJugada.style.transform = `scale(2.1) scaleX(-1)`;

                            manoJugada.appendChild(resultadoJugada);

                            this.remove();

                            infoBox.style.opacity = "0";
                            infoBox.style.display = "none";

                            sonidoSeleccion.currentTime = 0;
                            sonidoSeleccion.play();

                            //Quitar la pieza seleccionada de las piezas visibles ya que va a ser destruida de la mano
                            let index = dadosVisibles.indexOf(`${cifra1 + cifra2 + cifra3}`);
                            if (index !== -1) {
                                dadosVisibles.splice(index, 1);
                            }

                            contenedor.style.gridTemplateColumns = `repeat(${dadosMano - 1}, 1fr)`
                            manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                            await esperar(200)
                            dragSound.currentTime = 0
                            dragSound.play();
                            manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                            dadosMano--;
                            dadosJugados++;
                            desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld
                            dadosRestantes--
                            turno = 1
                            contenedor.style.pointerEvents = "auto";

                        } else {

                            this.style.filter = "sepia(1) saturate(5) hue-rotate(-60deg)"

                            this.classList.add('vibrar');

                            sonidoErrorDado.play();
                            setTimeout(() => {
                                this.style.filter = "none"
                                this.classList.remove('vibrar');
                            }, 500);

                            contenedor.style.pointerEvents = "auto";
                            turno = 1
                        }
                        break;
                    case "f":

                        //Ficha de fuego

                        fireHover.pause();
                        contenedor.style.pointerEvents = "none";

                        //La ficha de fuego se puede usar con cualquier cara
                        turno = 0

                        caraNecesaria = parseInt(cifra2)

                        resultadoJugada.src = `../sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                        resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                        manoJugada.appendChild(resultadoJugada);

                        this.remove();

                        infoBox.style.opacity = "0";
                        infoBox.style.display = "none";

                        sonidoSeleccion.currentTime = 0;
                        sonidoSeleccion.play();

                        //Quitar la pieza seleccionada de las piezas visibles ya que va a ser destruida de la mano
                        let index1 = dadosVisibles.indexOf(`${cifra1 + cifra2 + cifra3}`);
                        if (index1 !== -1) {
                            dadosVisibles.splice(index1, 1);
                        }

                        contenedor.style.gridTemplateColumns = `repeat(${dadosMano - 1}, 1fr)`
                        manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                        await esperar(200)
                        dragSound.currentTime = 0
                        dragSound.play();
                        manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                        dadosMano--;
                        dadosJugados++;
                        desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld
                        dadosRestantes--

                        if (dadosRestantes >= 1 && dadosVisibles.length >= 1) {
                            burn()
                        }


                        //Logica para quemar una ficha aleatoria de la mano

                        async function burn() { // Uso una funcion asincrona para poder esperar para el efecto, esto lo uso en muchas otras partes del codigo


                            await esperar(1200)

                            let fireBurn = document.getElementById("fireBurn")
                            fireBurn.currentTime = 0
                            fireBurn.volume = 0.4
                            fireBurn.play()
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

                        break;
                    case "n":

                        //Ficha iman negativo

                        magneticHover.pause();

                        //Solo se puede usar con impares

                        if (parseInt(caraNecesaria) % 2 != 0) {
                            contenedor.style.pointerEvents = "none";
                            caraNecesaria = parseInt(cifra2)

                            resultadoJugada.src = `../sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                            resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                            manoJugada.appendChild(resultadoJugada)

                            this.remove();

                            infoBox.style.opacity = "0";
                            infoBox.style.display = "none";

                            sonidoSeleccion.currentTime = 0;
                            sonidoSeleccion.play();

                            //Quitar la pieza seleccionada de las piezas visibles ya que va a ser destruida de la mano
                            let index = dadosVisibles.indexOf(`${cifra1 + cifra2 + cifra3}`);
                            if (index !== -1) {
                                dadosVisibles.splice(index, 1);
                            }

                            contenedor.style.gridTemplateColumns = `repeat(${dadosMano - 1}, 1fr)`
                            manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                            await esperar(200)
                            dragSound.currentTime = 0
                            dragSound.play();
                            manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                            dadosMano--;
                            dadosJugados++;
                            desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld
                            dadosRestantes--
                            turno = 1
                            contenedor.style.pointerEvents = "auto";

                        } else {

                            this.style.filter = "sepia(1) saturate(5) hue-rotate(-60deg)"

                            this.classList.add('vibrar');

                            sonidoErrorDado.play();
                            setTimeout(() => {
                                this.style.filter = "none"
                                this.classList.remove('vibrar');
                            }, 500);
                            contenedor.style.pointerEvents = "auto";
                            turno = 1
                        }
                        break;
                    case "p":

                        //Ficha iman positivo

                        magneticHover.pause();
                        contenedor.style.pointerEvents = "none";

                        //Solo se puede usar con pares

                        if (parseInt(caraNecesaria) % 2 == 0) {
                            caraNecesaria = parseInt(cifra2)

                            resultadoJugada.src = `../sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                            resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                            manoJugada.appendChild(resultadoJugada);

                            this.remove();

                            infoBox.style.opacity = "0";
                            infoBox.style.display = "none";

                            sonidoSeleccion.currentTime = 0;
                            sonidoSeleccion.play();

                            //Quitar la pieza seleccionada de las piezas visibles ya que va a ser destruida de la mano
                            let index = dadosVisibles.indexOf(`${cifra1 + cifra2 + cifra3}`);
                            if (index !== -1) {
                                dadosVisibles.splice(index, 1);
                            }

                            contenedor.style.gridTemplateColumns = `repeat(${dadosMano - 1}, 1fr)`
                            manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                            await esperar(200)
                            dragSound.currentTime = 0
                            dragSound.play();
                            manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                            dadosMano--;
                            dadosJugados++;
                            desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld
                            dadosRestantes--
                            turno = 1
                            contenedor.style.pointerEvents = "auto";

                        } else {

                            this.style.filter = "sepia(1) saturate(5) hue-rotate(-60deg)"

                            this.classList.add('vibrar');

                            sonidoErrorDado.play();
                            setTimeout(() => {
                                this.style.filter = "none"
                                this.classList.remove('vibrar');
                            }, 500);

                            contenedor.style.pointerEvents = "auto";
                            turno = 1
                        }
                        break;
                    case "e":

                        //Ficha tnt

                        tntHover.pause();
                        contenedor.style.pointerEvents = "none";
                        resultadoJugada.src = `../sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                        resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                        manoJugada.appendChild(resultadoJugada);

                        this.remove();

                        infoBox.style.opacity = "0";
                        infoBox.style.display = "none";

                        sonidoSeleccion.currentTime = 0;
                        sonidoSeleccion.play();

                        //Quitar la pieza seleccionada de las piezas visibles ya que va a ser destruida de la mano
                        let index2 = dadosVisibles.indexOf(`${cifra1 + cifra2 + cifra3}`);
                        if (index2 !== -1) {
                            dadosVisibles.splice(index2, 1);
                        }


                        contenedor.style.gridTemplateColumns = `repeat(${dadosMano - 1}, 1fr)`
                        manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                        await esperar(200)
                        dragSound.currentTime = 0
                        dragSound.play();
                        manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                        dadosMano--;
                        dadosJugados++;
                        desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld
                        dadosRestantes--

                        //Secuencia de explosion
                        tntHover.volume = 1;
                        tntHover.currentTime = 0;
                        tntHover.play();
                        await esperar(2500)
                        let tntBurn = document.getElementById("tntBurn")
                        tntBurn.volume = 0.4
                        tntBurn.play()
                        tntHover.pause();

                        //Eliminarse a si misma

                        let dadoQuemado = manoJugada.getElementsByClassName(`${dadoSeleccionado}`)
                        dadoQuemado[0].remove()

                        //Eliminar todas las piezas de la mano menos 1

                        for (let i = 0; i < dadosRestantes - 1; i++) {
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

                            dadosRestantes--
                            dadosMano--
                        }
                        manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados - 1}, minmax(${minmax}px, 1fr))`
                        desplazamientoManoJugada = desplazamientoManoJugada + desplazamientoManoJugadaOld
                        manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`

                        turno = 1
                        contenedor.style.pointerEvents = "auto";
                        break;
                    case "c":

                        //Ficha de cerveza

                        let bottleDing = document.getElementById("bottleDing")
                        bottleDing.volume = 0.6
                        bottleDing.currentTime = 0
                        bottleDing.play()

                        contenedor.style.pointerEvents = "none";

                        this.remove();

                        contenedor.style.gridTemplateColumns = `repeat(${dadosMano - 1}, 1fr)`
                        
                        infoBox.style.opacity = "0";
                        infoBox.style.display = "none";


                        //Quitar la pieza seleccionada de las piezas visibles ya que va a ser destruida de la mano
                        let index3 = dadosVisibles.indexOf(`${cifra1 + cifra2 + cifra3}`);
                        if (index3 !== -1) {
                            dadosVisibles.splice(index3, 1);
                        }

                        await esperar(1000)

                        //Quitar tapon

                        let corkPop = document.getElementById("corkPop")
                        corkPop.volume = 0.2
                        corkPop.currentTime = 0
                        corkPop.play()

                        await esperar(1000)

                        //Beber

                        let drink = document.getElementById("drink")

                        drink.volume = 0.6
                        drink.currentTime = 0
                        drink.play()

                        await esperar(300)
                        const turbulence = document.getElementById('turbulence');
                        const displacement = document.getElementById('displacement');

                        for (let i = 0; i < 5; i++) {
                            turbulence.setAttribute('baseFrequency', `0.0${i}`);
                            await esperar(200);
                        }
                        for (let i = 5; i > 0; i--) {
                            turbulence.setAttribute('baseFrequency', `0.0${i}`);
                            await esperar(300);
                        }
                        turbulence.setAttribute('baseFrequency', `0`)
                        await esperar(500)

                        //Añadir dinero al jugador

                        let singleCoinSound = document.getElementById("singleCoinSound")
                        singleCoinSound.volume = 0.9
                        singleCoinSound.currentTime = 0
                        singleCoinSound.play()

                        let hpGain = document.getElementById("hpGain")

                        let vidaJugador = document.getElementById("vidaJugador");

                        hpGain.textContent = `+${Math.floor(playerHP/6)}$`

                        hpGain.classList.add("fadeOut")
                        await esperar(1000);
                        hpGain.classList.remove("fadeOut")
                        hpGain.textContent = "";

                        //Añadir una ficha aleatoria a la mano jugada

                        const manoJugadaIA = document.getElementById('manoJugada');
    
                        const resultadoJugadaIA = document.createElement('img');

                        segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                        fichaResultante = 10 + segundaCaraFichaIA

                        caraNecesaria = segundaCaraFichaIA


                        resultadoJugadaIA.src = `../sprites/dados_h/hdado${fichaResultante}.png`;
                    
                        resultadoJugadaIA.className = `dadoJugado h${fichaResultante}`;
                    
                        manoJugadaIA.appendChild(resultadoJugadaIA);
                        sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                        sonidoSeleccion.play();
                        manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(${minmax}px, 1fr))`
                        await esperar(200)
                        dragSound.currentTime=0
                        dragSound.play();
                        manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`    
                        dadosJugados++;
                        desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld

                        //Vida resultante del jugador
                        playerHP=playerHP+Math.floor(playerHP/6)
    
                        vidaJugador.textContent = `CASH ${playerHP}$`;
                        vidaJugador.classList.add("vibrarHpLoss")
                        await esperar(200);
                        vidaJugador.classList.remove("vibrarHpLoss")
                        await esperar(1000);
                
                        dadosMano--;
                        dadosJugados++;
                        dadosRestantes--
                        turno = 1
                        contenedor.style.pointerEvents = "auto";
                        break;
                    default:
                        console.log("Algo ha salido mal al comparar las fichas especiales!")
                        break;
                }
            }
            checkIfRoundWin();
            win();
            turno = 1

        }, 160));
    });

}
