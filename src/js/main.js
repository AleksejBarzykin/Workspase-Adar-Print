let btnText = document.querySelectorAll(".btn-list__title");

/* Смена цвета кнопки по клику*/

for (let i = 0; i < btnText.length; i++) {
	btnText[i].onclick = () => {
		btnText[i].classList.toggle("colorClick");
	};
}
// console.log(btnText[i]);









