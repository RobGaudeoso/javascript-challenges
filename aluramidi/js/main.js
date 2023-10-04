// Pom ---------------------------------------------
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === "audio") {
        elemento.play();
    } else {
        alert("Elemento não encontrado ou seletor inválido");
    }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

/*let contador = 0;

    while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    contador++;
}*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        console.log(evento);
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add("ativa");
        }
    };

    tecla.onkeyup = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.remove("ativa");
        }
    };
}
