var imagenes = document.getElementsByName('carrusel');
var posi = 0;
console.log(imagenes);
setInterval(function () {
    imagenes[posi].checked = true;
    posi++;

    if (posi == imagenes.length) {
        posi = 0;
    }
}, 3000);
