// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.


const textInput = document.querySelector('#validation-input');
const checkLength = +textInput.dataset.length;


textInput.addEventListener('blur', onTextInput);

function onTextInput(event) {
    if (event.currentTarget.value.length === checkLength) {
        textInput.classList.toggle('valid');
   } textInput.classList.toggle('invalid');
};