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

let dadosMano = 10;

let dadosJugados = 0;

let desplazamientoManoJugada = -430; //en px, son 215 por es lo que ocupa una pieza en horizontal


const sonidoSeleccion = document.getElementById('sonidoSeleccion');

const sonidoCreacion = document.getElementById('sonidoCreacionDados');

sonidoCreacion.volume = 0.2;
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


// Seleccionar todas las imágenes con la clase "dado"
const imagenes = document.querySelectorAll(".dado");

// Recorrer cada imagen y agregarle el evento de click
imagenes.forEach(function(imagen) {
    imagen.addEventListener("click", function() {

        sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
        sonidoSeleccion.play();

        // Obtener todas las clases del elemento
        const clases = this.className.split(" ");
        
        // Obtener la última clase
        const ultimaClase = clases[clases.length - 1];

        dadoSeleccionado = ultimaClase;

        const manoJugada = document.getElementById('manoJugada');

        const resultadoJugada = document.createElement('img');

        resultadoJugada.src = `sprites/dados_h/hdado11.png`;

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
        

        
    });
});

