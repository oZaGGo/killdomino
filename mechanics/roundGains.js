async function gains(params) {
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

    let nextCashContainer = document.getElementById('nextCashContainer');
    let nextCashText = `NEXT CASH ${playerHP * Math.round(ronda/exedCash)}$ !`;
    let nextCashTextInput = ""
    for (let i = 0; i < nextCashText.length; i++) {
        mechanicalSound.currentTime = 0;
        mechanicalSound.play();
        nextCashTextInput += nextCashText[i];
        nextCashContainer.innerText = nextCashTextInput;
        await esperar(140);
    }

    await esperar(500);

    let roundDamageContainer = document.getElementById('roundDamageContainer');
    let roundDamageText = `ROUND DAMAGE -${roundDamage + Math.round((playerHP/(15-exedCash)))}$ !`;
    let roundDamageTextInput = ""
    for (let i = 0; i < roundDamageText.length; i++) {
        mechanicalSound.currentTime = 0;
        mechanicalSound.play();
        roundDamageTextInput += roundDamageText[i];
        roundDamageContainer.innerText = roundDamageTextInput;
        await esperar(140);
    }

    await esperar(1000);
    nextCashContainer.innerText = "";
    roundDamageContainer.innerText = "";
    gainsContainer.style = 'display: none !important;';
    filterScreen.style = 'display: none !important;';
    audios.forEach(audio => {
        if (!audio.paused && audio.id != "atmos") {
            audio.volume = 0.5;
        }
    });
}