//ALUNAS: ANA BEATRIZ RODRIGUES MESQUITA E GABRIELLA DE SOUSA CTII-417

"use strict";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#foguete");
let img2 = document.querySelector("#lua");

const altura = 150;
const largura = 150;
const QDE_MOVIMENTO = 1;
const VEL_ATUALIZA = 8;


let posxFoguete = 0;
let posyFoguete = 465;
let direcao = "1";

let posxLua = 890;
let posyLua = 200;


function limparCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function desenhaFoguete() {
    ctx.drawImage(img, posxFoguete, posyFoguete, largura, altura);
}

desenhaFoguete();

function desenhaLua() {
    ctx.drawImage(img2, posxLua, posyLua, 180, -180);
}

desenhaLua();

function repeticaoPrincipal() {
  
    switch (direcao) {
        case "n":
            if (posyFoguete > 0)
                posyFoguete -= QDE_MOVIMENTO;
            break;
        case "s":
            if (posyFoguete + altura < canvas.height)
                posyFoguete += QDE_MOVIMENTO;
            break;
        case "l":
            if (posxFoguete + largura < canvas.width)
                posxFoguete += QDE_MOVIMENTO;
            break;
        case "o":
            if (posxFoguete > 0)
                posxFoguete -= QDE_MOVIMENTO;
            break;


        default:
            break;
    }

    if (posyFoguete <= posyLua && posxFoguete >= posxLua){             
        terminarJogo();       
       }

    limparCanvas();
    desenhaLua();
    desenhaFoguete();
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
    alert("VOCÊ GANHOU!!");   
}