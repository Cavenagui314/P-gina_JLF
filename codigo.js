
let slideActual = 1;
mostrarServicio(slideActual);

function mostrarImagen (n){
    mostrarServicio(slideActual+= n);
}

function imagenActual(n){
    mostrarServicio(slideActual = n);
}

function mostrarServicio(n){
    let i;
    let slides = document.getElementsByClassName("parte_carusel fade");
    if (n > slides.length) {slideActual = 1}
    if (n < 1) {slideActual = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideActual -1].style.display = "block";
}


