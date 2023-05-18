const container = document.querySelector('.container');
const question= document.querySelector('.question');
const btnsim = document.querySelector('.btn-sim');
const btnNao = document.querySelector('.btn-nao');

const containerRect = container.getBoundingClientRect();
const btnNaoRect = btnNao.getBoundingClientRect();

btnsim.addEventListener('click', () => {
    question.innerHTML = 'ENTÃO PODE DAR O QUE PROMETEU!';   
});

btnNao.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (containerRect.width-btnNaoRect.width)) +1;   
    const j = Math.floor(Math.random () * (containerRect.height-btnNaoRect.height)) +1;

    btnNao.style.left = i +'px';
    btnNao.style.top = j +'px';
});