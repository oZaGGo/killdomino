const dadosS = document.querySelectorAll('.dado'); // Seleccionar todas las imágenes con clase 'dado'
        const sonidoHoverDado = document.getElementById('sonidoHoverDado');

        dadosS.forEach(dado => {
            dado.addEventListener('mouseenter', () => {
                sonidoHoverDado.currentTime = 0; // Reiniciar el sonido al inicio
                sonidoHoverDado.play(); // Reproducir el sonido
            });
        });