const navMain = document.querySelector('.main-header__nav');
const navMenu = document.querySelector('.main-header__nav');
const menuList = navMenu.querySelector('ul');

const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onMenuClick = () => {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    menuList.addEventListener('click', onCloseMenuClick);
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    menuList.removeEventListener('click', onCloseMenuClick);
  }
};


const onCloseMenuClick =(evt) => {
  if((navMain.classList.contains('nav--opened')) || isEscKey(evt) || (evt.target.tagName === 'a')) {
    navMain.classList.remove('nav--opened');
    navMenu.classList.add('nav--closed');
    navMenu.removeEventListener('click', onCloseMenuClick);
    document.removeEventListener('keydown', onCloseMenuClick);
    menuList.removeEventListener('click', onCloseMenuClick);
  }
};

export {onCloseMenuClick, onMenuClick};
