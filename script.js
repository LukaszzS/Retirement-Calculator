let questionnaire;
let payment, age, saving, retirement, death, pension;
let addBtn;

function main() {
    searchForElements();
    prepareDOMEvents();
}

function searchForElements() {
    questionnaire = document.getElementById("questionnaire");
    payment = document.getElementById('payment');
    age = document.getElementById('age');
    saving = document.getElementById('saving');
    retirement = document.getElementById('retirement');
    death = document.getElementById('death');
    pension = document.getElementById('pension');
    addBtn = document.getElementById('addBtn');
}

function prepareDOMEvents() {
    
    addBtn.addEventListener('click', addElementClic);
    
}
function addElementClic(){
console.log(addBtn);
}

document.addEventListener("DOMContentLoaded", main);