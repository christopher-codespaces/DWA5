// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check if either or both inputs are empty
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return; // Exit the function
  }

  // Check if either input is not a number
  if (isNaN(dividend) || isNaN(divider)) {
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Invalid input. Non-numeric values provided.");
    return; // Exit the function
  }

  const dividendNumber = parseFloat(dividend);
  const dividerNumber = parseFloat(divider);

  // Check if the divider is zero
  if (dividerNumber === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Invalid division. Division by zero.");
    return; // Exit the function
  }

  const divisionResult = dividendNumber / dividerNumber;

  // Check if the division result is a whole number or a decimal number
  if (!Number.isInteger(divisionResult)) {
    result.innerText = "The number " + Math.floor(divisionResult) + " with no decimal should be shown";
  } else {
    result.innerText = divisionResult;
  }
});
