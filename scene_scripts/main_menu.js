const {ipcRenderer} = require('electron');
//Musica del juego y ambiente

const atmos = document.getElementById('atmos');

atmos.volume = 0.1;
atmos.loop = true;
atmos.play();


//Botones del menú principal

const playButton = document.getElementById('playButton');

const exitButton = document.getElementById('exitButton');

//Boton de jugar

playButton.addEventListener('click', () => {
    window.location.href = '../scenes/game.html';
})

//Boton de salir

exitButton.addEventListener('click', () => {
    ipcRenderer.send('close-app'); 
})

//Score

const score = document.getElementById('score');

score.innerText = `BEST SCORE ${leerDatos()}`;