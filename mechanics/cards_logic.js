/*

This script contains the logic behind the cards of the game.

*/

async function cardsLogic(params) {
    //Desplazar dados mano jugada
    let manoJugadaIA = document.getElementById('manoJugada');
    dragSound.currentTime = 0
    dragSound.play();
    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada - screenX}px`

    await esperar(700);

    TTS("Pick a card fool.")

    await esperar(700);

    //Aparece el contenedor de las cartas

    let cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.style = 'display: flex !important;';

    //Aparecen las cartas

    let cards = document.querySelectorAll('.card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].style = 'display: block !important;';
        await esperar(500);
    }

    /*
    //Desplazar dados mano jugada de nuevo a su posición original
    dragSound.currentTime = 0
    dragSound.play();
    manoJugadaIA.style.marginLeft = `${desplazamientoManoJugada}px`
    */
}