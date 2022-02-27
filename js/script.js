"use strict";

//------------------------Burger Header-------------------------------------

const burgerHeader = document.querySelector('.header-top-menu-list');

document.addEventListener("click", headerAddClass);

function headerAddClass(event) {

    if (event.target.closest('.header-top-burger')) {
        burgerHeader.classList.toggle('_active');
    }

    if (!event.target.closest('.header-top')) {
        burgerHeader.classList.remove('_active');
    }
    

}

//-------------------------------------------------------------------------


//Test Field------------------------------------------------------------





//--------------------------------------------------------------------------------