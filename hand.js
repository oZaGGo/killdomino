const dados = ["dado1","dado2","dado3","dado4","dado5","dado6","dado7","dado8","dado9","dado10"] //dados

let dadoSeleccionado = "";

const contenedor = document.getElementById('contenedor'); //contenedor de los dados

let dadosMano = 10;

let dadosJugados = 0;

let desplazamientoManoJugada = -430; //en px, son 215 por es lo que ocupa una pieza en horizontal


const sonidoSeleccion = document.getElementById('sonidoSeleccion');

//Renderizar la mano
dados.forEach((dado,index) => {

    if (index<7) {
        const img = document.createElement('img');
        img.src = "sprites/domino.png";
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

        resultadoJugada.src = `sprites/domino.png`;

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

