async function checkIfRoundWin(){
    if (dadosRestantes<=0){
        console.log("Has ganado la ronda")
        ratHP--;
        const rathp = document.getElementById("ratHp");
        if (ratHP == 2){
            rathp.innerText = "**";
        }else if (ratHP == 1){
            rathp.innerText = "*";
        }

        await esperar(2000);
        dadosRestantes=7;
        dadosMano=10;
        contadorFichas.innerText = `3/3`
        fichasContadas=3;
        contenedor.style.gridTemplateColumns = `repeat(10, 1fr)`
        randomizeHand();
        piecesLogic();
        console.log("Dados restantes: "+dadosRestantes)
    }
}
