/*

This script contains the code to the response of the IA to the player choice.


*/




// Logica de la IA para responder a la juagda del jugador


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
                    //Combo aplicado
                    let combo = document.getElementById("combo");
                    comboNumber++;
                    combo.textContent = `Combo X${comboNumber}`

                    //Vida sustraida del jugador
                    playerHP--

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
                        //Combo aplicado
                        let combo = document.getElementById("combo");
                        comboNumber++;
                        combo.textContent = `Combo X${comboNumber}`

                        //Vida sustraida del jugador
                        playerHP--

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
                        //Combo aplicado
                        let combo = document.getElementById("combo");
                        comboNumber++;
                        combo.textContent = `Combo X${comboNumber}`

                        //Vida sustraida del jugador
                        playerHP--

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
                    //Combo aplicado
                    let combo = document.getElementById("combo");
                    comboNumber++;
                    combo.textContent = `Combo X${comboNumber}`

                    //Vida sustraida del jugador
                    playerHP--

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

                    //Combo aplicado
                    let combo = document.getElementById("combo");
                    comboNumber++;
                    combo.textContent = `Combo X${comboNumber}`

                    //Vida sustraida del jugador
                    playerHP--

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
                    //Combo aplicado
                    let combo = document.getElementById("combo");
                    comboNumber++;
                    combo.textContent = `Combo X${comboNumber}`

                    //Vida sustraida del jugador
                    playerHP--

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

                    //Combo aplicado
                    let combo = document.getElementById("combo");
                    comboNumber++;
                    combo.textContent = `Combo X${comboNumber}`

                    //Vida sustraida del jugador
                    playerHP--

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

                    //Combo aplicado
                    let combo = document.getElementById("combo");
                    comboNumber++;
                    combo.textContent = `Combo X${comboNumber}`

                    //Vida sustraida del jugador
                    playerHP--

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

                    //Combo aplicado
                    let combo = document.getElementById("combo");
                    comboNumber++;
                    combo.textContent = `Combo X${comboNumber}`

                    //Vida sustraida del jugador
                    playerHP--

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

                    //Combo aplicado
                    let combo = document.getElementById("combo");
                    comboNumber++;
                    combo.textContent = `Combo X${comboNumber}`

                    //Vida sustraida del jugador
                    playerHP--

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

                    //Combo aplicado
                    let combo = document.getElementById("combo");
                    comboNumber++;
                    combo.textContent = `Combo X${comboNumber}`

                    //Vida sustraida del jugador
                    playerHP--

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

    //Despues del turno de la IA se aplican los daños

    await esperar(1500);
    let vidaJugador = document.getElementById("vidaJugador");

    vidaJugador.textContent = `HP: ${playerHP}`;

    combo.textContent="";

    turno = 1; //Se devuelve el turno al jugador


}
