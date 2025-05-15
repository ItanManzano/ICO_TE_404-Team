//###################################################
//Lo siguiente es para la pagina de """teoria.html"""
document.querySelectorAll('.info-box.visible .custom-list li').forEach((item, index) => {
    item.style.setProperty('--order', index);
});
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de aparición de los cuadros al hacer scroll
    const infoBoxes = document.querySelectorAll('.info-box');

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 4;

        infoBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if(boxTop < triggerBottom) {
                box.classList.add('visible');
            } else {
                box.classList.remove('visible');
            }
        });
    }

    // Ejecutar al cargar y al hacer scroll
    checkBoxes();
    window.addEventListener('scroll', checkBoxes);

    // Cambiar imagen de fondo cada 10 segundos (opcional)
    const background = document.querySelector('.fondoteo');
    const images = [
        'url(./assets/fondodef.jpg)'
    ];

    let currentImage = 0;

    function changeBackground() {
        currentImage = (currentImage + 1) % images.length;
        background.style.opacity = 0;

        setTimeout(() => {
            background.style.backgroundImage = images[currentImage];
            background.style.opacity = 1;
        }, 500);
    }
});
//Fin del codigo Js para la pagina Teoria.html
//###################################################
