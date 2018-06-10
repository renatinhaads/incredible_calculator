document.getElementById('calculate-button').onclick=function() {
	// Coletar números dentro das caixas de input
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');
	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);

// NaN Alert

	if (isNaN(val1)) {
		alert('Insira um valor!');
		document.getElementById('elem-1').focus();
	} 
	else if (isNaN(val2)) {
		alert('Insira um valor!');
		document.getElementById('elem-2').focus();
	} 
	else {

	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;
	let operationResult = getResult(val1, val2, operation);

	let resultElement = document.getElementById('result');
	resultElement.innerHTML = operationResult;
}

	/**
	* Returns the result of an operation ver two number.
	* Arguments: two valid numbers and one operation symbol.
	*Supports sum, subtraction, multiplication and division.
	*/

	function getResult(val1, val2, operation){
		if(operation === '+'){
		return val1 + val2;
	} else if(operation === '-'){
		return val1 - val2
	} else if (operation === '*'){
		return val1 * val2;
	} else if (operation === '/') {
		return val1 / val2;
	} else if (operation === '%') {
		return val1 /100 * val2;
	} else if (operation === '^') {
		return Math.pow(val1, val2);
	}
}
}