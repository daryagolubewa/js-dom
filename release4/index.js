
window.onload = function() {

	let box = document.querySelector('.box');
	/*let colorInput = document.getElementById('color');
	let changeColorButton = document.querySelector('.change-color');*/
	let addMessage = document.getElementById('add-message');
	let inputMessage = document.getElementById('very-important-message');

	let inputAddCss = document.getElementById('add-css');
	let inputCssName = document.getElementById('add-name');
	let addCss = document.getElementById('add-css-button');


	/*changeColorButton.addEventListener('click', function () {
		let color = colorInput.value;
		box.style.backgroundColor = color;
	});*/

	addMessage.addEventListener('click', function() {
		let boxText = inputMessage.value;
		box.innerText = boxText; 

	});

	addCss.addEventListener('click', function(){
		let cssProp = inputAddCss.value;
		let cssValue = inputCssName.value;
		box.style[cssProp] = cssValue; 
	})

};


