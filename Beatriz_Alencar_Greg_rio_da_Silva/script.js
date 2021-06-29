"use strict";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#coelho");
let img2 = document.querySelector("#cesta");
let img3 = document.querySelector("#arvore");

let posx = 0;
let posy = 0;
let direcao = "l";

const QDE_MOVIMENTO = 2;

function limparCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenhaCoelho() {
    ctx.drawImage(img, posx, posy, 250, 250);
   
}

function desenhaCesta() {
        ctx.drawImage(img2, 650, 550 ,95, 95);
       
      }

function desenhaArvore() {
    ctx.drawImage(img3, 550, 190, 500, 500);
   
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
    if(posx+img.width >= (canvas.width-650) && posy + img.height >= (canvas.height-40)){
        terminarJogo();
    }
    limparCanvas();
    desenhaCoelho();
    desenhaCesta();
    desenhaArvore();
    
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
    clearInterval(timer);
    alert("O coelho agradece! :)");

}