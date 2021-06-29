"use strict";
let canvas = document.getElementById("meu-canvas");
let ctx = canvas.getContext("2d");
let img = document.querySelector("#imagem");

let posx = 0;
let posy = 0;

 const QDE_MOVIMENTO = 10;

 //LIMPAR A TELA
function limpar() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
 }
// DESENHAR A LINDINHA
 function DesenhaLulu(){
    ctx.drawImage(img, posx,posy);
 }
 //CHAMA A FUNÇÃO
 DesenhaLulu();

//QUANDO UMA TECLA ESTIVER PRESSONADA
 document.onkeydown = function(evento) {
 //ENQUANTO A POSIÇÃO NÃO FIGUAL A DA FIGURA DO MACACO, REPETE
    if(posy!==390 || posx!==620){
    switch (evento.key) {
        case "ArrowUp":
            if (posy > 0)
                posy -= QDE_MOVIMENTO;
            break;
        case "ArrowDown":
            if (posy + img.height < canvas.height)
                posy += QDE_MOVIMENTO;
            break;
        case "ArrowRight":
            if (posx + img.width < canvas.width)
                posx += QDE_MOVIMENTO;
            break;
        case "ArrowLeft":
            if (posx > 0)
                posx -= QDE_MOVIMENTO;
            break;

        default:
            break;

    }
// LIMPA AS OUTRAS IMAGENS DOS MOVIMENTOS DA LINDINHA
    limpar();
    DesenhaLulu();
 }
 // SE CHEGAR NA IMAGEM DO MACACO, GANHA O JOGO E REINICIA A POSIÇÃO
 else{
    alert("PARABÉNS, VOCÊ É UM GANHADOR E SABE DAR UMA BOA FACADA HEEIN!! APERTE OK E JOGUE NOVAMENTE!");
    ctx.clearRect(620, 390, canvas.width, canvas.height);
    posy=0;
    posx=0;
   DesenhaLulu();
}
}

