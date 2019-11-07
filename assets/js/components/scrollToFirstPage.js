const returnTop = (selectorUpButton) => {
    const arrowTop = document.querySelector(selectorUpButton);
    arrowTop.onclick = function () {
        window.scrollTo(pageXOffset, 0);
        // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
    };

    window.addEventListener('scroll',  () => {
        arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
        // arrowTop.hidden = true;
    });
};
export default returnTop;