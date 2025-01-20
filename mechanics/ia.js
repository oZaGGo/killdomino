/*

This script contains the code to the response of the IA to the player choice.


*/




// Logica de la IA para responder a la juagda del jugador


//funcion para que espere por cada iteracion del bucle
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//funcion asincrona para pdoer usar los awaits
async function turnoIA() {

    const comboSound = document.getElementById("comboSound")
    comboSound.volume = 0.7

    const dragSound = document.getElementById('dragSound');
    dragSound.volume = 0.5;

    let comboIA = document.getElementById("comboIA");

    let hpLoss = document.getElementById("hpLoss");

    let damageCombo = 0;

    let damageDealt = 0;
    turno = 0

    contenedor.style.pointerEvents = "none"; //Se desactiva el click en los dados

    let probabilidadFicha = Math.floor(Math.random() * 100) //numero de 0 a 100 para hacer probabilidades

    if (luck == false) {
        if (probabilidadFicha <= 50) {
            fichasIAJugar = 1;
        } else if (probabilidadFicha > 50 && probabilidadFicha <= 70) {
            fichasIAJugar = 2;

        } else if (probabilidadFicha > 70 && probabilidadFicha <= 80) {
            fichasIAJugar = 3;

        } else if (probabilidadFicha > 80 && probabilidadFicha <= 90) {
            fichasIAJugar = 4;

        } else if (probabilidadFicha > 90 && probabilidadFicha <= 100) {
            fichasIAJugar = 5;

        }
    } else { //Ajustamos las probabilidades si la suerte esta activada
        if (probabilidadFicha <= 70) {
            fichasIAJugar = 1;
        } else if (probabilidadFicha > 70 && probabilidadFicha <= 80) {
            fichasIAJugar = 2;

        } else if (probabilidadFicha > 80 && probabilidadFicha <= 90) {
            fichasIAJugar = 3;

        } else if (probabilidadFicha > 90 && probabilidadFicha <= 95) {
            fichasIAJugar = 4;

        } else if (probabilidadFicha > 95 && probabilidadFicha <= 100) {
            fichasIAJugar = 5;
        }
    }



    let color = 0;

    for (i = 1; i <= fichasIAJugar; i++) {

        let segundaCaraFichaIA = 0;
        let fichaIAResultante = 0;

        const manoJugadaIA = document.getElementById('manoJugada');

        const resultadoJugadaIA = document.createElement('img');


        switch (caraNecesaria) {
            case 1:
                segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                fichaIAResultante = 10 + segundaCaraFichaIA


                resultadoJugadaIA.src = `../sprites/dados_h/hdado${fichaIAResultante}.png`;

                resultadoJugadaIA.className = `dadoJugado h${fichaIAResultante}`;

                manoJugadaIA.appendChild(resultadoJugadaIA);
                sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                sonidoSeleccion.play();
                manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                await esperar(200)
                dragSound.currentTime = 0
                dragSound.play();
                manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                dadosJugados++;
                desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld

                //Combo aplicado
                bipSound = document.getElementById(`${"bip" + bipCounter}`)
                bipSound.volume = 0.2
                bipSound.currentTime = 0
                bipSound.play()

                comboIA = document.getElementById("comboIA");
                comboNumber++;
                damageComboIA = damageComboIA + caraNecesaria;
                comboIA.textContent = `${"+" + damageComboIA}`
                comboIA.classList.add("comboAnimation")

                bipCounter++

                if (bipCounter > 7) {
                    bipCounter = 1
                }

                if (bipCounter == 7) {
                    negativeScreen.style.display = "block"
                    impactBass.currentTime = 0
                    impactBass.play()
                }

                caraNecesaria = segundaCaraFichaIA

                await esperar(350)

                break;
            case 2:
                segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                if (segundaCaraFichaIA < 2) {

                    fichaIAResultante = 12;

                    resultadoJugadaIA.src = `../sprites/dados_h/hdado${fichaIAResultante}.png`;

                    resultadoJugadaIA.className = `dadoJugado h${fichaIAResultante}`;

                    resultadoJugadaIA.style.transform = "scale(2.1) scaleX(-1)";

                    manoJugadaIA.appendChild(resultadoJugadaIA);
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld


                    //Combo aplicado
                    bipSound = document.getElementById(`${"bip" + bipCounter}`)
                    bipSound.volume = 0.2
                    bipSound.currentTime = 0
                    bipSound.play()

                    comboIA = document.getElementById("comboIA");
                    comboNumber++;
                    damageComboIA = damageComboIA + caraNecesaria;
                    comboIA.textContent = `${"+" + damageComboIA}`
                    comboIA.classList.add("comboAnimation")


                    bipCounter++

                    if (bipCounter > 7) {
                        bipCounter = 1
                    }

                    if (bipCounter == 7) {
                        negativeScreen.style.display = "block"
                        impactBass.currentTime = 0
                        impactBass.play()
                    }

                    caraNecesaria = segundaCaraFichaIA

                    await esperar(350)

                } else {

                    fichaIAResultante = 20 + segundaCaraFichaIA



                    resultadoJugadaIA.src = `../sprites/dados_h/hdado${fichaIAResultante}.png`;

                    resultadoJugadaIA.className = `dadoJugado h${fichaIAResultante}`;

                    manoJugadaIA.appendChild(resultadoJugadaIA);
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld


                    //Combo aplicado
                    bipSound = document.getElementById(`${"bip" + bipCounter}`)
                    bipSound.volume = 0.2
                    bipSound.currentTime = 0
                    bipSound.play()

                    comboIA = document.getElementById("comboIA");
                    comboNumber++;
                    damageComboIA = damageComboIA + caraNecesaria;
                    comboIA.textContent = `${"+" + damageComboIA }`
                    comboIA.classList.add("comboAnimation")


                    bipCounter++

                    if (bipCounter > 7) {
                        bipCounter = 1
                    }

                    if (bipCounter == 7) {
                        negativeScreen.style.display = "block"
                        impactBass.currentTime = 0
                        impactBass.play()
                    }

                    caraNecesaria = segundaCaraFichaIA

                    await esperar(350)

                }
                break;
            case 3:
                segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                if (segundaCaraFichaIA < 3) {

                    fichaIAResultante = (segundaCaraFichaIA * 10) + 3;


                    resultadoJugadaIA.src = `../sprites/dados_h/hdado${fichaIAResultante}.png`;

                    resultadoJugadaIA.className = `dadoJugado h${fichaIAResultante}`;

                    resultadoJugadaIA.style.transform = "scale(2.1) scaleX(-1)";

                    manoJugadaIA.appendChild(resultadoJugadaIA);
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld


                    //Combo aplicado
                    bipSound = document.getElementById(`${"bip" + bipCounter}`)
                    bipSound.volume = 0.2
                    bipSound.currentTime = 0
                    bipSound.play()

                    comboIA = document.getElementById("comboIA");
                    comboNumber++;
                    damageComboIA = damageComboIA + caraNecesaria;
                    comboIA.textContent = `${"+" + damageComboIA }`
                    comboIA.classList.add("comboAnimation")


                    bipCounter++

                    if (bipCounter > 7) {
                        bipCounter = 1
                    }

                    if (bipCounter == 7) {
                        negativeScreen.style.display = "block"
                        impactBass.currentTime = 0
                        impactBass.play()
                    }

                    caraNecesaria = segundaCaraFichaIA

                    await esperar(350)

                } else {

                    fichaIAResultante = 30 + segundaCaraFichaIA


                    resultadoJugadaIA.src = `../sprites/dados_h/hdado${fichaIAResultante}.png`;

                    resultadoJugadaIA.className = `dadoJugado h${fichaIAResultante}`;

                    manoJugadaIA.appendChild(resultadoJugadaIA);
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld


                    //Combo aplicado
                    bipSound = document.getElementById(`${"bip" + bipCounter}`)
                    bipSound.volume = 0.2
                    bipSound.currentTime = 0
                    bipSound.play()

                    comboIA = document.getElementById("comboIA");
                    comboNumber++;
                    damageComboIA = damageComboIA + caraNecesaria;
                    comboIA.textContent = `${"+" + damageComboIA }`
                    comboIA.classList.add("comboAnimation")


                    bipCounter++

                    if (bipCounter > 7) {
                        bipCounter = 1
                    }

                    if (bipCounter == 7) {
                        negativeScreen.style.display = "block"
                        impactBass.currentTime = 0
                        impactBass.play()
                    }

                    caraNecesaria = segundaCaraFichaIA

                    await esperar(350)

                }
                break;
            case 4:
                segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                if (segundaCaraFichaIA < 4) {

                    fichaIAResultante = (segundaCaraFichaIA * 10) + 4;


                    resultadoJugadaIA.src = `../sprites/dados_h/hdado${fichaIAResultante}.png`;

                    resultadoJugadaIA.className = `dadoJugado h${fichaIAResultante}`;

                    resultadoJugadaIA.style.transform = "scale(2.1) scaleX(-1)";

                    manoJugadaIA.appendChild(resultadoJugadaIA);
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld


                    //Combo aplicado
                    bipSound = document.getElementById(`${"bip" + bipCounter}`)
                    bipSound.volume = 0.2
                    bipSound.currentTime = 0
                    bipSound.play()

                    comboIA = document.getElementById("comboIA");
                    comboNumber++;
                    damageComboIA = damageComboIA + caraNecesaria;
                    comboIA.textContent = `${"+" + damageComboIA }`
                    comboIA.classList.add("comboAnimation")


                    bipCounter++

                    if (bipCounter > 7) {
                        bipCounter = 1
                    }

                    if (bipCounter == 7) {
                        negativeScreen.style.display = "block"
                        impactBass.currentTime = 0
                        impactBass.play()
                    }

                    caraNecesaria = segundaCaraFichaIA

                    await esperar(350)

                } else {

                    fichaIAResultante = 40 + segundaCaraFichaIA


                    resultadoJugadaIA.src = `../sprites/dados_h/hdado${fichaIAResultante}.png`;

                    resultadoJugadaIA.className = `dadoJugado h${fichaIAResultante}`;

                    manoJugadaIA.appendChild(resultadoJugadaIA);
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld


                    //Combo aplicado
                    bipSound = document.getElementById(`${"bip" + bipCounter}`)
                    bipSound.volume = 0.2
                    bipSound.currentTime = 0
                    bipSound.play()

                    comboIA = document.getElementById("comboIA");
                    comboNumber++;
                    damageComboIA = damageComboIA + caraNecesaria;
                    comboIA.textContent = `${"+" + damageComboIA }`
                    comboIA.classList.add("comboAnimation")


                    bipCounter++

                    if (bipCounter > 7) {
                        bipCounter = 1
                    }

                    if (bipCounter == 7) {
                        negativeScreen.style.display = "block"
                        impactBass.currentTime = 0
                        impactBass.play()
                    }

                    caraNecesaria = segundaCaraFichaIA

                    await esperar(350)


                }
                break;
            case 5:
                segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                if (segundaCaraFichaIA < 5) {

                    fichaIAResultante = (segundaCaraFichaIA * 10) + 5;


                    resultadoJugadaIA.src = `../sprites/dados_h/hdado${fichaIAResultante}.png`;

                    resultadoJugadaIA.className = `dadoJugado h${fichaIAResultante}`;

                    resultadoJugadaIA.style.transform = "scale(2.1) scaleX(-1)";

                    manoJugadaIA.appendChild(resultadoJugadaIA);
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld


                    //Combo aplicado
                    bipSound = document.getElementById(`${"bip" + bipCounter}`)
                    bipSound.volume = 0.2
                    bipSound.currentTime = 0
                    bipSound.play()

                    comboIA = document.getElementById("comboIA");
                    comboNumber++;
                    damageComboIA = damageComboIA + caraNecesaria;
                    comboIA.textContent = `${"+" + damageComboIA }`
                    comboIA.classList.add("comboAnimation")


                    bipCounter++

                    if (bipCounter > 7) {
                        bipCounter = 1
                    }

                    if (bipCounter == 7) {
                        negativeScreen.style.display = "block"
                        impactBass.currentTime = 0
                        impactBass.play()
                    }

                    caraNecesaria = segundaCaraFichaIA

                    await esperar(350)

                } else {

                    fichaIAResultante = 50 + segundaCaraFichaIA


                    resultadoJugadaIA.src = `../sprites/dados_h/hdado${fichaIAResultante}.png`;

                    resultadoJugadaIA.className = `dadoJugado h${fichaIAResultante}`;

                    manoJugadaIA.appendChild(resultadoJugadaIA);
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld


                    //Combo aplicado
                    bipSound = document.getElementById(`${"bip" + bipCounter}`)
                    bipSound.volume = 0.2
                    bipSound.currentTime = 0
                    bipSound.play()

                    comboIA = document.getElementById("comboIA");
                    comboNumber++;
                    damageComboIA = damageComboIA + caraNecesaria;
                    comboIA.textContent = `${"+" + damageComboIA }`
                    comboIA.classList.add("comboAnimation")


                    bipCounter++

                    if (bipCounter > 7) {
                        bipCounter = 1
                    }

                    if (bipCounter == 7) {
                        negativeScreen.style.display = "block"
                        impactBass.currentTime = 0
                        impactBass.play()
                    }

                    caraNecesaria = segundaCaraFichaIA

                    await esperar(350)


                }
                break;
            case 6:
                segundaCaraFichaIA = Math.floor(Math.random() * 6) + 1
                if (segundaCaraFichaIA < 6) {

                    fichaIAResultante = (segundaCaraFichaIA * 10) + 6;


                    resultadoJugadaIA.src = `../sprites/dados_h/hdado${fichaIAResultante}.png`;

                    resultadoJugadaIA.className = `dadoJugado h${fichaIAResultante}`;

                    resultadoJugadaIA.style.transform = "scale(2.1) scaleX(-1)";

                    manoJugadaIA.appendChild(resultadoJugadaIA);
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld


                    //Combo aplicado
                    bipSound = document.getElementById(`${"bip" + bipCounter}`)
                    bipSound.volume = 0.2
                    bipSound.currentTime = 0
                    bipSound.play()

                    comboIA = document.getElementById("comboIA");
                    comboNumber++;
                    damageComboIA = damageComboIA + caraNecesaria;
                    comboIA.textContent = `${"+" + damageComboIA }`
                    comboIA.classList.add("comboAnimation")


                    bipCounter++

                    if (bipCounter > 7) {
                        bipCounter = 1
                    }

                    if (bipCounter == 7) {
                        negativeScreen.style.display = "block"
                        impactBass.currentTime = 0
                        impactBass.play()
                    }

                    caraNecesaria = segundaCaraFichaIA

                    await esperar(350)

                } else {

                    fichaIAResultante = 60 + segundaCaraFichaIA


                    resultadoJugadaIA.src = `../sprites/dados_h/hdado${fichaIAResultante}.png`;

                    resultadoJugadaIA.className = `dadoJugado h${fichaIAResultante}`;

                    manoJugadaIA.appendChild(resultadoJugadaIA);
                    sonidoSeleccion.currentTime = 0; // Reiniciar el sonido al inicio
                    sonidoSeleccion.play();
                    manoJugadaIA.style.gridTemplateColumns = `repeat(${dadosJugados + 1}, minmax(${minmax}px, 1fr))`
                    await esperar(200)
                    dragSound.currentTime = 0
                    dragSound.play();
                    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
                    dadosJugados++;
                    desplazamientoManoJugada = desplazamientoManoJugada - desplazamientoManoJugadaOld


                    //Combo aplicado
                    bipSound = document.getElementById(`${"bip" + bipCounter}`)
                    bipSound.volume = 0.2
                    bipSound.currentTime = 0
                    bipSound.play()

                    comboIA = document.getElementById("comboIA");
                    comboNumber++;
                    damageComboIA = damageComboIA + caraNecesaria;
                    comboIA.textContent = `${"+" + damageComboIA }`
                    comboIA.classList.add("comboAnimation")


                    bipCounter++

                    if (bipCounter > 7) {
                        bipCounter = 1
                    }

                    if (bipCounter == 7) {
                        negativeScreen.style.display = "block"
                        impactBass.currentTime = 0
                        impactBass.play()
                    }

                    caraNecesaria = segundaCaraFichaIA

                    await esperar(350)

                }
                break;
            default:
                break;
        }
    }

    /*
    //Despues del turno de la IA se aplican los daños
    color = 0;
    combo.textContent = "";
    await esperar(100);
    let vidaJugador = document.getElementById("vidaJugador");

    //Vida sustraida del jugador que se muestra arriba del HP
    hpLoss.classList.add("fadeOut")


    //Modificar la vida sustraida del jugador
    playerHP = playerHP - (roundDamage * damageDealt)
    damageDealt = 0;
    let loseHP = document.getElementById("loseHP")
    loseHP.play()
    //Para evitar numeros negativos de vida
    if (playerHP < 0) {
        playerHP = 0;
    }
    vidaJugador.textContent = `CASH ${playerHP}$`;
    vidaJugador.classList.add("vibrarHpLoss")
    await esperar(200);
    vidaJugador.classList.remove("vibrarHpLoss")
    turno = 1; //Se devuelve el turno al jugador
    contenedor.style.pointerEvents = "auto"; //Se activa el click en los dados

    //Espera para que se vea la vida sustraida unratito
    await esperar(1000);
    hpLoss.classList.remove("fadeOut")
    hpLoss.textContent = "";
    */
    turno = 1;
    bipCounter = 1;
    contenedor.style.pointerEvents = "auto"; //Se activa el click en los dados
    lose()

    //Test de guardar datos
    if (leerDatos() < playerHP) {
        guardarDatos(playerHP);
    }

}
