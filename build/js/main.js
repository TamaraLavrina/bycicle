'use strict';
(function () {
  var navMain = document.querySelector('.main-header__nav');
  var navToggle = document.querySelector('.nav__toggle');
  var form = document.querySelector('.order-form');
  var userPhone = form.querySelector('#userPhone');
  var phoneRegEx = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  var iFrame = document.querySelector('#iframe');
  var navMenu = document.querySelector('.main-header__nav');
  var menuList = navMenu.querySelector('ul');
  var submit = document.querySelector('button[type="submit"]');

  navMain.classList.remove('nav--nojs');

  function validatePhone(input) {
    if (!phoneRegEx.test(input.value)) {
      input.setCustomValidity(
          'Номер телефона должен содержать не менее 7 цифр');
    } else {
      input.setCustomValidity('');
    }
    input.reportValidity();
  }

  userPhone.addEventListener('input', function (evt) {
    validatePhone(evt.target);
  });

  submit.addEventListener('submit', function (evt) {
    validatePhone(evt.target);
  });

  if (iFrame) {
    iFrame.removeAttribute('hidden');
  }
  if (navMenu) {
    navMenu.classList.add('nav--closed');
  }

  function onMenuClick() {
    if (navMain.classList.contains('nav--closed')) {
      navMain.classList.remove('nav--closed');
      navMain.classList.add('nav--opened');
      menuList.addEventListener('click', function () {
        onCloseMenu();
      });
    } else {
      navMain.classList.add('nav--closed');
      navMain.classList.remove('nav--opened');
      menuList.removeEventListener('click', function () {
        onCloseMenu();
      });
    }
  }

  navToggle.addEventListener('click', function () {
    onMenuClick();
  });

  function onCloseMenu(evt) {
    if ((navMain.classList.contains('nav--opened')) || evt.key === 'Escape' || evt.key === 'Esc' || (evt.target.tagName === 'a')) {
      navMain.classList.remove('nav--opened');
      navMenu.classList.add('nav--closed');
      navMenu.removeEventListener('click', function () {
        onCloseMenu();
      });
      document.removeEventListener('keydown', function () {
        onCloseMenu();
      });
      menuList.removeEventListener('click', function () {
        onCloseMenu();
      });
    }
  }

  navMenu.addEventListener('keydown', function () {
    onCloseMenu();
  });
  menuList.addEventListener('click', function () {
    onCloseMenu();
  });
}());
