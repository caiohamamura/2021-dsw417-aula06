"use strict";
let canvas = document.getElementById("meu-canvas");

let ctx = canvas.getContext("2d");
var img = document.querySelector("#Stive");
let img2 = document.querySelector("#Portal");

var posx = 0;
var posy = 0;
var direcao = "l";

var posx1 = 1100;
var posy1 = 300;
const QDE_MOVIMENTO = 2;

function limparCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHeroi() {
    ctx.drawImage(img, posx, posy, 100, 150);
}

function desenhaPortal() {
    ctx.drawImage(img2, posx1, posy1, 100, 150);
}

img.posy = 1100;
img.posx = 300;

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
    desenhaPortal();
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