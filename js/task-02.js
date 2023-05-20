const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ulElIngredients = document.querySelector("#ingredients");
const liEls = ingredients.map(() => document.createElement("li"));
liEls.map((el, index) => {
	el.textContent = ingredients[index];
	el.classList.add("item");
});
ulElIngredients.append(...liEls);
