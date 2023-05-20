const inputEl = document.querySelector("#validation-input");
const inputElLength = Number(inputEl.dataset.length);

const handlHasValidForm = (event) => {
	const evt = event.currentTarget;
	if (evt.value.length < inputElLength) {
		evt.classList.remove("valid");
		evt.classList.add("invalid");
		return;
	}
	evt.classList.remove("invalid");
	evt.classList.add("valid");
};

inputEl.addEventListener("blur", handlHasValidForm);
