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

let dadoInvisible = 8; //dados invisible al que se quiere revelar



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

bmusic.volume = 0.07;

atmos.play();
bmusic.play();
sonidoCreacion.play();

//Renderizar la mano
dadosSeleccionados.forEach((dado,index) => {

    if (index<7) {
        const img = document.createElement('img');
        img.src = `sprites/dados/dado${dado}.png`;
        img.alt = dado;
        img.className = `dado ${dado}`;  // Asignar clases
        img.id = `dado${(index % 10) + 1}`;
        img.draggable = false;
        contenedor.appendChild(img);
    }else{
        const img = document.createElement('img');
        img.src = `sprites/dados/dado${dado}.png`;
        img.alt = dado;
        img.className = `dado ${dado}`;  // Asignar clases
        img.id = `dado${(index % 10) + 1}`;
        img.draggable = false;
        img.style.display = "none";
        contenedor.appendChild(img);
    }
    
});

//Crear sistema de turnos contra la IA

let turno = 0; //0 es turno de la IA y 1 es turno del jugador

let primerTurno = true; //Para simbolizar un supuesto "primer turno"

let fichasIA = 7; //Numero imaginario de fichas que tiene la ia

//Primer dado de la partida
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

        turno=1;
    
    }    
}, 1000);



//Logica para el boton de pasar turno

const passB = document.getElementById("passB");

passB.addEventListener("click", function(){

    if (turno==1){ //si le toca al jugador

        console.log("He presionado el boton de turno")

        turno=0;

        turnoIA()

    }

})

