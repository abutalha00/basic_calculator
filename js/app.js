const clear = document.getElementById("clear"),
  backspace = document.getElementById("backspace"),
  dot = document.getElementById("dot"),
  equal = document.getElementById("equal"),
  option = document.getElementById("option"),
  close = document.getElementById("close"),
  prompt = document.getElementById("prompt"),
  answer = document.getElementById("answer");
const number = document.getElementsByClassName("number");
let operation = null;
const operator = document.querySelectorAll(
  "#plus, #minus, #multiply, #division"
);

for (let i = 0; i < number.length; i++) {
	number[i].addEventListener("click", addNumberToPrompt);
}

for (let i = 0; i < operator.length; i++) {	
	operator[i].addEventListener("click", assignOperator);
}

clear.addEventListener("click", () => prompt.value = "0");
backspace.addEventListener("click", removeLastDigit)

function addNumberToPrompt(event) {
  let n = event.target.textContent;
	if (operator !== null){
		prompt.value = prompt.value != "0" ? prompt.value + n : n;
	} else {
		prompt.value = "0"
	}
	
}

function assignOperator(event) {
  operation = event.target.textContent;
	prompt.value = "0";
	prompt.value = operation;
}

function removeLastDigit() {
	let v = prompt.value.trim().split("");
	v.pop();
	v = v.join("")
	prompt.value = v;
	if (prompt.value == 0) prompt.value = "0";
}