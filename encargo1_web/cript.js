document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('interactive-image');
    const sound = document.getElementById('click-sound');
    const images = ['imagenes/puertacerradafoto.png', 'imagenes/puertabiertafoto.png'];
    let currentIndex = 0;

    // Desactiva el clic después del primer clic
    let hasClicked = false;

    image.addEventListener('click', () => {
        if (!hasClicked) {
            // Reproduce el sonido
            sound.play().catch(error => console.error('Error al reproducir el sonido:', error));

            // Desactiva el clic para evitar volver a escuchar el sonido
            hasClicked = true;

            // Cambia la imagen con un retraso
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                image.src = images[currentIndex];
            }, 1500); // Retraso de 1500 ms (1.5 segundos)
        }
    });
});









