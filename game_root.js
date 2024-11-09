/*

This script is the point of start of the game scene.


*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Musica del juego y ambiente

const atmos = document.getElementById('atmos');

const bmusic1 = document.getElementById('bmusic1');

const bmusic2 = document.getElementById('bmusic2');

atmos.volume = 0.03;

atmos.loop = true;

bmusic1.loop = true;

bmusic1.volume = 0.4;

bmusic2.loop = true;

bmusic2.volume = 0.5;

atmos.play();


const numeroAleatorio = Math.floor(Math.random() * 2) + 1;

if (numeroAleatorio === 1) {
    bmusic1.play();
} else if (numeroAleatorio === 2) {
    bmusic2.play();
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Renderizar la mano randomizada y el primer dado de la partida

function randomizeHand() {
    // Mezclar la lista usando el algoritmo de Fisher-Yates
    for (let i = dados.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        // Intercambiar elementos
        [dados[i], dados[j]] = [dados[j], dados[i]];
    }

    // Seleccionar los primeros 10 elementos de la lista mezclada
    let dadosSeleccionados = dados.slice(0, 10);

    const contenedor = document.getElementById('contenedor'); //contenedor de los dados

    dadosSeleccionados.forEach((dado, index) => {

        if (index < 7) {
            const img = document.createElement('img');

            if (dado.length < 3) {
                img.src = `sprites/dados/dado${dado}.png`;
                img.alt = dado;
                img.className = `dado ${dado}`;  // Asignar clases
                img.id = `dado${(index % 10) + 1}`;
                img.draggable = false;
                contenedor.appendChild(img);
            } else {
                img.src = `sprites/dados/dado${dado}.gif`;
                img.alt = dado;
                img.className = `dado ${dado}`;  // Asignar clases
                img.id = `dado${(index % 10) + 1}`;
                img.draggable = false;
                contenedor.appendChild(img);
            }

            dadosVisibles.push(dado)

        } else {
            const img = document.createElement('img');
            if (dado.length < 3) {
                img.src = `sprites/dados/dado${dado}.png`;
                img.alt = dado;
                img.className = `dado ${dado}`;  // Asignar clases
                img.id = `dado${(index % 10) + 1}`;
                img.draggable = false;
                img.style.display = "none";
                contenedor.appendChild(img);
            } else {
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
    console.log("Dados randomizados: " + dadosVisibles)  

}

randomizeHand();

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//Primer dado de la partida

const sonidoSeleccion = document.getElementById('sonidoSeleccion');

let dadosN = [11, 12, 13, 14, 15, 16, 22, 23, 24, 25, 26, 33, 34, 35, 36, 44, 45, 46, 55, 56, 66] //Dados normales

setTimeout(() => {
    if (primerTurno == true) {

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

        manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(215px, 1fr))`
        manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
        dadosJugados++;
        desplazamientoManoJugada = desplazamientoManoJugada - 430

        sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
        sonidoSeleccion.play(); //Sonido del primer dado seleccionado de la partida

        let cifra2IA = dadoSeleccionadoIA % 10;

        caraNecesaria = cifra2IA

        turno = 1;

    }
}, 1000);



//-------------------------------------------------------------------------------------------------------------------------------------------------------

async function hoverFunctions() {

    //Efectos y funciones al hacer hover en los dados
    const dadosS = document.querySelectorAll('.dado');
    //Sonidos de hover:
    const sonidoHoverDado = document.getElementById('sonidoHoverDado');
    const fireHover = document.getElementById("fireHover");
    const magneticHover = document.getElementById("magneticHover");
    const tntHover = document.getElementById("tntHover");
    //Caja de descripcion del dado:
    const infoBox = document.getElementById('infoBox');

    dadosS.forEach(dado => {
        dado.addEventListener('mouseenter', async () => {
            //Mostrar la caja de descripcion
            infoBox.style.display = "block";
            //Extraer la posicio ndel dado seleccionado
            const rect = dado.getBoundingClientRect();
            //Posicionar la caja de descripcion
            infoBox.style.left = `${rect.left - 30}px`;
            infoBox.style.top = `${rect.top - 100}px`;

            //Reproducir sonidos de hover
            sonidoHoverDado.currentTime = 0; // Reiniciar el sonido al inicio
            sonidoHoverDado.play(); // Reproducir el sonido

            // Obtener todas las clases del elemento
            let clasesDadoEspecial = dado.className.split(" ");

            // Obtener la última clase para saber que dado estamos seleccionando
            let ultimaClaseDadoEspecial = clasesDadoEspecial[clasesDadoEspecial.length - 1];

            let dadoEspecialSeleccionado = ultimaClaseDadoEspecial;

            let cifra3 = dadoEspecialSeleccionado[2];


            switch (cifra3) {
                case "f":
                    fireHover.volume = 0.6;
                    fireHover.loop = true;
                    fireHover.currentTime = 0;
                    fireHover.play();
                    //Empezar la transicion de la caja de descripcion
                    infoBox.style.opacity = "1";
                    infoBox.innerText = "It burns!";
                    break;
                case "n":
                    magneticHover.volume = 0.4;
                    magneticHover.loop = false;
                    magneticHover.currentTime = 0;
                    magneticHover.play();
                    //Empezar la transicion de la caja de descripcion
                    infoBox.style.opacity = "1";
                    infoBox.style.left = `${rect.left - 60}px`;
                    infoBox.innerText = "It attracts odd stuff...";
                    break;
                case "p":
                    magneticHover.volume = 0.3;
                    magneticHover.loop = false;
                    magneticHover.currentTime = 0;
                    magneticHover.play();
                    //Empezar la transicion de la caja de descripcion
                    infoBox.style.opacity = "1";
                    infoBox.style.left = `${rect.left - 60}px`;
                    infoBox.innerText = "Even you can use it...";
                    break;
                case "t":
                    //Empezar la transicion de la caja de descripcion
                    infoBox.style.opacity = "1";
                    infoBox.style.left = `${rect.left - 60}px`;
                    infoBox.innerText = "It seems to not exist...";
                    break;
                case "e":
                    tntHover.volume = 0.3;
                    tntHover.loop = false;
                    tntHover.currentTime = 0;
                    tntHover.play();
                    infoBox.style.opacity = "1";
                    infoBox.style.left = `${rect.left - 60}px`;
                    infoBox.innerText = "It explodes!";
                    break;
                case "c":
                    infoBox.style.opacity = "1";
                    infoBox.style.left = `${rect.left - 60}px`;
                    infoBox.innerText = "Hell yeah!";
                    break;         
            }
        });

        dado.addEventListener('mouseleave', () => {

            fireHover.pause();
            magneticHover.pause();
            tntHover.pause();

            infoBox.style.opacity = "0";
            infoBox.style.display = "none";

        });
    });
}

hoverFunctions();
//-------------------------------------------------------------------------------------------------------------------------------------------------------