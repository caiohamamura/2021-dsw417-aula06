var canvas;
var ctx;
var dx = 50;
var x = 30;
var y = 0;
var WIDTH = 500;
var HEIGHT = 520;
var tile1 = new Image();
var posicao = 0;
var NUM_POSICOES = 6;

function KeyDown(evt){
    switch (evt.keyCode) {
    case 39: 
    if (x + dx < WIDTH){
    x += dx;
    posicao++;
    if(posicao == NUM_POSICOES)
    alert("Você ganhou!")
    }
    break;
    }
   }

   function Desenhar() {
    tile1.src = posicao+".png";
    ctx.drawImage(tile1, x, y);
   }

   function LimparTela() {
    ctx.fillStyle = "rgb(233,233,233)";
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();
   }

   function Atualizar() {
    LimparTela();
    Desenhar();
   }

   function Iniciar() {
 canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");
 return setInterval(Atualizar, 100);
}
function terminarjogo(){
    if(posicao == NUM_POSICOES){
        alert("Você ganhou!"); 
    }
} 

window.addEventListener('keydown', KeyDown);
Iniciar();

