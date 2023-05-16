const categoriesEl = document.querySelector("#categories");
console.log("Number of categories: " + categoriesEl.childElementCount);
const arrChildren = [...categoriesEl.children];
arrChildren.forEach((element) => {
	console.dir("Category: " + element.firstElementChild.textContent);
	const ulEl = element.querySelector("ul");
	console.dir("Elements: " + ulEl.childElementCount);
});
