let dados = [11,12,13,14,15,16,22,23,24,25,26,33,34,35,36,44,45,46,55,56,66] //todos los dados disponibles

// Mezclar la lista usando el algoritmo de Fisher-Yates
for (let i = dados.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  // Intercambiar elementos
  [dados[i], dados[j]] = [dados[j], dados[i]];
}

// Seleccionar los primeros 10 elementos de la lista mezclada
let dadosSeleccionados = dados.slice(0, 10);

console.log(dadosSeleccionados)


let dadoSeleccionado = "";

const contenedor = document.getElementById('contenedor'); //contenedor de los dados

let dadosMano = 10; //cantidad de dados en la mano

let dadosJugados = 0; //cantidad de dados jugados

let desplazamientoManoJugada = -430; //en px, son 215 por es lo que ocupa una pieza en horizontal

let caraNecesaria = 4; //cara necesaria para poner el dado correcto (pongo 1 por defecto para hacer tests)


const sonidoSeleccion = document.getElementById('sonidoSeleccion');

const sonidoCreacion = document.getElementById('sonidoCreacionDados');

const sonidoErrorDado = document.getElementById('sonidoErrorDado');

const atmos = document.getElementById('atmos');

const bmusic = document.getElementById('bmusic');

sonidoErrorDado.volume = 0.2;

sonidoCreacion.volume = 0.2;

atmos.volume = 0.05;

atmos.loop = true;

bmusic.loop = true;

bmusic.volume = 0.1;

atmos.play();
bmusic.play();
sonidoCreacion.play();

//Renderizar la mano
dadosSeleccionados.forEach((dado,index) => {

    if (index<7) {
        const img = document.createElement('img');
        img.src = `sprites/dados/dado${dado}.png`;
        img.alt = dado;
        img.className = `dado dado${(index % 10) + 1} ${dado}`;  // Asignar clases
        img.draggable = false;
        contenedor.appendChild(img);
    }else{
        const img = document.createElement('img');
        img.src = "sprites/domino.png";
        img.alt = dado;
        img.className = `dado dado${(index % 10) + 1} ${dado}`;  // Asignar clases
        img.draggable = false;
        img.style = "display: none;";
        contenedor.appendChild(img);
    }
    
});

//Crear sistema de turnos contra la IA

let turno = 0; //0 es turno de la IA y 1 es turno del jugador

let primerTurno = true; //Para simbolizar un supuesto "primer turno"

setTimeout(() => {
    if (primerTurno==true) {
    

        // Mezclamos los dados
        for (let i = dados.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [dados[i], dados[j]] = [dados[j], dados[i]];
        }
      
        // La IA selecciona el primer dado
        let dadoSeleccionadoIA = dados.slice(0, 1);
    
        console.log("La IA ha seleccionado: " + dadoSeleccionadoIA)
        const manoJugadaIA = document.getElementById('manoJugada');
    
        const resultadoJugadaIA = document.createElement('img');
    
        resultadoJugadaIA.src = `sprites/dados_h/hdado${dadoSeleccionadoIA}.png`;
    
        resultadoJugadaIA.className = `dadoJugado ${dadoSeleccionadoIA}`;
    
        manoJugadaIA.appendChild(resultadoJugadaIA);
    
        manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
        manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`    
        dadosJugados++;
        desplazamientoManoJugada = desplazamientoManoJugada - 430
    
        sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
        sonidoSeleccion.play();
    
        let cifra2IA = dadoSeleccionadoIA % 10;
    
        caraNecesaria = cifra2IA
    
    }    
}, 1000);




// Seleccionar todas las imágenes con la clase "dado"
const imagenes = document.querySelectorAll(".dado");

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

