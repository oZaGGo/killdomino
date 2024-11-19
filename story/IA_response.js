async function iaTalk(number) {

    switch (number) {
        case 1:
            await esperar(1000);
            TTS("Hello dear friend...")
            await esperar(5000);
            TTS("We are gonna play a game of dice")
            await esperar(6000);
            TTS("I hope you are ready, becouse is gonna be a lot of fun")
            break;
        case 2:
            await esperar(1000);
            TTS("I see you know how to play this game")
            break;    
        default:
            TTS("Algo ha salido mal")
            break;    
    }
}