// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

const refs = {
  inputEl: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxEl: document.querySelector('#boxes'),
};
refs.inputEl.addEventListener('input', onInput);

refs.createBtn.addEventListener('click', CreateBoxes);

refs.destroyBtn.addEventListener('click', onDestroyBtn);

function onInput() {
  
  console.log(Number(refs.inputEl.value));
};


function CreateBoxes() {
  let fragment = new DocumentFragment();
  let numArr = [];
  
  for (let i = 0; i < Number(refs.inputEl.value); i+=1){
      const divEl = document.createElement('div');
      const size = 30 + i * 10 + 'px';
      divEl.style.width = size;
      divEl.style.height = size;
      divEl.style.backgroundColor = getRandomHexColor();
       numArr.push(divEl);
       fragment.append(divEl);
  };
  refs.boxEl.append(fragment);
};



function onDestroyBtn(event) {
  refs.boxEl.innerHTML = '';
  refs.inputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



