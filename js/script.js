// js for nav //

const icone = document.querySelector('.navbar-mobile i');
const modal = document.querySelector('.modal')

icone.addEventListener('click', function(){
    // console.log('Le clique fonctionne')
    modal.classList.toggle('change-modal')
    icone.classList.toggle('fa-times')
});

