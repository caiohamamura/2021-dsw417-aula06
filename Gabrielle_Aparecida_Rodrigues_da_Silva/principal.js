// <!-- Gabriele Amoroso, Gabrielle Rodrigues e Luana Tomaz -->
"use strict";
// variáveis
let canvas = document.getElementById("meu-canvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#menina");
let img2 = document.querySelector("#carro");
let img3 = document.querySelector("#escola");
let posx = 0;
let posy = 0;
let direcao = "l";
let vida = 3;
let timer = setInterval(repeticaoPrincipal, 10);

// constante
const QDE_MOVIMENTO = 1;

function limparCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function organizando() {
        ctx.drawImage(img3, 400, 325 ,200, 200);
        ctx.drawImage(img2, 200, 300, 60, 60);
        ctx.drawImage(img2, 170, 50, 60, 60);
        ctx.drawImage(img2, 170, 400, 60, 60);
        ctx.drawImage(img2, 300, 200 , 60, 60);
        ctx.drawImage(img2, 400, 150 , 60, 60);
      }


    //   posição da menina
function desenhando() {
    ctx.drawImage(img, posx, posy, 60, 60);
}

// movimento
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
        //  chegada na escola
    if(posx>=400 && posy>=325 && posy<=canvas.height-100)
    {
        terminar();
    }
    // carros
    if(posx>175 && posx<225 && posy>299 && posy<326)
    {
        armazenamento_vidas();
    }
     if(posx>145 && posx<195 && posy>49 && posy<75)
     {
         armazenamento_vidas();
     }
     if(posx>145 && posx<195 && posy>399 && posy<425)
     {
         armazenamento_vidas();
     }
     if(posx>275 && posx<325 && posy>199 && posy<235)
     {
         armazenamento_vidas();
     }
     if(posx>375 && posx<425 && posy>149 && posy<175)
     {
         armazenamento_vidas();
     }
 
     limparCanvas();
     desenhando();
     organizando();
  }


// contagem de vidas
function armazenamento_vidas()
{
    vida=vida-1;
    vidas();
}
// movimentação
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

// fim do jogo
function terminar() {
    clearInterval(timer);
    alert("Você ganhou! Reinicie a página para jogar novamente!");
    posx=0;
    posy=0;
}

//    vidas
function vidas() {
    clearInterval(timer);
    if(vida>1)
    {
    alert("ATENÇÃO! CUIDADO COM OS CARROS! Você ainda tem " + vida + " vidas.");
    timer = setInterval(repeticaoPrincipal, 10);
    posx=0;
    posxy=0;
 }
   else
   {
       if(vida==1)
       {
        alert("ATENÇÃO! CUIDADO COM OS CARROS! Você ainda tem " + vida + " vida.");
        timer = setInterval(repeticaoPrincipal, 10);
        posx=0;
        posxy=0;
       }
       else
       {
       alert("ATENÇÃO! Não há mais vidas: você perdeu. Recarregue a página para tentar novamente");
  
            }
   }
    
}
    

