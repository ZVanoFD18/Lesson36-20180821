'use strict';
/*
 n 0 1 2 3 4  5
!n 1 1 2 6 24 120
*/
function FactorialArray(n) {
	var result = 1;
	for (let i = 1; i <= n; i++) {
		result *= i;
		// console.log(i, result);
	}
	return result;
}

function FactorialRecursion(n) {
	let result = undefined;
	if (n <= 1) {
		result = 1;
	} else {
		result = n * FactorialRecursion(--n);
	}
	// console.log(n, result);
	return result;
}
// console.log('FactorialArray(5)', FactorialArray(5));
// console.log('FactorialRecursion(5)', FactorialRecursion(5));
function CheckTime(fCall) {
	let timeBeg = Date.now();
	let fResult = fCall();
	let timeEnd = Date.now();
	let result = {
		timeBeg: timeBeg,
		timeEnd: timeEnd,
		timeDiff: timeEnd - timeBeg,
		fResult: fResult
	};
	return result;
}
const N = 11000;
let checkResult = {
	n: N,
	FactorialArray: CheckTime(function() {
		return FactorialArray(N);
	}),
	FactorialRecursion: CheckTime(function() {
		return FactorialRecursion(N);
	}),
	total: undefined
};
if (checkResult.FactorialArray.timeDiff > checkResult.FactorialRecursion.timeDiff) {
	checkResult.total = 'Рекурсия быстрее.';
} else if (checkResult.FactorialArray.timeDiff < checkResult.FactorialRecursion
	.timeDiff) {
	checkResult.total = 'Цикл быстрее';
} else {
	checkResult.total = 'Одинаковое время выполнения';
}
console.log(checkResult);
alert('Детальный результат в консоли браузера. Кратко - ' + checkResult.total);
