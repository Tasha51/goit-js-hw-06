// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const decreaseBtn = document.querySelector('button[data-action="decrement"]');
const increaseBtn = document.querySelector('button[data-action="increment"]');

const result = document.querySelector('#value');



let counterValue = 0;



function onIncreaseBtnClick() {
    counterValue +=1;
    return result.textContent = counterValue;
};
console.log();




function onDecreaseBtnClick() {
    counterValue -=1;
    return result.textContent = counterValue;
};

increaseBtn.addEventListener('click', onIncreaseBtnClick);

decreaseBtn.addEventListener('click', onDecreaseBtnClick);