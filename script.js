document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("addBtn").addEventListener("click", function () {
		const num1 = parseFloat(document.getElementsByName("num1")[0].value);
		const num2 = parseFloat(document.getElementsByName("num2")[0].value);
		add(num1, num2);
	});

	document.getElementById("multiplyBtn").addEventListener("click", function () {
		const num1 = parseFloat(document.getElementsByName("num1")[1].value);
		const num2 = parseFloat(document.getElementsByName("num2")[1].value);
		multiply(num1, num2);
	});

	document.getElementById("capitalizeBtn").addEventListener("click", function () {
		const word = document.getElementsByName("word")[0].value;
		capitalize(word);
	});

	document.getElementById("lastLetterBtn").addEventListener("click", function () {
		const word = document.getElementsByName("word")[1].value;
		lastLetter(word);
	});
});

function add(a, b) {
	document.getElementById("addResult").textContent = "Result: " + (a + b);
}

function multiply(a, b) {
	document.getElementById("multiplyResult").textContent = "Result: " + (a * b);
}

function capitalize(str) {
	document.getElementById("capitalizeResult").textContent =
	"Result: " + str.charAt(0).toUpperCase() + str.slice(1);
}

function lastLetter(str) {
	document.getElementById("lastLetterResult").textContent = "Result: " + str.charAt(str.length - 1);
}
