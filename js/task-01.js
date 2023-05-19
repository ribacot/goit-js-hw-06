const categoriesEl = document.querySelector("#categories");
console.log('Numbers categories: '+ categoriesEl.childElementCount);
const arrChildren = [...categoriesEl.children];
arrChildren.forEach((element) => {
	console.dir("Category: " + element.firstElementChild.textContent);
	console.dir("Elements: " + element.lastElementChild.childElementCount);
});
