const controlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = controlEl.value + "px";

const changeFontSize = (event) => {
	textEl.style.fontSize = event.currentTarget.value + "px";
};

controlEl.addEventListener("input", changeFontSize);
