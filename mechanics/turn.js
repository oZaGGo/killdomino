//Resetear todo lo necesario para la nueva mano
async function handReset() {
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
    taptap.style.pointerEvents = "auto";
    contenedor.style.pointerEvents = "auto";
}

async function fixHandReset() {
    await esperar(1600);
    handReset();
}

async function checkIfRoundWin(){
    if (dadosRestantes<=0){
        taptap.style.pointerEvents = "none";
        contenedor.style.pointerEvents = "none"
        //await gains(); de momento no se usa
        ronda++;
        exedCash = exedCash + 0.3;
        roundDamage = roundDamage + Math.round((playerHP/(15-exedCash)));
        playerHP = playerHP * Math.round(ronda/exedCash);

        if (coinEarnings==true){
            playerHP = Math.floor(playerHP + (playerHP * 0.1)); //Aumento del dinero en un 10% al tener el onjeto de la moneda
        }

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

        turnObject++ //Aumento el turno de objetos que requieren de una activa
        blankUsed = false; //Reinicio el uso de la carta en blanco
        
        let objectContainer = document.getElementById("objectContainer");
        objectContainer.style= "display: none !important";

        let objects = document.querySelectorAll('.objects');

        for (object of objects){
            object.removeEventListener("click", fixHandReset);
        }
        await boxLogic();
    }


}
