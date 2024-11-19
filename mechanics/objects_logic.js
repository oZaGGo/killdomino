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


async function boxLogic(){

    //Desplazar dados mano jugada
    const manoJugadaIA = document.getElementById('manoJugada');
    dragSound.currentTime=0
    dragSound.play();
    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada-screenX}px`  

    let objectBox = document.getElementById("objectBox");
    let boxFall = document.getElementById("boxFall");
    let boxFall2 = document.getElementById("boxFall2");
    let boxOpen = document.getElementById("boxOpen");
    let boxDestroyed = document.getElementById("boxDestroyed");
    boxFall.volume = 0.6;
    boxFall2.volume = 0.4;
    objectBox.style = "display: block";
    await esperar(1150);
    boxFall.play();
    boxFall2.play();
    await esperar(200);
    objectBox.src = `../sprites/UI/box/caixa19.png`;

    objectBox.addEventListener("click", async function(){
        if (boxFinish==false) {
            if(boxOpened){
                boxFinish = true;
                console.log(boxFinish);
                objectBox.src = `../sprites/UI/box/caixadesaparece.png`;
                await esperar(100);
                boxDestroyed.currentTime = 0.5;
                boxDestroyed.play();
                await esperar(1300);
                objectBox.style = "display: none !important";
                dragSound.currentTime=0
                dragSound.play();
                manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
            }else{
                objectBox.src = `../sprites/UI/box/caixabrindose.png`;
                boxOpen.play();
                await esperar(750);
                objectBox.src = `../sprites/UI/box/caixa30.png`;
                boxOpened = true;
            }
        }
        
    })
}