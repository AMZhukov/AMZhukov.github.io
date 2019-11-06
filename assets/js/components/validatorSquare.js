// class Validator{
//     constructor({selector, method}){
//         this.form = document.querySelector(selector);
//         this.method = method;
//         this.elementsForm = [...this.form.elements].filter(item => {
//             return item.tagName.toLowerCase() !== 'button' &&
//                 item.type !== 'button';
//         });
//         this.error = new Set();
//     }
//
//     init(){
//         this.applyStyle();
//         this.setPattern();
//         this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
//         this.form.addEventListener('submit', e => {
//             e.preventDefault();
//             this.elementsForm.forEach(elem => this.checkIt({target: elem}));
//             if (this.error.size) {
//                 e.preventDefault();
//             }
//         });
//     }
//
//     isValid(elem){
//         const validatorMethod = {
//             pattern(elem, pattern){
//                 return pattern.test(elem);
//             }
//         };
//         if (this.method) {
//             const method = this.method[elem.id];
//
//             if (method) {
//                 return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
//             }
//         } else {
//             console.warn('Необходимо передать id полей ввода и методы проверки этих полей! Для работы валидатора');
//         }
//
//         return true;
//     }
//
//
//
//     setPattern(){
//         if (!this.pattern.nameAndText) {
//             this.pattern.nameAndText = (/^[А-ЯЁ ]*$/i); //форма для только русских слов с пробелами
//         }
//     }
// }




//
// const eE = (selector1, selector2) => {
//     const eee = document.querySelector(selector1);
//     const elem = document.querySelectorAll(".personal-data")[selector2];
//     const lf = () => {
//         console.log(elem);
//         console.log(eee);
//         if (eee.checked == 0) {
//             // showSuccess(eee);
//             eee.removeAttribute('checked');
//             eee.classList.remove('success');
//             eee.classList.add('error');
//             //showSuccess(elem);
//             console.log(eee);
//             console.log(elem);
//             // applyStyle();
//         } else {
//             eee.setAttribute('checked', 'true');
//             eee.classList.remove('error');
//             eee.classList.add('success');
//             //showError(elem);
//             // showError(eee);
//             console.log(eee);
//             console.log(elem);
//
//             // applyStyle();
//
//         }
//     };
//     addEventListener('change', lf);
// };
//
// const showError = (elem) => {
//     elem.classList.remove('success');
//     elem.classList.add('error');
//     // if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
//     //     return;
//     // }
//     // const errorDiv = document.createElement('div');
//     // errorDiv.textContent = `Ошибка в этом поле`;
//     // errorDiv.classList.add('validator-error');
//     // elem.insertAdjacentElement('afterend', errorDiv);
// };
// const showSuccess = (elem) => {
//     elem.classList.remove('error');
//     elem.classList.add('success');
//     // if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
//     //     elem.nextElementSibling.remove();
//     //
//     // }
// };
// // const applyStyle = () => {
// //     const style = document.createElement('style');
// //     style.textContent = `
// //             input.success {
// //                 border: 2px solid yellow
// //             }
// //             input.error {
// //                 border: 2px solid red
// //             }
// //             .validator-error {
// //             font-size: 12px;
// //             font-family: sans-serif;
// //             color: red;
// //             }
// //         `;
// //     document.head.appendChild(style);
// // };
//
// eE("#check", 2);

//let error = new Set();
const checkSquare = (id) => {
    const idd = id;
    console.log(id, idd);
    console.log(document.querySelector(id));
    const square = document.querySelector(id);
    const check = () => {

        if (square.checked || square.getAttribute('error')) {
            square.classList.remove('error');
        } else {
            square.classList.add('error');
        }
    };
    square.addEventListener("change", check);
};
export default checkSquare;
//checkSquare('#check');