"use strict";
let canvas = document.querySelector("#icanvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#heroi");

const altura = 170;
const largura = 120;
const QDE_MOVIMENTO = 8;
const VELOC_ATUALIZA = 70;

let posx = 0;
let posy = 325;
let direcao = "l";


function limpaCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHeroi() {
    ctx.drawImage(img, posx, posy, largura, altura);
}


desenhaHeroi();

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
    desenhaHeroi();
    terminarJogo();
}

let repeticao = setInterval(repeticaoPrincipal, VELOC_ATUALIZA);

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
    if(posx + largura >= 1000)
    {
    clearTimeout(repeticao);
    alert("Você ganhou!!!\n Tentamos colocar a parede, mas não sabiamos como fazer isso");
    }
}