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
let number1 = 0,
  number2 = 0;
	result = 0;

// initialize program
initializePrograme();

equal.addEventListener("click", calculateAnswer);

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", addNumberToPrompt);
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", assignOperator);
}

clear.addEventListener("click", initializePrograme);
backspace.addEventListener("click", removeLastDigit);

function addNumberToPrompt(event) {
  const n = event.target.textContent;

	if (operation == null) {
		if (prompt.value == 0) {
			prompt.value = n;
		} else {
			prompt.value += n;
		}
		number1 = (prompt.value[0] == ".") ? 0 + prompt.value : prompt.value;
	} else if (
		prompt.value == "+" ||
		prompt.value == "-" ||
		prompt.value == "*" ||
		prompt.value == "/"
	) {
		prompt.value = n;
		number2 = prompt.value;
	} else {
		prompt.value += n;
		number2 = (prompt.value[0] == ".") ? 0 + prompt.value : prompt.value;
	}
}

function assignOperator(event) {
  operation = event.target.textContent;
  prompt.value = operation;
}

function removeLastDigit() {
  let v = prompt.value.trim().split("");
  v.pop();
  v = v.join("");
  prompt.value = v;
  if (prompt.value == 0) prompt.value = "0";
}

function calculateAnswer() {
	const calcString = `${number1} ${operation} ${number2}`;
	// console.log(calcString)
	// return;
  result = eval(calcString);
	answer.value = result;
  prompt.value = calcString;
  number1 = result;
  operation = null;
}

function initializePrograme() {
  prompt.value = "0";
  answer.value = "";
}
