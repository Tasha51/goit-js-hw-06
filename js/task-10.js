// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

const refs = {
  inputEl: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxEl: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtn);

refs.destroyBtn.addEventListener('click', onDestroyBtn);

function onCreateBtn() {
  let amount = Number(refs.inputEl.value);
  console.log(amount);
  createBoxes(amount);
};


let size = 30;

function createBoxes() {
  
  for (let i = 0; i < Number(refs.inputEl.value); i += 1){ 
    const divEl = document.createElement('div');
    size +=10
    divEl.style.width = size + 'px';
    divEl.style.height = size + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    refs.boxEl.appendChild(divEl);
  };
  
};



function onDestroyBtn() {
  while (refs.boxEl.firstChild) {
    refs.boxEl.removeChild(refs.boxEl.firstChild);
  }

  size = 30;
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



