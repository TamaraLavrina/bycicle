'use strict';

const navMain = document.querySelector('.main-header__nav');
const navToggle = document.querySelector('.nav__toggle');
const form = document.querySelector('.order-form');
const userPhone = form.querySelector('#userPhone');
const phoneRegEx = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const iFrame = document.querySelector('#iframe');
const navMenu = document.querySelector('.main-header__nav');
const menuList = navMenu.querySelector('ul');

navMain.classList.remove('nav--nojs');

const validatePhone = (input) => {
  if(!phoneRegEx.test(input.value)) {
    input.setCustomValidity(
      'Номер телефона должен содержать не менее 7 цифр');
  } else {
    input.setCustomValidity('');
  }
  input.reportValidity();
};

const onPhoneInput = (evt) => {
  validatePhone(evt.target);
};

userPhone.addEventListener('input', onPhoneInput);


const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

if (iFrame) {iFrame.removeAttribute('hidden')};
if(navMenu) {
  navMenu.classList.add('nav--closed');
}

const onMenuClick = () => {
    if (navMain.classList.contains('nav--closed')) {
      navMain.classList.remove('nav--closed');
      navMain.classList.add('nav--opened');
      menuList.addEventListener('click', onCloseMenu);
    } else {
      navMain.classList.add('nav--closed');
      navMain.classList.remove('nav--opened');
      menuList.removeEventListener('click', onCloseMenu);
    }
};

navToggle.addEventListener('click', onMenuClick);

const onCloseMenu =(evt) => {
  if((navMain.classList.contains('nav--opened')) || isEscKey(evt) || (evt.target.tagName === 'a')) {
    navMain.classList.remove('nav--opened');
    navMenu.classList.add('nav--closed');
    navMenu.removeEventListener('click', onCloseMenu);
    document.removeEventListener('keydown', onCloseMenu);
    menuList.removeEventListener('click', onCloseMenu);
  }
};

navMenu.addEventListener('keydown', onCloseMenu);
menuList.addEventListener('click', onCloseMenu);
