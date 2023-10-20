const values = [''];

const numbersHtml = document.getElementsByClassName('key numbers');
const resultHtml = document.getElementById('result');
const clearHtml = document.getElementById('clear');
const addHtml = document.getElementById('add')

const displayHtml = document.getElementById('display');

const display = (displayResult) => {
	displayHtml.textContent = '';
	
	for (let i = 0; i < values.length; i++) {
		displayHtml.textContent += values[i];
		
		if (i < values.length - 1) {
			displayHtml.textContent += ' + ';
		}
	}
	
	if (displayResult) {
		if (values.length > 1 && values[values.length - 1]) {
			
			let result = 0;
			for (let i = 0; i < values.length; i++) {
				result += parseInt(values[i]);
			}
 			displayHtml.textContent += ' = ' + result; // Unknown error
		}
	}
}
for (let i = 0; i < numbersHtml.length; i++) {
	numbersHtml[i].addEventListener('click', () => {

		if (i == 9) {
			values[values.length - 1] += '0';
		} else {
			values[values.length - 1] += i + 1;
		}
		display();
	});
}

addHtml.addEventListener('click', () => {
	if (values[values.length - 1]) {
		values.push('');
		display();
	}
});

resultHtml.addEventListener('click', () => {
	display(true);
});

clearHtml.addEventListener('click', () => {
	values.length = 0;
	values.push('');
	display();
});
