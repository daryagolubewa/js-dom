window.onload = function() {

let box = document.querySelector('.box');
let changeStyleButton = document.querySelector('.change-style');
let addClassButton = document.querySelector('.add-class');
let changeWidth = document.querySelector('.change-width');
let removeBorder = document.querySelector('.remove-class-border');

changeStyleButton.addEventListener('click', function () {
  box.style.backgroundColor = 'red';
});

addClassButton.addEventListener('click', function () {
  box.classList.add('border');
});

changeWidth.addEventListener('click', function() {
	box.style.width = '400px';
})

removeBorder.addEventListener('click', function() {
	box.classList.remove('border');
})
};


//Добавить кнопку, которая изменяет ширину окна до 400 пикселей.
//Добавить кнопку, которая удаляет класс границы из окна. (Подсказка: метод называется remove вместо add.)