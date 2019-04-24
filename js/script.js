var toggle = document.querySelector('.main-nav__toggle');
var mainNav = document.querySelector('.main-nav__list');
var modal = document.querySelector('.modal--wrapper');
var modalCloseBtn = document.querySelector('.modal__close');
var catalogLink = document.querySelectorAll('.catalog__link');

toggle.addEventListener('click', function() {
  mainNav.classList.toggle('main-nav__list--open');
});

catalogLink.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  });
});

modalCloseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  modal.classList.remove('modal--open');
  document.body.style.overflow = 'auto';
});

