function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultElement = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "❌ Please enter valid numbers.";
    resultElement.style.color = "red";
    return;
  }

  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        resultElement.textContent = "⚠ Division by zero is not allowed.";
        resultElement.style.color = "red";
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultElement.textContent = "❌ Invalid operation.";
      return;
  }

  resultElement.textContent = `✅ Result: ${result}`;
  resultElement.style.color = "#16a34a";
}
