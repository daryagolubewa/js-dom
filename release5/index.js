
/*Напишите js-функцию, которая создает таблицу, перед этим принимая от пользователя 2 числа: количество строк и колонок в таблице. 
Так же функция должна заполнить каждую ячейку таблицы номерами строки и колонки (Строка-1, Колонка-1; Строка-3, Колонка-2; ...)*/



window.onload = function() {

	

	button.addEventListener('click', function(event) {
let inputRows = document.getElementById('table-rows').value
	let inputColumns = document.getElementById('table-columns').value;
	let rows = parseInt(inputRows);
	let columns = parseInt(inputColumns);
	let button = document.getElementById('button');

		table1 = document.getElementById('myTable');
		tr = document.createElement('tr');
		td = document.createElement('td');

		console.log(tr,td)
		console.log(rows)
		for(let j = 0; j < rows; j++) {
			table1.appendChild(tr);

			for(let i = 0; i < columns; i++) {

				tr.appendChild(td);
				td.innerText = 'Строка-' + (j+1) + 'Столбец-' + (i+1);
			};
		};	
		event.preventDefault();
	});


	
	
}
	// console.log(button);
