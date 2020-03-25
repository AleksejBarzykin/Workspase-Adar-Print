// console.log(multiple(4, 2));
// console.log(multiple(6, 2));
// console.log(multiple(8, 2));



// function btnBgColor() {
// 	this.style.background = 'green';
// }

// function green() {
// 	this.style.background = 'green'
// };
// function red() {
// 	this.style.background = 'red'
// };




// containerBtn = document.querySelectorAll('.container-title');
// containerBtn.forEach(function (element) {
// 	element.onclick = green;
// })



let big = document.querySelector(".bigg"),
	flag = "",
	colorBtn = ['green'];

function change() {

	for (let i = 0; i < colorBtn.length; i++) {

		if (flag == "") {
			big.className = 'bigg green';
			flag = "green";
		}
		else {
			big.className = "bigg";
			flag = "";
		}
	}
}
big.onclick = change;






// let big = document.querySelectorAll(".container-title"),
// 	flag = "",
// 	colorBtn = ['green'];

// function change() {

// 	for (let i = 0; i < colorBtn.length; i++) {

// 		if (flag == "") {
// 			big.className = 'container-title green';
// 			flag = "green";
// 		}
// 		else {
// 			big.className = "container-title";
// 			flag = "";
// 		}
// 	}
// }
// big.onclick = change;


// let elementClasses = elem.classList;
// const button = document.querySelector('button');
// let elem = document.querySelector("#bigg");
// elem.onclick = console.log('456')




