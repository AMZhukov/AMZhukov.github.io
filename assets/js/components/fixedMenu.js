const fixedMenu = (selector) => {
    const burgerMenu = document.querySelector(selector);
        const heightElem = burgerMenu.offsetTop;
    window.addEventListener('scroll', () => {
        // console.log(burgerMenu.getBoundingClientRect().top, burgerMenu.offsetTop, document.documentElement.clientHeight, pageYOffset);
        if (burgerMenu.getBoundingClientRect().top < 0) { // getBoundingClientRect().y - расстояние от верха страницы до меню.
            burgerMenu.style.position = 'fixed'; // фиксация строки меню
        }
        if (pageYOffset < heightElem && getComputedStyle(burgerMenu, null).position === 'fixed') { // pageYOffset - сколько пролистано на данный момент. offsetTop - базовая высота от верха страницы до требуемого элеменат
            burgerMenu.style.position = 'static'; // фиксация строки меню
        }
    });
};
export default fixedMenu;
