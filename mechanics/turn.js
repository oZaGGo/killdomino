//Resetear todo lo necesario para la nueva mano
async function handReset() {
    damageCombo = 0;
    damageComboIA = 0;
    comboIA.classList.remove("fadeOut")
    combo.classList.remove("fadeOut")
    await esperar(500);
    dadosRestantes = 7;
    dadosInvisiblesRestantes = 3;
    dadosMano = 10;
    contadorFichas.innerText = `3/3`
    fichasContadas = 3;
    contenedor.style.gridTemplateColumns = `repeat(10, 1fr)`
    dadosVisibles = [];
    dadoInvisible = 8;
    randomizeHand();
    taptap.style.pointerEvents = "auto";
    contenedor.style.pointerEvents = "auto";
}

async function fixHandReset() {
    await esperar(1600);
    handReset();
}

async function checkIfRoundWin() {
    if (dadosRestantes <= 0) {
        taptap.style.pointerEvents = "none";
        contenedor.style.pointerEvents = "none"

        //Resetear musica
        bmusic.volume = 0.3
        bmusic_effects.volume = 0

        //resetear bipcounter
        bipCounter = 1;

        //Resetear viñeta
        let vignetteScreen = document.getElementById("vignetteScreen")
        vignetteScreen.style.opacity = 0

        //reseteo de shake
        const elemento = document.querySelector('body');
        for (let i = 1; i <= 7; i++) {
            let className = `shake${i}`;
            if (elemento.classList.contains(className)) {
                elemento.classList.remove(className);
            }
        }

        //reseteo de filtro negativo
        negativeScreen.style.display = "none";

        await gains();
        /*
        //await gains(); 
        ronda++;
        exedCash = exedCash + 0.3;
        roundDamage = roundDamage + Math.round((playerHP / (15 - exedCash)));
        playerHP = playerHP * Math.round(ronda / exedCash);
        */

        /*
        await gains()

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

        await esperar(1500);

        comboIA.innerText = "";
        comboIA.classList.remove("comboAnimation");
        combo.innerText = "";
        combo.classList.remove("comboAnimation");
        damageCombo = 0;
        damageComboIA = 0;
        */

        /*
        if (coinEarnings == true) {

            await esperar(300);

            let moneyPig = document.getElementById("moneyPig");
            let objectContainer = document.getElementById("objectContainer");
            objectContainer.src = `../sprites/objects/coin_animation.png`;
            await esperar(200);
            moneyPig.currentTime = 0;
            moneyPig.play();

            //Agregar dinero al jugador

            let hpGain = document.getElementById("hpGain")
            let vidaJugador = document.getElementById("vidaJugador");
            hpGain.textContent = `+${Math.floor(playerHP * 0.1)}$`
            hpGain.classList.add("fadeOut")
            await esperar(1000);
            hpGain.classList.remove("fadeOut")
            hpGain.textContent = "";
            let singleCoinSound = document.getElementById("singleCoinSound")
            singleCoinSound.volume = 0.9
            singleCoinSound.currentTime = 0
            singleCoinSound.play()
            playerHP = playerHP + Math.floor(playerHP * 0.1) //Aumento la vida del jugador en un 10%
            objectContainer.src = `../sprites/objects/coin_s.png`;
            vidaJugador.textContent = `CASH ${playerHP}$`;
            vidaJugador.classList.add("vibrarHpLoss")
            await esperar(200);
            vidaJugador.classList.remove("vibrarHpLoss")
        }

        if (magnetic == true) {
            magnetic = false;
            let magnet = document.getElementById("magnet");
            magnet.volume = 0.02;
            magnet.play();
            objectContainer.src = `../sprites/objects/magnetic_off.png`;
            await esperar(700)
            objectContainer.src = `../sprites/objects/magnetic_s.png`;
            objectsLogic();
        }

        vidaJugador.textContent = `CASH ${playerHP}$`;
        console.log("Has ganado la ronda")


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

        //Comprobar si se ha superado la apuesta maxima

        /*
        if (playerHP >= maxBet) {
            let objectContainer = document.getElementById("objectContainer");
            objectContainer.style = "display: none !important";

            let objects = document.querySelectorAll('.objects');

            for (object of objects) {
                object.removeEventListener("click", fixHandReset);
            }
            maxBet = maxBet * 50;
            let ratHP = document.getElementById("ratHp");
            ratHP.innerText = `BET ${maxBet}$`
            await boxLogic();
        } else {
            handReset();
        }
        */
    }

}
