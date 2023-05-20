const counterEl = document.querySelector("#counter");
const decrementEl = counterEl.firstElementChild;
const incrementEl = counterEl.lastElementChild;
const counterValueEl = counterEl.children[1];
let counterValue = 0;

const decrementFn = (e) => {
	counterValue -= 1;
	counterValueEl.textContent = counterValue;
};
const incrementFn = () => {
	counterValue += 1;
	counterValueEl.textContent = counterValue;
};

decrementEl.addEventListener("click", decrementFn);
incrementEl.addEventListener("click", incrementFn);
