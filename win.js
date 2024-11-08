const { ipcRenderer } = require('electron');
async function win() {
    if(playerHP>=maxBet){
        console.log("Has ganado")
        await esperar(2000);
        ipcRenderer.send('win');
    }
}
