const inputEl = document.querySelector("#validation-input");
const inputElLength = Number(inputEl.dataset.length);
const hasValid = (event) => {
	const evt = event.currentTarget;
	if (evt.value.length < inputElLength) {
		evt.classList.add("invalid");
		return;
	}
	evt.classList.add("valid");
};
inputEl.addEventListener("blur", hasValid);
