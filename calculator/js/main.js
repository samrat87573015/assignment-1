const calculatorForm = document.getElementById("calculatorForm");

calculatorForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const calculateOperators =
    document.getElementById("calculateOperators").value;
  const displayResult = document.getElementById("result");
  let result;

  if (num1 === "" || isNaN(num1) || num2 === "" || isNaN(num2)) {
    result = "Enter vaild Number";
    displayResult.classList.remove("alert-success");
    displayResult.classList.add("alert-danger");
  } else {
    displayResult.classList.add("alert-success");
    displayResult.classList.remove("alert-danger");

    if (calculateOperators === "addition") {
      let addition = num1 + num2;
      result = `Result: ${addition} `;
    } else if (calculateOperators === "subtraction") {
      let subtraction = num1 - num2;
      result = `Result: ${subtraction} `;
    } else if (calculateOperators === "multiplication") {
      let multiplication = num1 * num2;
      result = `Result: ${multiplication} `;
    } else if (calculateOperators === "division") {
      if (num2 !== 0) {
        let division = num1 / num2;
        result = `Result: ${division.toFixed(2)}`;
      } else {
        displayResult.classList.remove("alert-success");
        displayResult.classList.add("alert-warning");
        result = "Cannot divide by zero";
      }
    } else {
      result = "Invalid";
    }
  }

  displayResult.style.display = "block";
  displayResult.textContent = result;
});
