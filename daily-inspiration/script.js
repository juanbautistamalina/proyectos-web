const btn = document.getElementById("boton-cambiar-frase");
const frase = document.getElementById("frase");
const autor = document.getElementById("autor");


function generarNumeroAleatorio(min, max){
    // No incluye máx.
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarFrase(){
    let indiceAleatorio = generarNumeroAleatorio(0, frases.length);
    frase.innerHTML = `"${frases[indiceAleatorio].texto}"`;
    autor.innerHTML = frases[indiceAleatorio].autor;
}

// Funcionalidad del Botón
btn.addEventListener("click", cambiarFrase)

// Inicialización de Frase y Autor
cambiarFrase();