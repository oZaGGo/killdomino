async function screen() {
    // Escucha el evento 'screen-resolution' y recibe el ancho y alto
    ipcRenderer.on('screen-resolution', (event, { width, height }) => {
        console.log(`Ancho de pantalla: ${width}, Alto de pantalla: ${height}`);
        screenX = width
        screenY = height
    });

    await esperar(500) // Espera 500ms para obtener la resolución de la pantalla

    console.log(screenX, screenY)


    //Cambios de estilo para machear tipos de pantallas

    let background = document.getElementById("background")
    background.style.width = `${screenX}px`
    background.style.height = `${screenY}px`

    let contenedor = document.getElementById("contenedor")
    contenedor.style.transform = `scale(${Math.round(screenX*100/1920)}%)`

    let manoJugada = document.getElementById("manoJugada")
    manoJugada.style = `top: ${screenX * 500 / 1920}px; margin-left: ${screenX * (-500) / 1080}px;`
    manoJugada.style.width = `${screenX * 300 / 1920}px`
    manoJugada.style.transform = `scale(${screenX*100/1920}%)`

    let contadorFichas = document.getElementById("contadorFichas")
    contadorFichas.style = `margin-bottom: ${screenY * 20 / 1080}px;`
    contadorFichas.style.width = `${screenX * 50 / 1920}px`

    let passB = document.getElementById("passB")
    passB.style.width = `${screenX * 94 / 1920}px`
    passB.style.height = `${screenY * 63 / 1080}px`
    passB.style = `margin-left: ${screenX * 1500 / 1920}px;`
    passB.style = `margin-right: ${screenY * (-130) / 1080}px;`
    passB.style = `margin-bottom: ${screenY * 86 / 1080}px;`
    passB.style.transform = `scale(${screenX*100/1920}%)`

    let combo = document.getElementById("combo")
    combo.style = `margin-left: ${screenX * (-400) / 1920}px;`
    combo.style = `margin-bottom: ${screenY * 650 / 1080}px;`
    combo.style.width = `${screenX * 500 / 1920}px`

    let vidaJugador = document.getElementById("vidaJugador")
    vidaJugador.style = `margin-left: ${screenX * (-250) / 1920}px;`
    vidaJugador.style = `margin-right: ${screenX * 100 / 1920}px;`
    vidaJugador.style = `padding: ${screenX * 20 / 1920}px;`
    vidaJugador.style.transform = `scale(${screenX*100/1920}%)`

    let hpLoss = document.getElementById("hpLoss")
    hpLoss.style = `margin-left: ${screenX * (-1350) / 1920}px;`
    hpLoss.style = `margin-bottom: ${screenY * 60 / 1080}px;`
    hpLoss.style.transform = `scale(${screenX*100/1920}%)`

    let hpGain = document.getElementById("hpGain")
    hpGain.style = `margin-left: ${screenX * (-1350) / 1920}px;`
    hpGain.style = `margin-bottom: ${screenY * 60 / 1080}px;`
    hpGain.style.transform = `scale(${screenX*100/1920}%)`

    let ratHp = document.getElementById("ratHp")
    ratHp.style = `margin-left: ${screenX * (1600) / 1920}px;`
    ratHp.style = `margin-bottom: ${screenY * 900 / 1080}px;`
    ratHp.style.transform = `scale(${screenX*100/1920}%)`



    desplazamientoManoJugada = screenX * (450) / 1980
    desplazamientoManoJugadaOld = desplazamientoManoJugada
    desplazamientoManoJugada = -desplazamientoManoJugada

}


screen() // Llama a la función screen para obtener la resolución de la pantalla

//-------------------------------------------------------------------------------------------------------------------------------------------------------
