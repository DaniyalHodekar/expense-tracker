const form = document.querySelector("form");
const nameInput = document.querySelector("#expense-name");
const dateInput = document.querySelector("#date");
const amountInput = document.querySelector("#amount");
const addButton = document.querySelector(".btn");
const table = document.querySelector("table");
const emptyWarning = document.querySelector(".empty-warning");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valuesArray = [nameInput.value, dateInput.value, amountInput.value];
  createAndAppend(table, valuesArray);

  nameInput.value = "";
  dateInput.value = "";
  amountInput.value = "";

  updateEmptyWarningVisibility();
});

function createAndAppend(element, array) {
  const row = document.createElement("tr");

  const nameData = document.createElement("td");
  nameData.innerText = `${array[0]}`;
  const dateData = document.createElement("td");
  dateData.innerText = `${array[1]}`;
  const amountData = document.createElement("td");
  amountData.innerText = `${array[2]}`;
  const buttonData = document.createElement("td");

  const button = document.createElement("button");
  button.innerText = "X";
  button.style.backgroundColor = "lightcoral"
  button.addEventListener("click", () => {
    row.remove();
    updateEmptyWarningVisibility();
  });

  buttonData.appendChild(button);

  row.appendChild(nameData);
  row.appendChild(dateData);
  row.appendChild(amountData);
  row.appendChild(buttonData);

  element.appendChild(row);
}

function updateEmptyWarningVisibility() {
  const rows = table.querySelectorAll("tr");
  const hasExpenses = rows.length - 1 > 1; // Check if there are more than just the header row
  if (hasExpenses) {
    emptyWarning.style.display = "none";
  } else {
    emptyWarning.style.display = "table-row";
  }
}
