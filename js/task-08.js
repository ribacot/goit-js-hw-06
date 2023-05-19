const formEl = document.querySelector(".login-form");

const handlLoginForm = (e) => {
	e.preventDefault();
	const {
		elements: { email, password },
	} = e.target;

	if (email.value === "" || password.value === "") {
		return alert("Заполни все поля");
	}
	const userObjInner = { email: email.value, password: password.value };
	console.log({ email: email.value, password: password.value });
	e.target.reset();

	const userObjReturn = () => userObjInner;
	return userObjReturn();
};

const userObj = formEl.addEventListener("submit", handlLoginForm);
if (!userObj) {
	console.log("Введи логин и пароль))");
} else {
	console.log(userObj);
}
