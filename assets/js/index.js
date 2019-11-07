import modalWindows from './components/modalWindows';
// import viewDropList from './components/viewDropList';
import sendForm from './components/sendForm';
// import returnTop from './components/scrollToFirstPage';
import toggleMenu from './components/toggleMenu';
import fixedMenu from "./components/fixedMenu";
import returnTop from "./components/scrollToFirstPage";



// viewDropList('ul', '.clubs-list');
modalWindows( '.header__send-form', '.popup', '.popup__close-form', '.popup__form-content'); // Вызов модального окна «Записаться на бесплатные визит»
//checkSquare('#check');
//checkSquare('#check2');
sendForm('#form1');
// toggleMenu();
fixedMenu('.header__middle');
returnTop('.toTop');
