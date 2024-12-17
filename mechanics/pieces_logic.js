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

let { sin } = require("three/webgpu");

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
    let imagenes = document.querySelectorAll(".dado");

    //Extraer el sonido de error en caso de seleccioanr un dado erroneo
    let sonidoErrorDado = document.getElementById('sonidoErrorDado');

    sonidoErrorDado.volume = 0.2;

    let dragSound = document.getElementById('dragSound');
    dragSound.volume = 0.5;



    // Recorrer cada imagen y agregarle el evento de click
    imagenes.forEach(function (imagen) {
        imagen.addEventListener("click", debounce(async function () {


            // Obtener todas las clases del elemento
            let clases = this.className.split(" ");
            // Obtener la última clase para saber que dado estamos seleccionando
            let ultimaClase = clases[clases.length - 1];
            dadoSeleccionado = ultimaClase;
            let manoJugada = document.getElementById('manoJugada');
            let resultadoJugada = document.createElement('img');
            console.log(dadosVisibles)


            if (dadoSeleccionado.length < 3 && turno == 1) {

                turno = 0

                let cifra1 = dadoSeleccionado[0];
                let cifra2 = dadoSeleccionado[1];

                if (cifra1 == caraNecesaria || blankFace == true) { //la primera cara es la que vale

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
                    blankFace = false
                    contenedor.style.pointerEvents = "auto";



                } else if (cifra2 == caraNecesaria || blankFace == true) { //la segunda cara es la que vale

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
                    blankFace = false
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

                        if (cifra1 == caraNecesaria || blankFace == true) { //la primera cara es la que vale

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


                        } else if (cifra2 == caraNecesaria || blankFace == true) { //la segunda cara es la que vale

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
                            await burn()
                            //Para el objeto que quema la ultima ficha
                            if (lustBurnSelected == true) {
                                lustBurnLogic()
                            }
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

                            dadoQuemado[0].classList.add('burn-effect');
                            await esperar(50)
                            dadoQuemado[0].classList.add('burn-effect-active')
                            await esperar(700)
                            dadoQuemado[0].remove()

                            turno = 1

                            dadosRestantes--
                            checkIfRoundWin();
                            
                            contenedor.style.pointerEvents = "auto";
                        }

                        break;
                    case "n":

                        //Ficha iman negativo

                        magneticHover.pause();

                        //Solo se puede usar con impares

                        if (parseInt(caraNecesaria) % 2 != 0 || blankFace == true) {
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

                        if (parseInt(caraNecesaria) % 2 == 0 || blankFace == true) {
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

                        //Eliminarse a si misma

                        let dadoQuemado = manoJugada.getElementsByClassName(`${dadoSeleccionado}`)
                        dadoQuemado[0].classList.add('burn-effect');
                        await esperar(50)
                        dadoQuemado[0].classList.add('burn-effect-active')
                        await esperar(100)
                        tntHover.pause();

                        //Animar todos los dados que aun no se han quemado con vibracion

                        let dadosImages = document.querySelectorAll('#contenedor img')

                        for (dado of dadosImages) {
                            dado.classList.add('vibrate-effect');
                            await esperar(18)
                        }

                        //Eliminar todas las piezas de la mano menos 1
                        tntBurn.play()
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
                        await esperar(500)
                        dadoQuemado[0].remove()
                        manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados - 1}, minmax(${minmax}px, 1fr))`
                        desplazamientoManoJugada = desplazamientoManoJugada + desplazamientoManoJugadaOld
                        manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`

                        turno = 1

                        dadosImages = document.querySelectorAll('#contenedor img')
                        await esperar(300)
                        for (dado of dadosImages) {
                            dado.classList.remove('vibrate-effect');
                            await esperar(18)
                        }
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

                        await esperar(600)

                        //Beber

                        let drink = document.getElementById("drink")

                        drink.volume = 0.6
                        drink.currentTime = 0
                        drink.play()

                        await esperar(1200)                       

                        //Añadir una ficha aleatoria a la mano jugada

                        let manoJugadaIA = document.getElementById('manoJugada');
    
                        let resultadoJugadaIA = document.createElement('img');

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
            
            checkIfRoundWin(); //Comprobar si se ha ganado la ronda o la apuesta

            turno = 1
            //Para el objeto que quema la ultima ficha
            if (lustBurnSelected == true) {
                lustBurnLogic()
            }

        }, 160));
    });

}
