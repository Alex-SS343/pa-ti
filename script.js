function abrirCarta() {
    document.getElementById("portada").style.display = "none";
    document.getElementById("carta").style.display = "block";

    const musica = document.getElementById("musica");
    if (musica) {
        musica.play().catch(() => {});
    }
}

function irGaleria() {
    document.getElementById("carta").style.display = "none";
    document.getElementById("galeria").style.display = "flex";
}

function verFinal() {
    document.getElementById("galeria").style.display = "none";
    document.getElementById("final").style.display = "block";
}
