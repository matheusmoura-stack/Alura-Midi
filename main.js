function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    }

    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');


//While(enquanto) - For (para)
for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento /* é um nome de identificação dessa função*/) {

        console.log(evento.code == 'Space');

        if(evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
