/*

This script is the point of start of the game scene.


*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Musica del juego y ambiente

const atmos = document.getElementById('atmos');

const bmusic = document.getElementById('bmusic');
atmos.volume = 0.05;

atmos.loop = true;

bmusic.loop = true;

bmusic.volume = 0.03;

atmos.play();
bmusic.play();

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Renderizar la mano randomizada y el primer dado de la partida


// Mezclar la lista usando el algoritmo de Fisher-Yates
for (let i = dados.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  // Intercambiar elementos
  [dados[i], dados[j]] = [dados[j], dados[i]];
}

// Seleccionar los primeros 10 elementos de la lista mezclada
let dadosSeleccionados = dados.slice(0, 10);

const contenedor = document.getElementById('contenedor'); //contenedor de los dados

dadosSeleccionados.forEach((dado,index) => {

    if (index<7) {
        const img = document.createElement('img');

        if (dado.length<3){
            img.src = `sprites/dados/dado${dado}.png`;
            img.alt = dado;
            img.className = `dado ${dado}`;  // Asignar clases
            img.id = `dado${(index % 10) + 1}`;
            img.draggable = false;
            contenedor.appendChild(img);
        }else{
            img.src = `sprites/dados/dado${dado}.gif`;
            img.alt = dado;
            img.className = `dado ${dado}`;  // Asignar clases
            img.id = `dado${(index % 10) + 1}`;
            img.draggable = false;
            contenedor.appendChild(img);
        }

        dadosVisibles.push(dado)
        
    }else{
        const img = document.createElement('img');
        if (dado.length<3){
            img.src = `sprites/dados/dado${dado}.png`;
            img.alt = dado;
            img.className = `dado ${dado}`;  // Asignar clases
            img.id = `dado${(index % 10) + 1}`;
            img.draggable = false;
            img.style.display = "none";
            contenedor.appendChild(img);
        }else{
            img.src = `sprites/dados/dado${dado}.gif`;
            img.alt = dado;
            img.className = `dado ${dado}`;  // Asignar clases
            img.id = `dado${(index % 10) + 1}`;
            img.draggable = false;
            img.style.display = "none";
            contenedor.appendChild(img);
        }
    }
    
});

const sonidoCreacion = document.getElementById('sonidoCreacionDados');
sonidoCreacion.volume = 0.2;
sonidoCreacion.play(); //Reproduce un sonido despues de crear los dados en la mano randomizados

//Primer dado de la partida

const sonidoSeleccion = document.getElementById('sonidoSeleccion');

let dadosN = [11,12,13,14,15,16,22,23,24,25,26,33,34,35,36,44,45,46,55,56,66] //Dados normales

setTimeout(() => {
    if (primerTurno==true) {
    
        // Mezclamos los dados
        for (let i = dadosN.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [dadosN[i], dadosN[j]] = [dadosN[j], dadosN[i]];
        }
      
        // La IA selecciona el primer dado
        let dadoSeleccionadoIA = dadosN.slice(0, 1);
    
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
        sonidoSeleccion.play(); //Sonido del primer dado seleccionado de la partida
    
        let cifra2IA = dadoSeleccionadoIA % 10;
    
        caraNecesaria = cifra2IA

        turno=1;
    
    }    
}, 1000);



//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Sonido hover mouse dado domino
const dadosS = document.querySelectorAll('.dado'); // Seleccionar todas las imágenes con clase 'dado'
const sonidoHoverDado = document.getElementById('sonidoHoverDado');
const fireHover = document.getElementById("fireHover");
dadosS.forEach(dado => {
    dado.addEventListener('mouseenter', async () => {
        sonidoHoverDado.currentTime = 0; // Reiniciar el sonido al inicio
        sonidoHoverDado.play(); // Reproducir el sonido

        // Obtener todas las clases del elemento
        let clasesDadoEspecial = dado.className.split(" ");
                    
        // Obtener la última clase para saber que dado estamos seleccionando
        let ultimaClaseDadoEspecial = clasesDadoEspecial[clasesDadoEspecial.length - 1];

        let dadoEspecialSeleccionado = ultimaClaseDadoEspecial;

        let cifra3 = dadoEspecialSeleccionado[2];

        switch(cifra3){
            case "f":
                fireHover.volume = 0.6;
                fireHover.loop = true;
                fireHover.currentTime = 0;
                fireHover.play();
                dado.dataset.fireHoverPlaying = "true"; // Mark that fireHover is playing
                await esperar(5000);
                fireHover.pause();
                break;
        }
    });

    dado.addEventListener('mouseleave', () => {
        if (dado.dataset.fireHoverPlaying === "true") {
            fireHover.pause();
            dado.dataset.fireHoverPlaying = "false"; // Reset the marker
        }
    });
});
