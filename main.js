const iconHamburguer = document.querySelector('.header-hamburguer');
const iconClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal-container');
console.log(modal);

iconHamburguer.addEventListener('click', ()=>{
    modal.classList.toggle('active');

});

iconClose.addEventListener('click', ()=>{
    modal.classList.remove('active');
});
