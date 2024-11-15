/*

This script contains the logic behind every object i nthe game.


*/


//Demon

async function demonLogic(){
    let demonChange = document.getElementById("demonChange");
    demonChange.volume = 0.6;

    const imagenes = document.querySelectorAll(".dado");
    for (imagen of imagenes) {
        if (imagen.style.display != "none") {
            demonChange.currentTime = 0;
            demonChange.play();
            imagen.src = `../sprites/dados/dado66.png`;
            imagen.className = `dado 66`;
            await esperar(350);
        }
    }
}