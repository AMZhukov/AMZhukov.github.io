'use strict';

const handlerTarget = (element) => {
    if (element.style.display === 'block') {
        return (element.style.display = 'none');
    } else {
        element.style.display = 'block';
    }
};

const modalWindows = (buttonStart, elem, buttonClose, windowClass, hideStartButton) => {
    const element = document.querySelector(elem);
    document.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest(buttonStart)) {
            handlerTarget(element);
            if (hideStartButton) {
                const hideStartButtonClick = document.querySelector(hideStartButton);
                hideStartButtonClick.style = 'display: none';
            }
        } else if (target.closest(buttonClose) && element.style.display  === 'block' /*|| target.closest('.close_icon')*/) { // Это для кнопки ОК. В случае наличия крестика необходима кусочек раскомментировать
            handlerTarget(element);
            //} else if (target.tagName === 'A' && target.closest('.active-menu')) {
            //     handlerMenu(); //menu.style.display = 'none';
        } else if (!target.closest(windowClass) && element.style.display === 'block') { // выключение меню при нажатии на фон
            handlerTarget(element);
        }
    });
    window.onkeydown = function( event ) {
        if ( event.code === 'Escape' && element.style.display === 'block') {
            handlerTarget(element);
        }
    };

};

export default modalWindows;
