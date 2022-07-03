// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const textInput = document.querySelector('#validation-input');


textInput.addEventListener('blur', onTextInput);

function onTextInput(event) {
    if (event.currentTarget.value.length === 6) {
       textInput.style.borderColor = "#4caf50"
   } else
    textInput.style.borderColor = "#f44336"
};