const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');
const listItemElements = ingredients.map(text => {
  const listItemEl = document.createElement('li')
  listItemEl.classList.add('item');
  listItemEl.textContent = text;
  return listItemEl;
});

listEl.append(...listItemElements);
console.log(listItemElements);