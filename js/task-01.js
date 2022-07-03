const categoryItemEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoryItemEl.length);


const listEl = [...categoryItemEl];



const elements = listEl.map((elem, i) => {
      console.log('Category:', listEl[i].firstElementChild.textContent);
      console.log('Elements:', listEl[i].lastElementChild.children.length);
})





