const categoryListEl = document.querySelector('#categories');
const categoriesItemElements = categoryListEl.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItemElements.length}`);

const categoriesTitlevalues = [...categoriesItemElements].map(item => item.querySelector('h2').textContent);
const categoriesElementsAmount = [...categoriesItemElements].map(item => item.querySelectorAll('ul li').length);

categoriesTitlevalues.forEach((category, index) => {
    console.log(`Category: ${category}`);
    console.log(`Elements: ${categoriesElementsAmount[index]}`)
});
