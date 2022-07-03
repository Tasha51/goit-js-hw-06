// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btn: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
  body: document.querySelector('body'),
};

refs.btn.addEventListener('click', onBtnClick);

function onBtnClick() {
  let randomColor = getRandomHexColor();

  refs.color.textContent = randomColor;
  refs.body.style.backgroundColor = randomColor;
};