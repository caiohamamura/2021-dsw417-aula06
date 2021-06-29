"use strict";

let canvas = document.querySelector("#meu-canvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#luffy");
let img2 = document.querySelector("#chegada");
const altura = 100;
const largura = 60;
const QDE_MOVIMENTO = 1;
const VEL_ATUALIZA = 0;
let posx = 0;
let posy = 0;
let direcao = "";


function limpaCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHeroi() {
    ctx.drawImage(img, posx, posy, largura, altura);
    ctx.drawImage(img2, 700, 500, 60, 60);
}

desenhaHeroi();

function repeticaoPrincipal() {
    if (posx == 700 && posy == 500) {
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
    // ctx.fillStyle = "rgb(200,0,0)";
    // ctx.fillRect(720, 0, 10, 10);
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
    alert("Parabéns! Agora o Luffy pode se deliciar com a sua carne!!");
    document.location.reload();
}