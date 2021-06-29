/* 
PROGRAMA FEITO POR Juan Pablo, Marcelo Gustavo e Vitória Linda.
*/

"use strict";
alert("Não passe perto do impostor!!!");
let canvas = document.querySelector("#icanvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#heroi");

const altura = 60;
const largura = 20;
const QDE_MOVIMENTO = 5;
const VEL_ATUALIZA = 50;

let posx = 0;
let posy = 0;
let direcao = "";


function limpaCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaHeroi() {
    ctx.drawImage(img, posx, posy, largura, altura);
}

desenhaHeroi();

function repeticaoPrincipal() {
    console.log("dir:"+direcao)
    console.log("y:" + posy);
    console.log("x: "+posx);
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

    //se pegar na cadeira
    if(posx>1115 && posx<1200 && posy>500 && posy<605)
    {
        alert("O IMPOSTOR TE MATOU!!!");
        direcao = "";
        posx = 0;
        posy = 0;
    }
    limpaCanvas();
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
    alert("Você ganhou!");
}