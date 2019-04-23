var toggle = document.querySelector('.main-nav__toggle');
var mainNav = document.querySelector('.main-nav__list');

var modal = document.querySelector('.modal--wrapper');
var modalCloseBtn = document.querySelector('.modal__close');
var catalogLink = document.querySelectorAll('.catalog__link');

toggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav__list--open')) {
    mainNav.classList.remove('main-nav__list--open');
  } else {
    mainNav.classList.add('main-nav__list--open');
  }
});

for(var i = 0; i < catalogLink.length; i++) {
  catalogLink[i].addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden'; 
  });
}


modalCloseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  modal.classList.remove('modal--open');
  document.body.style.overflow = 'auto';
});
