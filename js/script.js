const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu(e) {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

function initAcordion() {
    const listAccordion = document.querySelectorAll(".js-accordion dt");

    if(listAccordion.length) {
    function activeAccordion() {
    this.classList.add('ativo')
    this.nextElementSibling.classList.toggle('ativo');
}

    listAccordion.forEach((item) => {
    item.addEventListener('click', activeAccordion);
})
}
}

initAcordion();