async function checkIfRoundWin(){
    if (dadosRestantes<=0){
        taptap.style.pointerEvents = "none";
        contenedor.style.pointerEvents = "none"
        if (bellTouched==false){
            await iaTalk(2);
        }
        //await gains(); de momento no se usa
        ronda++;
        exedCash = exedCash + 0.3;
        roundDamage = roundDamage + Math.round((playerHP/(15-exedCash)));
        playerHP = playerHP * Math.round(ronda/exedCash);
        vidaJugador.textContent = `CASH ${playerHP}$`;
        console.log("Has ganado la ronda")

        if (dadosInvisiblesRestantes==3){
            for (let i = 8; i <= 10; i++){
                let dadoR = document.getElementById(`dado${i}`)
                dadoR.remove();
            }
        }else if (dadosInvisiblesRestantes==2){
            for (let i = 9; i <= 10; i++){
                let dadoR = document.getElementById(`dado${i}`)
                dadoR.remove();
            }
        }else if (dadosInvisiblesRestantes==1){
            let dadoR = document.getElementById(`dado10`)
            dadoR.remove();
        }

        await boxLogic();

        //Resetear todo lo necesario para la nueva mano
        await esperar(500);
        dadosRestantes=7;
        dadosInvisiblesRestantes=3;
        dadosMano=10;
        contadorFichas.innerText = `3/3`
        fichasContadas=3;
        contenedor.style.gridTemplateColumns = `repeat(10, 1fr)`
        dadosVisibles = [];
        dadoInvisible = 8;
        randomizeHand();
        piecesLogic();
        hoverFunctions();
        taptap.style.pointerEvents = "auto";
        contenedor.style.pointerEvents = "auto";
    }

}
