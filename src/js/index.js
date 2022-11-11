// GLOBAL VARIABLES
const MENU_BREAKPOINT = 768;
const MENU_OPENED_CLASS = 'header__nav--open';

window.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('#toggle');
    const menu = document.querySelector('#menu');
    toggleButton.addEventListener('click', () => {
        menu.classList.contains(MENU_OPENED_CLASS) ? menu.classList.remove(MENU_OPENED_CLASS) : menu.classList.add(MENU_OPENED_CLASS);
    })
});

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    const menu = document.querySelector('#menu');
    if(windowWidth > MENU_BREAKPOINT) {
        menu.classList.contains(MENU_OPENED_CLASS) && menu.classList.remove(MENU_OPENED_CLASS);
    }
})