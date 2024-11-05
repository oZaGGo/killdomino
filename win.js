const { ipcRenderer } = require('electron');
async function win() {
    if(ratHP<=0){
        console.log("Has ganado")
        await esperar(2000);
        ipcRenderer.send('win');
    }
}
