const formEl = document.querySelector(".login-form");

const handlLoginForm = (e) => {
	e.preventDefault();
	const {
		elements: { email, password },
	} = e.target;

	if (email.value === "" || password.value === "") {
		return alert("Заполни все поля");
	}
	const userObj = { email: email.value, password: password.value };
	console.log(userObj);
	e.target.reset();
};

formEl.addEventListener("submit", handlLoginForm);
