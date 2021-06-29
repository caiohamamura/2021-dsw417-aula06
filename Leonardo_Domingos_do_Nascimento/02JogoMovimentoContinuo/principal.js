"use strict";
let canvas = document.getElementById("meu-canvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#aranha");

let posx = 0;
let posy = 0;
let direcao = "l";

const QDE_MOVIMENTO = 1;

function limparCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHeroi() {
    ctx.drawImage(img, posx, posy, 100, 150);
}

function repeticaoPrincipal() {
    switch (direcao) {
        case "l":
            if (posx + img.width < canvas.width)
                posx += QDE_MOVIMENTO;
            break;
        case "o":
            if (posx > 0)
                posx -= QDE_MOVIMENTO;
            break;
        case "n":
            if (posy > 0)
                posy -= QDE_MOVIMENTO;
            break;
        case "s":
            if (posy + img.height < canvas.height)
                posy += QDE_MOVIMENTO;
            break;

        default:
            break;
    }

    limparCanvas();
    desenhaHeroi();
}

let timer = setInterval(repeticaoPrincipal, 10);

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
        case "ArrowRight":
            if (direcao != "o")
                direcao = "l";
            break;
        case "ArrowLeft":
            if (direcao != "l")
                direcao = "o";
            break;

        default:
            break;
    }
}

function terminouJogo() {
    clearInterval(timer);
    alert("Você ganhou!");
}