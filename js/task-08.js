// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const maill = formElements.email.value;
    const password = formElements.password.value;
    


    if (maill == "" || password == "") {
        alert("All fields must be filled!");
    } else {
        const formData = {
            maill, password,
        };
        console.log(formData);
    }
    
    return formEl.reset();

     // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     console.log('onFormSubmit -> value', value);
    //     console.log('onFormSubmit -> name', name);
    // });
}