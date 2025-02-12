/*

This script contains the ui logic and combo system of the game.


*/



async function comboLogic(estadoFIcha) {

    //Combo aplicado
    combo = document.getElementById("combo");
    comboNumber++;
    damageCombo = damageCombo + caraNecesaria;

    //Sonido de seleccion de ficha
    bipSound = document.getElementById(`${"bip" + bipCounter}`)
    bipSound.volume = 0.2
    bipSound.currentTime = 0
    bipSound.play()

    //Aplicamos estados

    switch (estadoFicha) {
        case "x2":
            combo.textContent = `${"+" + damageCombo}`
            combo.classList.add("comboAnimation")
            await esperar(400)
            x2effect.currentTime = 0
            x2effect.play()
            combo.textContent = "x2"
            combo.classList.add("x2text")
            await esperar(300)
            damageCombo = damageCombo * 2
            combo.textContent = `${"+" + damageCombo}`
            combo.classList.remove("x2text")
            break;
        default:
            combo.textContent = `${"+" + damageCombo}`
            combo.classList.add("comboAnimation")
            break;
    }

    //Aplicamos efectos de combo

    if (dadosRestantes > 1) {

        let estimateMoney = 0;

        estimateMoney = damageCombo * betCombo

        //Efectos de intensidad de combo

        let vignetteScreen = document.getElementById("vignetteScreen")

        if (estimateMoney > playerHP * 10 / 100 && bipCounter == 1) {
            bipCounter = 2
            document.body.classList.add(`${"shake" + bipCounter}`)
        }

        if (estimateMoney > playerHP * 20 / 100 && bipCounter == 2) {
            bipCounter = 3
            document.body.classList.add(`${"shake" + bipCounter}`)
        }

        if (estimateMoney > playerHP * 30 / 100 && bipCounter == 3) {
            bipCounter = 4
            document.body.classList.add(`${"shake" + bipCounter}`)

            bmusic.volume = 0.10
            bmusic_effects.volume = 0.15
            for (let i = 0; i < 0.3; i = i + 0.05) {
                vignetteScreen.style.opacity = i
                await esperar(100)
            }
        }

        if (estimateMoney > playerHP * 40 / 100 && bipCounter == 4) {
            bipCounter = 5
            document.body.classList.add(`${"shake" + bipCounter}`)

            bmusic.volume = 0.15
            bmusic_effects.volume = 0.30
            for (let i = 0.3; i < 0.5; i = i + 0.05) {
                vignetteScreen.style.opacity = i
                await esperar(100)
            }
        }

        if (estimateMoney > playerHP * 50 / 100 && bipCounter == 5) {
            bipCounter = 6
            document.body.classList.add(`${"shake" + bipCounter}`)

            bmusic.volume = 0.05
            bmusic_effects.volume = 0.5
            for (let i = 0.5; i < 0.7; i = i + 0.05) {
                vignetteScreen.style.opacity = i
                await esperar(100)
            }
        }

        if (estimateMoney > playerHP * 60 / 100 && bipCounter == 6) {
            bipCounter = 7
            document.body.classList.add(`${"shake" + bipCounter}`)

            //Efecto de pantalla negativa
            negativeScreen.style.display = "block"
            bmusic.volume = 0
            bmusic_effects.volume = 0.7
            impactBass.currentTime = 0
            impactBass.play()
            for (let i = 0.7; i < 1; i = i + 0.05) {
                vignetteScreen.style.opacity = i
                await esperar(100)
            }
            await esperar(3700)
            impactBass.pause()
        }

    }

    if (bipCounter > 7) {
        bipCounter = 1
    }
}