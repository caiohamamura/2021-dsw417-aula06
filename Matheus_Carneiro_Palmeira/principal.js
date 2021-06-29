"use strict";
let canvas = document.querySelector("#icanvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#ptera");

const altura = 100;
const largura = 120;
const QDE_MOVIMENTO = 5;
const VEL_ATUALIZA = 50;

let posx = 0;
let posy = 0;
let direcao = "l";


function limpaCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaPtera() {
    ctx.drawImage(img, posx, posy, largura, altura);
}

desenhaPtera();

function repeticaoPrincipal() {
    // Voce pode verificar se ganhou aqui dentro!
  
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
    desenhaPtera();
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
    alert("Você ganhou!");
}