//funcion para que espere por cada iteracion del bucle
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//funcion asincrona para pdoer usar los awaits
async function turnoIA(){
    
    let probabilidadFicha = Math.floor(Math.random() * 100) //numero de 0 a 100 para hacer probabilidades

    if (probabilidadFicha<=50){
        fichasIAJugar = 1;
    } else if (probabilidadFicha>50&&probabilidadFicha<=70) {
        fichasIAJugar = 2;

    }else if (probabilidadFicha>70&&probabilidadFicha<=80) {
        fichasIAJugar = 3;

    }else if (probabilidadFicha>80&&probabilidadFicha<=90) {
        fichasIAJugar = 4;

    }else if (probabilidadFicha>90&&probabilidadFicha<=100) {
        fichasIAJugar = 5;

    }
    

    console.log("LA IA VA A JUGAR " + fichasIAJugar + " veces")

    for (i=1;i<=fichasIAJugar;i++){

        let segundaCaraFichaIA = 0;
        let fichaIAResultante = 0;

        const manoJugadaIA = document.getElementById('manoJugada');
    
        const resultadoJugadaIA = document.createElement('img');

        console.log("La cara necesaria antes de la IA: " + caraNecesaria)

        await esperar(800);

        switch(caraNecesaria){
            case 1:
                    segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                    fichaIAResultante = 10 + segundaCaraFichaIA

                    console.log("La IA ha jugado: " + fichaIAResultante)

                    resultadoJugadaIA.src = `sprites/dados_h/hdado${fichaIAResultante}.png`;
                
                    resultadoJugadaIA.className = `dadoJugado ${fichaIAResultante}`;
                
                    manoJugadaIA.appendChild(resultadoJugadaIA);
                
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`    
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430
                
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                
                    caraNecesaria = segundaCaraFichaIA

                    console.log("La cara necesaria despues de la IA: " + caraNecesaria)

                break;
            case 2:
                    segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                    if(segundaCaraFichaIA<2){
                        fichaIAResultante = 12;

                        console.log("La IA ha jugado: " + fichaIAResultante)

                        resultadoJugadaIA.src = `sprites/dados_h/hdado${fichaIAResultante}.png`;
                    
                        resultadoJugadaIA.className = `dadoJugado ${fichaIAResultante}`;

                        resultadoJugadaIA.style.transform = "scaleX(-1)";
                    
                        manoJugadaIA.appendChild(resultadoJugadaIA);
                    
                        manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                        manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                           
                        dadosJugados++;
                        desplazamientoManoJugada = desplazamientoManoJugada - 430
                    
                        sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                        sonidoSeleccion.play();
                    
                        caraNecesaria = segundaCaraFichaIA
                        console.log("La cara necesaria despues de la IA: " + caraNecesaria)
                    } else {

                        fichaIAResultante = 20 + segundaCaraFichaIA

                        console.log("La IA ha jugado: " + fichaIAResultante)

                        resultadoJugadaIA.src = `sprites/dados_h/hdado${fichaIAResultante}.png`;
                    
                        resultadoJugadaIA.className = `dadoJugado ${fichaIAResultante}`;
                    
                        manoJugadaIA.appendChild(resultadoJugadaIA);
                    
                        manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                        manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`    
                        dadosJugados++;
                        desplazamientoManoJugada = desplazamientoManoJugada - 430
                    
                        sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                        sonidoSeleccion.play();
                    
                        caraNecesaria = segundaCaraFichaIA
                        console.log("La cara necesaria despues de la IA: " + caraNecesaria)

                    }
                break;
            case 3:
                segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                if(segundaCaraFichaIA<3){
                    fichaIAResultante = (segundaCaraFichaIA*10) + 3;

                    console.log("La IA ha jugado: " + fichaIAResultante)

                    resultadoJugadaIA.src = `sprites/dados_h/hdado${fichaIAResultante}.png`;
                
                    resultadoJugadaIA.className = `dadoJugado ${fichaIAResultante}`;
                
                    resultadoJugadaIA.style.transform = "scaleX(-1)";

                    manoJugadaIA.appendChild(resultadoJugadaIA);
                
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                       
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430
                
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                
                    caraNecesaria = segundaCaraFichaIA
                    console.log("La cara necesaria despues de la IA: " + caraNecesaria)
                } else {

                    fichaIAResultante = 30 + segundaCaraFichaIA

                    console.log("La IA ha jugado: " + fichaIAResultante)

                    resultadoJugadaIA.src = `sprites/dados_h/hdado${fichaIAResultante}.png`;
                
                    resultadoJugadaIA.className = `dadoJugado ${fichaIAResultante}`;
                
                    manoJugadaIA.appendChild(resultadoJugadaIA);
                
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`   
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430
                
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                
                    caraNecesaria = segundaCaraFichaIA
                    console.log("La cara necesaria despues de la IA: " + caraNecesaria)

                }
                break;
            case 4:
                segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                if(segundaCaraFichaIA<4){
                    fichaIAResultante = (segundaCaraFichaIA*10) + 4;

                    console.log("La IA ha jugado: " + fichaIAResultante)

                    resultadoJugadaIA.src = `sprites/dados_h/hdado${fichaIAResultante}.png`;
                
                    resultadoJugadaIA.className = `dadoJugado ${fichaIAResultante}`;

                    resultadoJugadaIA.style.transform = "scaleX(-1)";
                
                    manoJugadaIA.appendChild(resultadoJugadaIA);
                
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                       
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430
                
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                
                    caraNecesaria = segundaCaraFichaIA
                    console.log("La cara necesaria despues de la IA: " + caraNecesaria)
                } else {

                    fichaIAResultante = 40 + segundaCaraFichaIA

                    console.log("La IA ha jugado: " + fichaIAResultante)

                    resultadoJugadaIA.src = `sprites/dados_h/hdado${fichaIAResultante}.png`;
                
                    resultadoJugadaIA.className = `dadoJugado ${fichaIAResultante}`;
                
                    manoJugadaIA.appendChild(resultadoJugadaIA);
                
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`   
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430
                
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                
                    caraNecesaria = segundaCaraFichaIA
                    console.log("La cara necesaria despues de la IA: " + caraNecesaria)

                }
                break;
            case 5:
                segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                if(segundaCaraFichaIA<5){
                    fichaIAResultante = (segundaCaraFichaIA*10) + 5;

                    console.log("La IA ha jugado: " + fichaIAResultante)

                    resultadoJugadaIA.src = `sprites/dados_h/hdado${fichaIAResultante}.png`;
                
                    resultadoJugadaIA.className = `dadoJugado ${fichaIAResultante}`;

                    resultadoJugadaIA.style.transform = "scaleX(-1)";
                
                    manoJugadaIA.appendChild(resultadoJugadaIA);
                
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                        
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430
                
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                
                    caraNecesaria = segundaCaraFichaIA
                    console.log("La cara necesaria despues de la IA: " + caraNecesaria)
                } else {

                    fichaIAResultante = 50 + segundaCaraFichaIA

                    console.log("La IA ha jugado: " + fichaIAResultante)

                    resultadoJugadaIA.src = `sprites/dados_h/hdado${fichaIAResultante}.png`;
                
                    resultadoJugadaIA.className = `dadoJugado ${fichaIAResultante}`;
                
                    manoJugadaIA.appendChild(resultadoJugadaIA);
                
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`   
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430
                
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                
                    caraNecesaria = segundaCaraFichaIA
                    console.log("La cara necesaria despues de la IA: " + caraNecesaria)

                }
                break;
            case 6:
                segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                if(segundaCaraFichaIA<6){
                    fichaIAResultante = (segundaCaraFichaIA*10) + 6;

                    console.log("La IA ha jugado: " + fichaIAResultante)

                    resultadoJugadaIA.src = `sprites/dados_h/hdado${fichaIAResultante}.png`;
                
                    resultadoJugadaIA.className = `dadoJugado ${fichaIAResultante}`;

                    resultadoJugadaIA.style.transform = "scaleX(-1)";
                
                    manoJugadaIA.appendChild(resultadoJugadaIA);
                
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                        
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430
                
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                
                    caraNecesaria = segundaCaraFichaIA
                    console.log("La cara necesaria despues de la IA: " + caraNecesaria)
                } else {

                    fichaIAResultante = 60 + segundaCaraFichaIA

                    console.log("La IA ha jugado: " + fichaIAResultante)

                    resultadoJugadaIA.src = `sprites/dados_h/hdado${fichaIAResultante}.png`;
                
                    resultadoJugadaIA.className = `dadoJugado ${fichaIAResultante}`;
                
                    manoJugadaIA.appendChild(resultadoJugadaIA);
                
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados+1}, minmax(215px, 1fr))`
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`   
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - 430
                
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                
                    caraNecesaria = segundaCaraFichaIA
                    console.log("La cara necesaria despues de la IA: " + caraNecesaria)

                }
                break;
            default:
                break;                        
        }
    }

    fichasIA = fichasIA - fichasIAJugar;


    turno = 1;
}


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