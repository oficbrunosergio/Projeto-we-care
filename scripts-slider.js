

const box = document.querySelector('.fundo-site');
const imagens = document.querySelectorAll('.fundo-site .slider');

let contador = 0

function slideres() {
    contador++;

   if (contador > imagens.length - 1) {
    contador = 0
   }

   box.style.transform = `translateX(${-contador * 4498}px)`;
}

setInterval( slideres , 4000 )