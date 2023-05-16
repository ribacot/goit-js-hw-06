const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElIngredients = document.querySelector("#ingredients");
const liEl = ingredients.map(() => document.createElement("li"));
liEl.map((el, index) => el.append(ingredients[index]));
liEl.map((el) => el.classList.add("item"));
ulElIngredients.append(...liEl);
