async function TTS(text){

    let enemyText = document.getElementById("enemyText");

    if (enemyText.innerText !== "") {
        enemyText.innerText = "";
    }

    let beeep = document.getElementById("beeep");
    beeep.volume = 0.1;
    let peeppop = document.getElementById("peeppop");
    peeppop.volume = 0.1;
    let tantantun = document.getElementById("tantantun");
    tantantun.volume = 0.1;
    let tiiun = document.getElementById("tiiun");
    tiiun.volume = 0.1;
    let tintintun = document.getElementById("tintintun");
    tintintun.volume = 0.1;
    let tuun = document.getElementById("tuun");
    tuun.volume = 0.1;
    let tuuntuun = document.getElementById("tuuntuun");
    tuuntuun.volume = 0.1;

    let ruido = document.getElementById("ruido");
    ruido.loop = true;
    ruido.volume = 1;
    ruido.currentTime = 0;
    ruido.play();

    enemyText.style = "display:block !important";
    
    for (let i = 0; i < text.length; i++){
        const char = text[i];
        if (char === ' ') {
            // Handle space character
            enemyText.innerHTML += '&nbsp;';
            continue;
        }

        /*

        const numeroRandom = Math.floor(Math.random() * 7) + 1;
        switch (numeroRandom){
            case 1:
                beeep.currentTime = 0;
                beeep.play();
                break;
            case 2:
                peeppop.currentTime = 0;
                peeppop.play();
                break;
            case 3:
                tantantun.currentTime = 0;
                tantantun.play();
                break;
            case 4:
                tiiun.currentTime = 0;
                tiiun.play();
                break;
            case 5:
                tintintun.currentTime = 0;
                tintintun.play();
                break;
            case 6:
                tuun.currentTime = 0;
                tuun.play();
                break;
            case 7:
                tuuntuun.currentTime = 0;
                tuuntuun.play();
                break;
        }
                */
        enemyText.innerHTML += char;
        await esperar(100);
    }
    ruido.pause();
    await esperar(3000);
    enemyText.innerText = "";
    enemyText.style = "display:none !important";

}