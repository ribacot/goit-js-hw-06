const formEl = document.querySelector(".login-form");

const handlValidation = (e) => {
	e.preventDefault();
	const {
		elements: { email, password },
	} = e.target;

	if (email.value === "" || password.value === "") {
		return alert("Заполни все поля");
	}
	const userObj = { email: email.value, password: password.value };
	console.log({ email: email.value, password: password.value });
	e.target.reset();

	const userObjReturn = () => userObj;
	return userObjReturn();
};

formEl.addEventListener("submit", handlValidation);
console.log(userObj);
