const menuToggle = document.querySelector('.page-header__toggle');
const menu = document.querySelector('.main-nav');
const body = document.querySelector('.page-body');
const formModal = document.querySelector('.modal-form');
const modalCloseButton = formModal.querySelector('.modal-form__close-button');

const onMenuToggleClick = (evt) => {
  if (evt.target && evt.target.closest('.page-header__toggle--closed')) {
    menuToggle.classList.remove('page-header__toggle--closed');
    menuToggle.classList.add('page-header__toggle--opened')
    menu.classList.remove('main-nav--closed');
    menu.classList.add('main-nav--opened');
  } else if (evt.target && evt.target.closest('.page-header__toggle--opened')) {
    menuToggle.classList.remove('page-header__toggle--opened');
    menu.classList.remove('main-nav--opened');
    menuToggle.classList.add('page-header__toggle--closed');
    menu.classList.add('main-nav--closed');
  }
};

menuToggle.addEventListener('click', onMenuToggleClick);

const onBodyClick = (evt) => {
  if (evt.target && evt.target.closest('.buy-now-button')) {
    formModal.classList.add('modal-form--opened');
  }
};

body.addEventListener('click', onBodyClick);

const onModalCloseButtonClick = (evt) => {
  if (evt.target && evt.target.closest('.modal-form__close-button')) {
    formModal.classList.remove('modal-form--opened');
  }
};

modalCloseButton.addEventListener('click', onModalCloseButtonClick);
