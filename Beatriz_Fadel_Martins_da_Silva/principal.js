"use strict";
alert("Tarefa realizada pelos alunos Beatriz Fadel Martins da Silva e João Pedro Civita do Nascimento.\n\nOBS.: Não conseguimos centralizar o ponto de destino do jogo com o centro do planeta. Por favor, nos ajude a entender como fazer isso!")
let canvas = document.querySelector("#icanvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#heroi");
const altura = 60;
const largura = 60;
const QDE_MOVIMENTO = 1;
const VEL_ATUALIZA = 0;
let posx = 0;
let posy = 540;
let direcao = "";


function limpaCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHeroi() {
    ctx.drawImage(img, posx, posy, largura, altura);
}

desenhaHeroi();

function repeticaoPrincipal() {
    if (posx == 700 && posy == 0) {
        terminarJogo();
    }

    switch (direcao) {
        case "n":
            if (posy > 0)
                posy -= QDE_MOVIMENTO;
            break;
        case "s":
            if (posy + altura < canvas.height)
                posy += QDE_MOVIMENTO;
            break;
        case "l":
            if (posx + largura < canvas.width)
                posx += QDE_MOVIMENTO;
            break;
        case "o":
            if (posx > 0)
                posx -= QDE_MOVIMENTO;
            break;
        default:
            break;
    }
    limpaCanvas();
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(720, 0, 10, 10);
    desenhaHeroi();
}

let repeticao = setInterval(repeticaoPrincipal, VEL_ATUALIZA);

document.onkeydown = function(evento) {
    switch (evento.key) {
        case "ArrowUp":
            if (direcao != "s")
                direcao = "n";
            break;
        case "ArrowDown":
            if (direcao != "n")
                direcao = "s";
            break;
        case "ArrowLeft":
            if (direcao != "l")
                direcao = "o";
            break;
        case "ArrowRight":
            if (direcao != "o")
                direcao = "l";
            break;
        default:
            break;
    }
}

function terminarJogo() {
    clearTimeout(repeticao);
    alert("Parabéns! Você conseguiu ajudar o Carlos!");
    document.location.reload();
}