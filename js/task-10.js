function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const controlsEl = document.querySelector("#controls");
const counterEl = controlsEl.firstElementChild;
const createEl = controlsEl.children[1];
const destroyEl = controlsEl.lastElementChild;
const containerEl = document.querySelector("#boxes");
let amount = null;


const createBoxes = () => {
	const divEls = new Array(amount)
		.fill("")
		.map((el, i) => {
			const color = getRandomHexColor();
			return `<div style="height: ${i * 10 + 30}px; width: ${
				i * 10 + 30
			}px; background-color:${color}"></div>`;
		})
		.join("");
	containerEl.insertAdjacentHTML("afterbegin", divEls);
};

const destroyBoxes = () => {
  containerEl.innerHTML = "";
  counterEl.value = "";
};

counterEl.addEventListener("blur", () => (amount = Number(counterEl.value)));
createEl.addEventListener("click", createBoxes);
destroyEl.addEventListener("click", destroyBoxes)
