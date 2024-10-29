const { ipcRenderer } = require('electron');
async function win() {
    if(dadosRestantes<=0){
        console.log("Has ganado")
        dadosRestantes=7;
        await esperar(2000);
        ipcRenderer.send('win');
    }
}
