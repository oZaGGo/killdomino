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

//Funcion debounce para evitar que se hagan varias llamadas a la vez
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
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
    imagenes.forEach(function(imagen) {
        imagen.addEventListener("click",debounce(async function() {
            
            
            // Obtener todas las clases del elemento
            const clases = this.className.split(" ");         
            // Obtener la última clase para saber que dado estamos seleccionando
            const ultimaClase = clases[clases.length - 1];
            dadoSeleccionado = ultimaClase;
            const manoJugada = document.getElementById('manoJugada');
            const resultadoJugada = document.createElement('img');

            console.log("El dado seleccionado es: " + dadoSeleccionado)

            console.log(dadosVisibles)
            

            if (dadoSeleccionado.length<3 && turno==1){

                turno=0

                let cifra1 = dadoSeleccionado[0];
                let cifra2 = dadoSeleccionado[1];
                
                if (cifra1==caraNecesaria) { //la primera cara es la que vale

                    caraNecesaria = parseInt(cifra2)

                    resultadoJugada.src = `sprites/dados_h/hdado${dadoSeleccionado}.png`;

                    resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                    manoJugada.appendChild(resultadoJugada);

                    console.log("El dado seleccionado es: " + dadoSeleccionado)

                    this.remove();

                    sonidoSeleccion.currentTime = 0;
                    sonidoSeleccion.play();

                    //Quitar la propia pieza seleccionada
                    let index = dadosVisibles.indexOf(`${cifra1+cifra2}`);
                    if (index !== -1) {
                        dadosVisibles.splice(index, 1);
                    }

                    
                    contenedor.style.gridTemplateColumns = `repeat(${dadosMano-1}, 1fr)`
                    manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime=0
                    dragSound.play();
                    manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosMano--;
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430
                    dadosRestantes--
                    turno=1

                    

                } else if (cifra2==caraNecesaria) { //la segunda cara es la que vale

                    caraNecesaria = parseInt(cifra1)

                    resultadoJugada.src = `sprites/dados_h/hdado${dadoSeleccionado}.png`;

                    resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;
                    resultadoJugada.style.transform = "scaleX(-1)";

                    manoJugada.appendChild(resultadoJugada);

                    console.log("El dado seleccionado es: " + dadoSeleccionado)

                    this.remove();

                    sonidoSeleccion.currentTime = 0;
                    sonidoSeleccion.play();

                    //Quitar la propia pieza seleccionada
                    let index = dadosVisibles.indexOf(`${cifra1+cifra2}`);
                    if (index !== -1) {
                        dadosVisibles.splice(index, 1);
                    }

                    
                    contenedor.style.gridTemplateColumns = `repeat(${dadosMano-1}, 1fr)`
                    manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime=0
                    dragSound.play();
                    manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosMano--;
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430
                    dadosRestantes--
                    turno=1

                } else {

                    this.style.filter = "sepia(1) saturate(5) hue-rotate(-60deg)"

                    this.classList.add('vibrar');

                    sonidoErrorDado.play();
                    setTimeout(() => {
                        this.style.filter = "none"
                        this.classList.remove('vibrar');
                    }, 500);
                    
                    console.log("Esa ficha no vale!")
                    turno=1
                }


            } else if(turno==1){
                let cifra1 = dadoSeleccionado[0];
                let cifra2 = dadoSeleccionado[1];
                let cifra3 = dadoSeleccionado[2];
                turno=0
                switch(cifra3){
                    case "t":
                            
                        if (cifra1==caraNecesaria) { //la primera cara es la que vale

                            caraNecesaria = parseInt(cifra1)

                            resultadoJugada.src = `sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                            resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                            manoJugada.appendChild(resultadoJugada);

                            console.log("El dado seleccionado es: " + dadoSeleccionado)

                            this.remove();

                            infoBox.style.opacity = "0";
                            infoBox.style.display = "none";

    
                            sonidoSeleccion.currentTime = 0;
                            sonidoSeleccion.play();

                            //Quitar la propia pieza seleccionada
                            let index = dadosVisibles.indexOf(`${cifra1+cifra2+cifra3}`);
                            if (index !== -1) {
                                dadosVisibles.splice(index, 1);
                            }

    
                            
                            contenedor.style.gridTemplateColumns = `repeat(${dadosMano-1}, 1fr)`
                            manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                            await esperar(200)
                            dragSound.currentTime=0
                            dragSound.play();
                            manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                            dadosMano--;
                            dadosJugados++;
                            desplazamientoManoJugada = desplazamientoManoJugada - 430
                            dadosRestantes--
                            turno=1
                           

                        } else if (cifra2==caraNecesaria) { //la segunda cara es la que vale

                            caraNecesaria = parseInt(cifra2)

                            resultadoJugada.src = `sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                            resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;
                            resultadoJugada.style.transform = "scaleX(-1)";

                            manoJugada.appendChild(resultadoJugada);

                            console.log("El dado seleccionado es: " + dadoSeleccionado)

                            this.remove();

                            infoBox.style.opacity = "0";
                            infoBox.style.display = "none";

    
                            sonidoSeleccion.currentTime = 0;
                            sonidoSeleccion.play();

                            //Quitar la propia pieza seleccionada
                            let index = dadosVisibles.indexOf(`${cifra1+cifra2+cifra3}`);
                            if (index !== -1) {
                                dadosVisibles.splice(index, 1);
                            }

    
                            
                            contenedor.style.gridTemplateColumns = `repeat(${dadosMano-1}, 1fr)`
                            manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                            await esperar(200)
                            dragSound.currentTime=0
                            dragSound.play();
                            manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                            dadosMano--;
                            dadosJugados++;
                            desplazamientoManoJugada = desplazamientoManoJugada - 430
                            dadosRestantes--
                            turno=1

                        } else {

                            this.style.filter = "sepia(1) saturate(5) hue-rotate(-60deg)"

                            this.classList.add('vibrar');

                            sonidoErrorDado.play();
                            setTimeout(() => {
                                this.style.filter = "none"
                                this.classList.remove('vibrar');
                            }, 500);
                            
                            console.log("Esa ficha no vale!")
                            turno=1
                        }
                        break;
                    case "f":

                        fireHover.pause();
                        contenedor.style.pointerEvents = "none";

                        //La ficha de fuego se puede usar con cualquier cara
                        turno=0

                        caraNecesaria = parseInt(cifra2)

                        resultadoJugada.src = `sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                        resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                        manoJugada.appendChild(resultadoJugada);

                        console.log("El dado seleccionado es: " + dadoSeleccionado)

                        this.remove();

                        infoBox.style.opacity = "0";
                        infoBox.style.display = "none";
                        

                        sonidoSeleccion.currentTime = 0;
                        sonidoSeleccion.play();

                        //Quitar la propia pieza seleccionada
                        let index = dadosVisibles.indexOf(`${cifra1+cifra2+cifra3}`);
                        if (index !== -1) {
                            dadosVisibles.splice(index, 1);
                        }


                        
                        contenedor.style.gridTemplateColumns = `repeat(${dadosMano-1}, 1fr)`
                        manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                        await esperar(200)
                        dragSound.currentTime=0
                        dragSound.play();
                        manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                        dadosMano--;
                        dadosJugados++;
                        desplazamientoManoJugada = desplazamientoManoJugada - 430
                        dadosRestantes--

                        if(dadosRestantes>=1){
                            burn()
                        }


                        //Logica para quemar una ficha aleatoria de la mano

                        async function burn() { // Uso una funcion asincrona para poder esperar para el efecto, esto lo uso en muchas otras partes del codigo
                            
    
                            await esperar(1200)

                            let fireBurn = document.getElementById("fireBurn")
                            fireBurn.currentTime=0
                            fireBurn.volume=0.4
                            fireBurn.play()
                            await esperar(100)

                            // Mezclar la lista usando el algoritmo de Fisher-Yates
                            for (let i = dadosVisibles.length - 1; i > 0; i--) {
                                let j = Math.floor(Math.random() * (i + 1));
                                // Intercambiar elementos
                                [dadosVisibles[i], dadosVisibles[j]] = [dadosVisibles[j], dadosVisibles[i]];
                            }

                            let dadoAQuemar = dadosVisibles.slice(0,1)

                            //Quitar el dado quemado de la lista de dados visibles
                            index = dadosVisibles.indexOf(`${dadoAQuemar}`);
                            if (index !== -1) {
                                dadosVisibles.splice(index, 1);
                            }

                            console.log("El dado a quemar es: " + dadoAQuemar)

                            let dadoQuemado = document.getElementsByClassName(`${dadoAQuemar}`)

                            dadoQuemado[0].remove()
                            
                            turno=1

                            dadosRestantes--
                            checkIfRoundWin();
                            win();
                            contenedor.style.pointerEvents = "auto"; 
                        }

                        break;
                    case "n":
                        magneticHover.pause();

                        //Solo se puede usar con impares
                        
                        if (parseInt(caraNecesaria)%2!=0) {
                            caraNecesaria = parseInt(cifra2)
                        
                            resultadoJugada.src = `sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                            resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                            manoJugada.appendChild(resultadoJugada);

                            console.log("El dado seleccionado es: " + dadoSeleccionado)

                            this.remove();

                            infoBox.style.opacity = "0";
                            infoBox.style.display = "none";

    
                            sonidoSeleccion.currentTime = 0;
                            sonidoSeleccion.play();

                            //Quitar la propia pieza seleccionada
                            let index = dadosVisibles.indexOf(`${cifra1+cifra2+cifra3}`);
                            if (index !== -1) {
                                dadosVisibles.splice(index, 1);
                            }
     
                            contenedor.style.gridTemplateColumns = `repeat(${dadosMano-1}, 1fr)`
                            manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                            await esperar(200)
                            dragSound.currentTime=0
                            dragSound.play();
                            manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                            dadosMano--;
                            dadosJugados++;
                            desplazamientoManoJugada = desplazamientoManoJugada - 430
                            dadosRestantes--
                            turno=1
                        }else {

                            this.style.filter = "sepia(1) saturate(5) hue-rotate(-60deg)"

                            this.classList.add('vibrar');

                            sonidoErrorDado.play();
                            setTimeout(() => {
                                this.style.filter = "none"
                                this.classList.remove('vibrar');
                            }, 500);
                            
                            console.log("Esa ficha no vale!")
                            turno=1
                        }
                        break;
                    case "p":
                        magneticHover.pause();

                        //Solo se puede usar con pares
                        
                        if (parseInt(caraNecesaria)%2==0) {
                            caraNecesaria = parseInt(cifra2)

                            resultadoJugada.src = `sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                            resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                            manoJugada.appendChild(resultadoJugada);

                            console.log("El dado seleccionado es: " + dadoSeleccionado)

                            this.remove();

                            infoBox.style.opacity = "0";
                            infoBox.style.display = "none";

    
                            sonidoSeleccion.currentTime = 0;
                            sonidoSeleccion.play();

                            //Quitar la propia pieza seleccionada
                            let index = dadosVisibles.indexOf(`${cifra1+cifra2+cifra3}`);
                            if (index !== -1) {
                                dadosVisibles.splice(index, 1);
                            }
                         
                            contenedor.style.gridTemplateColumns = `repeat(${dadosMano-1}, 1fr)`
                            manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                            await esperar(200)
                            dragSound.currentTime=0
                            dragSound.play();
                            manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                            dadosMano--;
                            dadosJugados++;
                            desplazamientoManoJugada = desplazamientoManoJugada - 430
                            dadosRestantes--
                            turno=1
                        }else {

                            this.style.filter = "sepia(1) saturate(5) hue-rotate(-60deg)"

                            this.classList.add('vibrar');

                            sonidoErrorDado.play();
                            setTimeout(() => {
                                this.style.filter = "none"
                                this.classList.remove('vibrar');
                            }, 500);
                            
                            console.log("Esa ficha no vale!")
                            turno=1
                        }
                        break;                
                    default:
                        console.log("Algo ha salido mal al comparar las fichas especiales!")
                        break;    
                }
            }
            
            console.log(dadosVisibles)
            console.log(dadosRestantes)
            checkIfRoundWin();
            win();
            turno=1

        },160));
    });
    
}
