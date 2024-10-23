function piecesLogic() {

    // Seleccionar todas las imágenes con la clase "dado"
    const imagenes = document.querySelectorAll(".dado");

    //Extraer el sonido de error en caso de seleccioanr un dado erroneo
    const sonidoErrorDado = document.getElementById('sonidoErrorDado');

    sonidoErrorDado.volume = 0.2;


    // Recorrer cada imagen y agregarle el evento de click
    imagenes.forEach(function(imagen) {
        imagen.addEventListener("click", function() {
            
            // Obtener todas las clases del elemento
            const clases = this.className.split(" ");
                    
            // Obtener la última clase para saber que dado estamos seleccionando
            const ultimaClase = clases[clases.length - 1];

            dadoSeleccionado = ultimaClase;

            if (dadoSeleccionado.length<3){


                let cifra1 = dadoSeleccionado[0];
                let cifra2 = dadoSeleccionado[1];
                
                if (cifra1==caraNecesaria) { //la primera cara es la que vale

                    caraNecesaria = cifra2

                    const manoJugada = document.getElementById('manoJugada');

                    const resultadoJugada = document.createElement('img');

                    resultadoJugada.src = `sprites/dados_h/hdado${dadoSeleccionado}.png`;

                    resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                    manoJugada.appendChild(resultadoJugada);

                    console.log("El dado seleccionado es: " + dadoSeleccionado)

                    this.remove();
                    
                    contenedor.style.gridTemplateColumns = `repeat(${dadosMano-1}, 1fr)`
                    manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosMano--;
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430

                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();

                } else if (cifra2==caraNecesaria) { //la segunda cara es la que vale

                    caraNecesaria = cifra1

                    const manoJugada = document.getElementById('manoJugada');

                    const resultadoJugada = document.createElement('img');

                    resultadoJugada.src = `sprites/dados_h/hdado${dadoSeleccionado}.png`;

                    resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;
                    resultadoJugada.style.transform = "scaleX(-1)";

                    manoJugada.appendChild(resultadoJugada);

                    console.log("El dado seleccionado es: " + dadoSeleccionado)

                    this.remove();
                    
                    contenedor.style.gridTemplateColumns = `repeat(${dadosMano-1}, 1fr)`
                    manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosMano--;
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430

                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();

                } else {

                    this.style.filter = "sepia(1) saturate(5) hue-rotate(-60deg)"

                    this.classList.add('vibrar');

                    sonidoErrorDado.play();
                    setTimeout(() => {
                        this.style.filter = "none"
                        this.classList.remove('vibrar');
                    }, 500);
                    
                    console.log("Esa ficha no vale!")
                }


            } else{
                let cifra1 = dadoSeleccionado[0];
                let cifra2 = dadoSeleccionado[1];
                let cifra3 = dadoSeleccionado[2];

                switch(cifra3){
                    case "t":
                            
                        if (cifra1==caraNecesaria) { //la primera cara es la que vale

                            caraNecesaria = cifra1

                            const manoJugada = document.getElementById('manoJugada');

                            const resultadoJugada = document.createElement('img');

                            resultadoJugada.src = `sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                            resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;

                            manoJugada.appendChild(resultadoJugada);

                            console.log("El dado seleccionado es: " + dadoSeleccionado)

                            this.remove();
                            
                            contenedor.style.gridTemplateColumns = `repeat(${dadosMano-1}, 1fr)`
                            manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                            manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                            dadosMano--;
                            dadosJugados++;
                            desplazamientoManoJugada = desplazamientoManoJugada - 430

                            sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                            sonidoSeleccion.play();

                        } else if (cifra2==caraNecesaria) { //la segunda cara es la que vale

                            caraNecesaria = cifra2

                            const manoJugada = document.getElementById('manoJugada');

                            const resultadoJugada = document.createElement('img');

                            resultadoJugada.src = `sprites/dados_h/hdado${dadoSeleccionado}.gif`;

                            resultadoJugada.className = `dadoJugado ${dadoSeleccionado}`;
                            resultadoJugada.style.transform = "scaleX(-1)";

                            manoJugada.appendChild(resultadoJugada);

                            console.log("El dado seleccionado es: " + dadoSeleccionado)

                            this.remove();
                            
                            contenedor.style.gridTemplateColumns = `repeat(${dadosMano-1}, 1fr)`
                            manoJugada.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                            manoJugada.style.marginLeft = `${desplazamientoManoJugada}px`
                            dadosMano--;
                            dadosJugados++;
                            desplazamientoManoJugada = desplazamientoManoJugada - 430

                            sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                            sonidoSeleccion.play();

                        } else {

                            this.style.filter = "sepia(1) saturate(5) hue-rotate(-60deg)"

                            this.classList.add('vibrar');

                            sonidoErrorDado.play();
                            setTimeout(() => {
                                this.style.filter = "none"
                                this.classList.remove('vibrar');
                            }, 500);
                            
                            console.log("Esa ficha no vale!")
                        }
                        break;    
                    default:
                        console.log("Algo ha salido mal al comparar las fichas especiales!")
                        break;    
                }
            }

        });
    });
    
}
