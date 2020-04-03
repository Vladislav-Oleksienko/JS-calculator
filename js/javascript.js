'use strict'

const numbersButton = document.querySelectorAll('.numbers-button');
const mathSymbol = document.querySelectorAll('.math-symbol');
const dotButton = document.querySelector('.dot-button');
const clearInput = document.querySelector('.clear-input');
const string = document.querySelector('.string');
const square = document.getElementById("square");
const cube = document.getElementById("cube");
const radical = document.getElementById("radical");
const module = document.getElementById("module");

let Current = 0;
let NewNumber = false;
let PendingOperation = '';

numbersButton.forEach((item, index) => {
  let number = numbersButton[index];
  number.addEventListener('click', (event) => {
    numberPress(event.target.textContent);
  })
})

mathSymbol.forEach((item, index) => {
  let mathBtn = mathSymbol[index];
  mathBtn.addEventListener('click', (event) => {
    ChooseOperation(event.target.textContent);
  })
})

square.addEventListener('click', () => {
  let memory = string.value;
  string.value = Math.pow(memory, 2);
})

cube.addEventListener('click', () => {
  let memory = string.value;
  string.value = Math.pow(memory, 3);
})


radical.addEventListener('click', () => {
  let memory = string.value;
  string.value = Math.sqrt(memory);
})

module.addEventListener('click', () => {
  let memory = string.value;
  string.value = Math.abs(memory);
})


clearInput.addEventListener('click', (event) => {
  clear();
})

dotButton.addEventListener('click', (event) => {
  decimal();
})






const numberPress = function(number) {
  if(NewNumber) {
    string.value = number;
    NewNumber = false;
  } else {
    if(string.value === '0') {
      string.value = number;
    } else {
      string.value += number;
    }
  }
}


const ChooseOperation = function(operation) {
  let memory = string.value;

  if (NewNumber && PendingOperation !== '=') {
  } else {
    NewNumber = true;
    if (PendingOperation === '+') {
      Current += parseFloat(memory);
    } else if (PendingOperation === '-'){
      Current -= parseFloat(memory);
    }else if (PendingOperation === "×"){
      Current *= parseFloat(memory);
    } else if (PendingOperation === "÷") {
      Current /= parseFloat(memory);
    }
    else {
      Current = parseFloat(memory);
    }
    if(!isFinite(Current)) {
        alert('Неправильна операція');
    }

    string.value = Current;
    PendingOperation = operation;
  }
}

const clear = function() {
  string.value = '0';
  Current = 0;
  PendingOperation = 0;
}

const decimal = function() {
  let decimalMemory = string.value;

  if (NewNumber) {
    decimalMemory = '0.';
    NewNumber = false;
  } else {
    if(decimalMemory.indexOf('.') === -1){
      decimalMemory += '.';
    }
  }
  string.value = decimalMemory;
}