window.onload = function() {
	let status = document.getElementById('status');
	status.innerHTML = 'great!';
	let header = document.querySelector('h1');
	header.innerHTML = 'A Stellar Record of My Performance';
	let studentName = document.getElementsByClassName('student');
	for (let i = 0; i < studentName.length; i++) {
		studentName[i].innerHTML = 'Darya';
	}
	let grade = document.getElementsByClassName('grade');
	for (let i = 0; i < grade.length; i++) {
		grade[i].innerHTML = '5+';
	}


	
	function makeCapitalLetters(element) {
		let capitalized = element.innerHTML.toUpperCase();
		console.log(capitalized) ;
	}

	let element = document.getElementById('status');
	makeCapitalLetters(element);
	
}