const inputEl = document.querySelector("#name-input");
const titleEl = document.querySelector("#name-output");

const chengInputText = () => {
	titleEl.textContent = inputEl.value.trim();
	if (titleEl.textContent.length === 0) {
		titleEl.textContent = "Anonymous";
	}
};

inputEl.addEventListener("input", chengInputText);
