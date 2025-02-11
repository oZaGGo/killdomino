/*

This script contains the ui logic and combo system of the game.


*/


async function comboLogic(estadoFIcha) {

    bipSound = document.getElementById(`${"bip" + bipCounter}`)
    bipSound.volume = 0.2
    bipSound.currentTime = 0
    bipSound.play()

    //Combo aplicado
    combo = document.getElementById("combo");
    comboNumber++;
    damageCombo = damageCombo + caraNecesaria;
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


    //Efectos de intensidad de combo


    document.body.classList.add(`${"shake" + bipCounter}`)

    bipCounter++

    if (bipCounter > 7) {
        bipCounter = 1
    }

    if (bipCounter == 4) {
        bmusic.volume = 0.10
        bmusic_effects.volume = 0.15
    }else if (bipCounter == 5) {
        bmusic.volume = 0.15
        bmusic_effects.volume = 0.30
    }else if (bipCounter == 6) {
        bmusic.volume = 0.05
        bmusic_effects.volume = 0.5
    }

    
    if (bipCounter == 7) {
        negativeScreen.style.display = "block"
        bmusic.volume = 0
        bmusic_effects.volume = 0.7
        impactBass.currentTime = 0
        impactBass.play()
    }
}