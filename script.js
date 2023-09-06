const mario= document. querySelector('.mario');
const pipe= document. querySelector('.pipe');

    const jump= ()=> {
    mario.classList.add('jump');

    setTimeout(() => {
    mario.classList.remove('jump');
   }, 500)
}

const loop = setInterval(() => {

    console.log('loop')

  const pipeposition= pipe.offsetleft;
  const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');

  console.log(marioposition);
  
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

  pipe.style.animation = 'none';
  pipe.style.left = '${pipePosition}' ;

  clouds.style.animation = 'none';
  clouds.style.left = '${cloudsPosition}' ;

  mario.style.animation = 'none';
  mario.style.bottom = '${marioposition}px' ;

  mario.src = './imagem/game-over.png';
  mario.style.width = '75px'
  mario.style.marginLeft = '50px'

  clearInterval(loop);

  }

}, 10)

document.addEventListener('keydown', jump);