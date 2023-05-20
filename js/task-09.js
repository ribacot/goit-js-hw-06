function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const bodyEl = document.body;
const changeColorBtnEl = document.querySelector(".change-color");
const textColorEl = document.querySelector(".color");

const handlBodyEl = () => {
	const color = getRandomHexColor();
	bodyEl.style.backgroundColor = color;
	textColorEl.textContent = color;
};
changeColorBtnEl.addEventListener("click", handlBodyEl);
