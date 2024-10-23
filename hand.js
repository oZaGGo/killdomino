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
        
        // Obtener la última clase
        const ultimaClase = clases[clases.length - 1];

        dadoSeleccionado = parseInt(ultimaClase);

        //--------------------

        let cifra2 = dadoSeleccionado % 10;
        
        let cifra1  = Math.floor(dadoSeleccionado/10);


        //--------------------

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

    });
});