/* Смена цвета кнопки по клику*/

// let btnText = document.querySelectorAll(".btn-list__title");


// for (let i = 0; i < btnText.length; i++) {
// 	btnText[i].onclick = () => {
// 		btnText[i].classList.toggle("colorClick");
// 		console.log(btnText[i]);
// 	};
// }


/* Смена цвета кнопки по клику*/

// for (let i = 0; i < btnText.length; i++) {
// 	btnText[i].onclick = () => {
// 		btnText[i].classList.toggle("colorClick");
// 	};
// }


/* Заготовка материала */
let btnHarvesting = document.querySelector('.btn-harvesting');
let harvesting = document.querySelector('.harvesting');

btnHarvesting.onclick = () => {
	btnHarvesting.classList.toggle("colorClick");

	if (harvesting.style.opacity == 0) {
		harvesting.style.opacity = "1"
	}
	else {
		harvesting.style.opacity = "0"
	}
}


/* Печать */
let btnPrint = document.querySelector('.btn-print');
let print = document.querySelector('.print');

btnPrint.onclick = () => {
	btnPrint.classList.toggle("colorClick");

	if (print.style.opacity == 0) {
		print.style.opacity = "1"
	}
	else {
		print.style.opacity = "0"
	}
}
/* Ламинация */
let btnLamination = document.querySelector('.btn-lamination');
let lamination = document.querySelector('.lamination');

btnLamination.onclick = () => {
	btnLamination.classList.toggle("colorClick");

	if (lamination.style.opacity == 0) {
		lamination.style.opacity = "1"
	}
	else {
		lamination.style.opacity = "0"
	}
}
/* Тиснение фольгой */
let btnHotStamping = document.querySelector('.btn-hot-stamping');
let hotStamping = document.querySelector('.hot-stamping');

btnHotStamping.onclick = () => {
	btnHotStamping.classList.toggle("colorClick");

	if (hotStamping.style.opacity == 0) {
		hotStamping.style.opacity = "1"
	}
	else {
		hotStamping.style.opacity = "0"
	}
}
/* УФ-лакировка */
let btnVarnishing = document.querySelector('.btn-varnishing');
let varnishing = document.querySelector('.varnishing');

btnVarnishing.onclick = () => {
	btnVarnishing.classList.toggle("colorClick");

	if (varnishing.style.opacity == 0) {
		varnishing.style.opacity = "1"
	}
	else {
		varnishing.style.opacity = "0"
	}
}
/* Конгрев */
let btnColdStamping = document.querySelector('.btn-cold-stamping');
let coldStamping = document.querySelector('.cold-stamping');

btnColdStamping.onclick = () => {
	btnColdStamping.classList.toggle("colorClick");

	if (coldStamping.style.opacity == 0) {
		coldStamping.style.opacity = "1"
	}
	else {
		coldStamping.style.opacity = "0"
	}
}
/* Высечка */
let btnСarve = document.querySelector('.btn-carve');
let carve = document.querySelector('.carve');

btnСarve.onclick = () => {
	btnСarve.classList.toggle("colorClick");

	if (carve.style.opacity == 0) {
		carve.style.opacity = "1"
	}
	else {
		carve.style.opacity = "0"
	}
}
/* Склейка */
let btnGluingTogether = document.querySelector('.btn-gluing-together');
let gluingTogether = document.querySelector('.gluing-together');

btnGluingTogether.onclick = () => {
	btnGluingTogether.classList.toggle("colorClick");

	if (gluingTogether.style.opacity == 0) {
		gluingTogether.style.opacity = "1"
	}
	else {
		gluingTogether.style.opacity = "0"
	}
}
/* Порезка */
let btnCutting = document.querySelector('.btn-cutting');
let cutting = document.querySelector('.cutting');

btnCutting.onclick = () => {
	btnCutting.classList.toggle("colorClick");

	if (cutting.style.opacity == 0) {
		cutting.style.opacity = "1"
	}
	else {
		cutting.style.opacity = "0"
	}
}
/* Упаковка */
let btnPackaging = document.querySelector('.btn-packaging');
let packaging = document.querySelector('.packaging');

btnPackaging.onclick = () => {
	btnPackaging.classList.toggle("colorClick");

	if (packaging.style.opacity == 0) {
		packaging.style.opacity = "1"
	}
	else {
		packaging.style.opacity = "0"
	}
}









