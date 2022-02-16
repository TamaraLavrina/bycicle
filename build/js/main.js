import { onCloseMenuClick, onMenuClick } from './menu.js';
import { onPhoneInput } from './form.js';

const navMain = document.querySelector('.main-header__nav');
const navToggle = document.querySelector('.nav__toggle');
const form = document.querySelector('.order-form');
const userPhone = form.querySelector('#userPhone');
const iFrame = document.querySelector('#iframe');
const navMenu = document.querySelector('.main-header__nav');
const menuList = navMenu.querySelector('ul');
const page = document.querySelector('html');

page.classList.remove('no-js');
navMain.classList.remove('nav--nojs');

if (iFrame) {
  iFrame.removeAttribute('hidden')
}

if(navMenu) {
  navMenu.classList.add('nav--closed');
}


navToggle.addEventListener('click', onMenuClick);
navMenu.addEventListener('keydown', onCloseMenuClick);
menuList.addEventListener('click', onCloseMenuClick);
userPhone.addEventListener('input', onPhoneInput);
