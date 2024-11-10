// Escucha el evento 'trigger-pause' desde el proceso principal
ipcRenderer.on('trigger-pause', () => {
    pause(); // Llama a la función pause() cuando llega el mensaje
});

async function pause() {

    let background = document.getElementById('background');
    let ratHpContainer = document.getElementById('ratHp');
    if (pauseMenu == 0) {
        let grayFIlter = 0;
        for (let i = 0; i < 10; i++) {
            grayFIlter += 10;
            contenedor.style = 'filter: grayscale(' + grayFIlter + '%) !important;';
            background.style = 'filter: grayscale(' + grayFIlter + '%) !important;';
            passB.style = 'filter: grayscale(' + grayFIlter + '%) !important;';
            vidaJugador.style = 'filter: grayscale(' + grayFIlter + '%) !important;';
            ratHpContainer.style = 'filter: grayscale(' + grayFIlter + '%) !important;';
            manoJugada.style = 'filter: grayscale(' + grayFIlter + '%) !important;';
            await esperar(50);
        }
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
            if (!audio.paused && audio.id != "atmos") {
                bajarVolumenGradualmente(audio);
            }
        });
        pauseMenu++

        //Anular el click en los dados
        taptap.style.pointerEvents = "none";
        contenedor.style.pointerEvents = "none";
        passB.style.pointerEvents = "none";
        
        //Mostrar el menú de pausa
        let pauseMenuContainer = document.getElementById('pauseMenu');
        pauseMenuContainer.style = 'display: block !important;';

        //Asignar eventos a los botones del menú de pausa
        document.getElementById('exitButton').addEventListener('click', () => {
            ipcRenderer.send('close-app'); // Envía el mensaje para cerrar la aplicación
        });
    }else{
        pauseMenu = 0;
        let background = document.getElementById('background');
        let ratHpContainer = document.getElementById('ratHp');
        let grayFIlter = 100;
        for (let i = 0; i < 10; i++) {
            grayFIlter -= 10;
            contenedor.style = 'filter: grayscale(' + grayFIlter + '%) !important;';
            background.style = 'filter: grayscale(' + grayFIlter + '%) !important;';
            passB.style = 'filter: grayscale(' + grayFIlter + '%) !important;';
            vidaJugador.style = 'filter: grayscale(' + grayFIlter + '%) !important;';
            ratHpContainer.style = 'filter: grayscale(' + grayFIlter + '%) !important;';
            manoJugada.style = 'filter: grayscale(' + grayFIlter + '%) !important;';
            await esperar(50);
        }
        const audios = document.querySelectorAll("audio");
        audios.forEach(audio => {
            if (!audio.paused && audio.id != "atmos") {
                audio.volume = 0.5;
            }
        });
        taptap.style.pointerEvents = "auto";
        contenedor.style.pointerEvents = "auto";
        passB.style.pointerEvents = "auto";

        //Cerrar el menú de pausa
        let pauseMenuContainer = document.getElementById('pauseMenu');
        pauseMenuContainer.style = 'display: none !important;';
    }
    
}