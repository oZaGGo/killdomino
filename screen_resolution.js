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

    let manoJugada = document.getElementById("manoJugada")
    manoJugada.style = `top: ${screenX * 500 / 1980}px; margin-left: ${screenX * (-500) / 1080}px;`
    manoJugada.style.width = `${screenX * 300 / 1980}px`

    let contadorFichas = document.getElementById("contadorFichas")
    contadorFichas.style = `margin-bottom: ${screenY * 20 / 1080}px;`
    contadorFichas.style.width = `${screenX * 50 / 1980}px`

    let passB = document.getElementById("passB")
    passB.style.width = `${screenX * 94 / 1980}px`
    passB.style.height = `${screenY * 63 / 1080}px`
    passB.style = `margin-left: ${screenX * 1500 / 1980}px;`
    passB.style = `margin-right: ${screenY * (-130) / 1080}px;`
    passB.style = `margin-bottom: ${screenY * 86 / 1080}px;`

    let combo = document.getElementById("combo")
    combo.style = `margin-left: ${screenX * (-400) / 1980}px;`
    combo.style = `margin-bottom: ${screenY * 650 / 1080}px;`
    combo.style.width = `${screenX * 500 / 1980}px`

    let vidaJugador = document.getElementById("vidaJugador")
    vidaJugador.style = `margin-left: ${screenX * (-250) / 1980}px;`
    vidaJugador.style = `margin-right: ${screenX * 120 / 1980}px;`
    vidaJugador.style = `padding: ${screenX * 20 / 1980}px;`

    let hpLoss = document.getElementById("hpLoss")
    hpLoss.style = `margin-left: ${screenX * (-1350) / 1980}px;`
    hpLoss.style = `margin-bottom: ${screenY * 60 / 1080}px;`

    let hpGain = document.getElementById("hpGain")
    hpGain.style = `margin-left: ${screenX * (-1350) / 1980}px;`
    hpGain.style = `margin-bottom: ${screenY * 60 / 1080}px;`

    let ratHp = document.getElementById("ratHp")
    ratHp.style = `margin-left: ${screenX * (1600) / 1980}px;`
    ratHp.style = `margin-bottom: ${screenY * 900 / 1080}px;`

}


screen() // Llama a la función screen para obtener la resolución de la pantalla

//-------------------------------------------------------------------------------------------------------------------------------------------------------
