async function gains(params) {
    //Quitar contadores de combo momentaneamente
    comboIA.classList.add("fadeOut")
    combo.classList.add("fadeOut")
    await esperar(500);
    //Bajar volumen de la música
    const audios = document.querySelectorAll("audio");
    async function bajarVolumenGradualmente(audio) {
        let volumeLower = 0.5;

        for (let i = 0; i < 5; i++) {
            audio.volume = volumeLower;
            volumeLower -= 0.1;
            await esperar(200);
        }
    }
    audios.forEach(audio => {
        if (audio.id == "bmusic1" || audio.id == "bmusic2") {
            bajarVolumenGradualmente(audio);
        }
    });
    // Oscurecemos la pantalla
    const filterScreen = document.getElementById('filterScreen');
    filterScreen.style = 'display: block !important;';
    // Mostramos el contenedor de los gains
    await esperar(500);
    const gainsContainer = document.getElementById('gainsContainer');
    gainsContainer.style = 'display: block !important;';

    // Mostramos los gains

    let mechanicalSound = document.getElementById('mechanicalSound');
    mechanicalSound.volume = 1;

    await esperar(1000);

    let finalScore;

    if (damageCombo > (damageComboIA * 5)) { //Si el jugador ha hecho 5 veces más daño que la IA
        let scoreContainer = document.getElementById('scoreContainer');
        scoreContainer.classList.add("comboAnimation") //Animación de combo
        scoreContainer.innerText = `${"Player score: " + damageCombo + "\n Oponent score: " + damageComboIA}`;
        await esperar(700);
    } else {
        let scoreContainer = document.getElementById('scoreContainer');
        scoreContainer.innerText = `${"Player score: " + damageCombo + "\n Oponent score: " + damageComboIA}`;
        await esperar(700);
    }

    if (bellTouched == false) { //Si no se ha tocado la campana se tiene bonus x3 por mano limpia
        let bonusContainer = document.getElementById('bonusContainer');
        let bonusAudio = document.getElementById('bonusAudio');
        bonusAudio.currentTime = 0;
        bonusAudio.play();
        bonusContainer.innerText = `¡BONUS x3 FOR CLEAN HAND!`
        await esperar(800);

        //Score final
        let finalScoreContainer = document.getElementById('finalScoreContainer');
        let finalScoreContainerText = `FINAL SCORE:\n ${(damageCombo - damageComboIA) * 3}`;
        finalScore = (damageCombo - damageComboIA) * 3;
        moneyOptained = ((damageCombo - damageComboIA) * 3) * betCombo;
        playerHP += moneyOptained;
        let finalScoreContainerInput = ""
        for (let i = 0; i < finalScoreContainerText.length; i++) {
            mechanicalSound.currentTime = 0;
            mechanicalSound.play();
            finalScoreContainerInput += finalScoreContainerText[i];
            finalScoreContainer.innerText = finalScoreContainerInput;
            await esperar(130);
        }
    } else {
        bellTouched = false;
        //Score final
        let finalScoreContainer = document.getElementById('finalScoreContainer');
        let finalScoreContainerText = `FINAL SCORE:\n ${(damageCombo - damageComboIA)}`;
        finalScore = (damageCombo - damageComboIA);
        moneyOptained = (damageCombo - damageComboIA) * betCombo;
        playerHP += moneyOptained;
        let finalScoreContainerInput = ""
        for (let i = 0; i < finalScoreContainerText.length; i++) {
            mechanicalSound.currentTime = 0;
            mechanicalSound.play();
            finalScoreContainerInput += finalScoreContainerText[i];
            finalScoreContainer.innerText = finalScoreContainerInput;
            await esperar(130);
        }
    }

    await esperar(500);

    let nextStageContainer = document.getElementById('nextStageContainer');
    nextStageContainer.innerText = "CASH EARNED:\n " + finalScore + " x " + betCombo + " = " + moneyOptained + "$";

    await esperar(500);

    let nextStage = document.getElementById('nextStage');
    nextStage.style = 'display: block !important;';

    nextStage.addEventListener('click', async () => {
        scoreContainer.innerText = "";
        bonusContainer.innerText = "";
        finalScoreContainer.innerText = "";
        nextStageContainer.innerText = "";
        nextStage.style = 'display: none !important;';
        gainsContainer.style = 'display: none !important;';
        filterScreen.style = 'display: none !important;';
        audios.forEach(audio => {
            if (!audio.paused && audio.id != "atmos") {
                audio.volume = 0.5;
            }
        });

        await esperar(500);

        await cardsLogic();

        /*

        let hpLoss = document.getElementById("hpLoss")
        hpLoss.classList.add("fadeOut")
        hpLoss.textContent = `${moneyOptained}$`
        await esperar(300);
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
        hpLoss.classList.remove("fadeOut")
        hpLoss.textContent = "";

        comboIA.innerText = "";
        comboIA.classList.remove("comboAnimation");
        combo.innerText = "";
        combo.classList.remove("comboAnimation");
        damageCombo = 0;
        damageComboIA = 0;

        if (dadosInvisiblesRestantes == 3) {
            for (let i = 8; i <= 10; i++) {
                let dadoR = document.getElementById(`dado${i}`)
                dadoR.remove();
            }
        } else if (dadosInvisiblesRestantes == 2) {
            for (let i = 9; i <= 10; i++) {
                let dadoR = document.getElementById(`dado${i}`)
                dadoR.remove();
            }
        } else if (dadosInvisiblesRestantes == 1) {
            let dadoR = document.getElementById(`dado10`)
            dadoR.remove();
        }

        turnObject++ //Aumento el turno de objetos que requieren de una activa
        blankUsed = false; //Reinicio el uso de la carta en blanco

        handReset()

        */
    });
}