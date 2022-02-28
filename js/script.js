"use strict";

//------------------------Burger Header-------------------------------------


const headerTop = document.querySelector('.header-top');
const addClassBurgerHeader = document.querySelector('.header-top-menu-burger__icon');

function addClassToHeader(event) {

    if (event.target.closest('.header-top-menu-burger__icon')) {
        addClassBurgerHeader.classList.toggle('_active');
    }

    if (!event.target.closest('.header-top')) {
        addClassBurgerHeader.classList.remove('_active');
    }

}

document.addEventListener('click', addClassToHeader);


//-------------------------------------------------------------------------