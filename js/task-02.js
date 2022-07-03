// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map((elem, i) => {
 const itemEl = document.createElement('li');
 itemEl.textContent = `${ingredients[i]}`;
 itemEl.classList.add('item');
  
  return itemEl;
})
console.log(elements);

const listEl = document.querySelector('#ingredients');
listEl.append(...elements);
