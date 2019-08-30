let question;
let payment, age, saving, retirement, death, pension;
let addBtn;
let resulthtml;

function main() {
  searchForElements();
  prepareDOMEvents();
}

function searchForElements() {
  payment = document.getElementById("payment");
  age = document.getElementById("age");
  saving = document.getElementById("saving");
  retirement = document.getElementById("retirement");
  death = document.getElementById("death");
  pension = document.getElementById("pension");
  addBtn = document.getElementById("btn-view-result");
  resulthtml = document.getElementById("result");
}

function prepareDOMEvents() {
  addBtn.addEventListener("click", addElementClic);
}
function addElementClic() {
  convert();
}
function ifinput(
    ageInput,
    savingInput,
    retirementInput,
    deathInput,
    pensionInput
) {
  if (
    (ageInput,
    savingInput,
    retirementInput,
    deathInput,
    pensionInput === Number())
  ) {
    convert();
  } else if (
    (ageInput,
    savingInput,
    retirementInput,
    deathInput,
    pensionInput === "")
  ) {
    alert("Hej nie zostawiaj pustych miejsc !!");
  }
}
function convert() {
  let ageInput = age.value;
  let savingInput = saving.value;
  let retirementInput = retirement.value;
  let deathInput = death.value;
  let pensionInput = pension.value;

  ifinput(
    ageInput,
    savingInput,
    retirementInput,
    deathInput,
    pensionInput
  );

  let timeToRetire = (Math.floor(retirementInput) - Math.floor(ageInput)) * 12;
  let retiredYears = (Math.floor(deathInput) - Math.floor(retirementInput)) * 12;
  let lifeSavings = Math.floor(retiredYears) * Math.floor(pensionInput);
  let savingTime = Math.floor(lifeSavings) - Math.floor(savingInput);
  let resultOfEquations = Math.floor(savingTime) / Math.floor(timeToRetire);

  console.log(Math.floor(resultOfEquations));
  showResult(resultOfEquations);
}

function showResult(resultOfEquations) {
  resulthtml.innerText = + Math.floor(resultOfEquations) + " zł" + " miesięcznie";
}

document.addEventListener("DOMContentLoaded", main);
