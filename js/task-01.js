// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).


const categoryItemEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoryItemEl.length);


const listEl = [...categoryItemEl];



listEl.forEach((elem, i) => {
      console.log('Category:', listEl[i].firstElementChild.textContent);
      console.log('Elements:', listEl[i].lastElementChild.children.length);
});





