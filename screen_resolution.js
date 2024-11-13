async function screen() {
    // Escucha el evento 'screen-resolution' y recibe el ancho y alto
    ipcRenderer.on('screen-resolution', (event, { width, height }) => {
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
    contenedor.style.width = `${screenX*1000/1920}px`
    contenedor.style.height = `${screenX*100/1920}px`
    contenedor.style.gap = `${screenX*10/1920}px`
    contenedor.style.padding = `${screenX*10/1920}px`

    let manoJugada = document.getElementById("manoJugada")
    manoJugada.style = `top: ${screenX * 500 / 1920}px; margin-left: ${screenX * (-500) / 1080}px;`
    manoJugada.style.width = `${screenX * 300 / 1920}px`

    let contadorFichas = document.getElementById("contadorFichas")
    contadorFichas.style = `margin-bottom: ${screenX * 20 / 1920}px;`
    contadorFichas.style.width = `${screenX * 50 / 1920}px`

    let combo = document.getElementById("combo")
    combo.style = `margin-bottom: ${screenX * 650 / 1920}px; margin-left: ${screenX * (-400) / 1920}px;`
    combo.style.width = `${screenX * 500 / 1920}px`

    let vidaJugador = document.getElementById("vidaJugador")
    vidaJugador.style = `padding: ${screenX * 20 / 1920}px; margin-left: ${screenX * (-250) / 1920}px; margin-right: ${screenX * 100 / 1920}px;`
    vidaJugador.style.transform = `scale(${screenX*100/1920}%)`

    let hpLoss = document.getElementById("hpLoss")
    hpLoss.style = `margin-bottom: ${screenX * 60 / 1920}px; margin-left: ${screenX * (-1350) / 1920}px;`
    hpLoss.style.transform = `scale(${screenX*100/1920}%)`

    let hpGain = document.getElementById("hpGain")
    hpGain.style = `margin-bottom: ${screenX * 60 / 1920}px; margin-left: ${screenX * (-1350) / 1920}px;`
    hpGain.style.transform = `scale(${screenX*100/1920}%)`

    let ratHp = document.getElementById("ratHp")
    ratHp.style = `margin-bottom: ${screenY * 900 / 1080}px; margin-left: ${screenX * (1600) / 1920}px;`
    ratHp.style.transform = `scale(${screenX*100/1920}%)`

    // Recorremos las hojas de estilo cargadas
    for (let sheet of document.styleSheets) {
        // Recorremos las reglas CSS de cada hoja
        for (let rule of sheet.cssRules) {
            // Buscamos la clase que queremos modificar
            if (rule.selectorText === '.dado') {
                rule.style.width = `${screenX * 33 / 1920}px`
                rule.style.height = `${screenX * 82 / 1920}px`
                rule.style.transform = `scale(${screenX*260/1920}%) !important`
            }else if (rule.selectorText === '.passB') {
                rule.style = `position: absolute; margin-bottom: ${screenY * 82 / 1080}px;
                margin-right: ${screenX * (-130) / 1920}px;
                margin-left: ${screenX * (1500) / 1920}px;
                width: ${screenX * 94 / 1920}px;
                height: ${screenX * 63 / 1920}px;
                -webkit-user-drag:none !important;
                -moz-user-drag: none !important;
                -ms-user-drag: none !important;
                -webkit-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
                transform: scale(390%)`
            }else if (rule.selectorText === '.dadoJugado'){
                rule.style = `
                width: ${screenX * 73 / 1920}px;
                height: ${screenX * 39 / 1920}px;
                margin-left: ${screenX*(-60)/1920}px;
                -webkit-user-drag:none !important;
                -moz-user-drag: none !important;
                -ms-user-drag: none !important;
                -webkit-user-select: none !important;
                -moz-user-select: none !important;
                -ms-user-select: none !important;
                user-select: none !important;
                transform: scale(210%)`
            }
        }
    }



    minmax = Math.floor(screenX * 218 / 1920)
    desplazamientoManoJugada = Math.floor(screenX * (450) / 1980)
    desplazamientoManoJugadaOld = desplazamientoManoJugada
    desplazamientoManoJugada = -desplazamientoManoJugada

}


screen() // Llama a la función screen para obtener la resolución de la pantalla

//-------------------------------------------------------------------------------------------------------------------------------------------------------
