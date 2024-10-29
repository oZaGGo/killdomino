async function lose() {
    if(playerHP<=0){
        console.log("Has perdido")
        await esperar(2000);
        ipcRenderer.send('lose');
    }
}
