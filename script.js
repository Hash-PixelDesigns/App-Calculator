//Reference display element
const display = document.getElementById('display');

//Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed');

    let currentValue = display.value;

    if (justCalculated && !isNaN(value)){
        display.value = value;
        justCalculated = false;
        return;
    }
    
    // If current display show 0 and user enters a number, we want to replace the 0
    if (currentValue === '0' && !isNaN(value)) {
    display.value = value;
    } else if (currentValue === '0' && value === '.') {
        display.value = currentValue + value;
    } else if (value ==='.') {
        //Get the last number in the display
        let lastNumber = currentValue.split ('/[+\-*/]').pop();
        //Only add the decimal if the current number doesnt have one
        if (!lastNumber.includes('.')){
            display.value = currentValue + value;
        }
    
    else {
        display.value = currentValue + value;
    }

    // Reset thr justCalculated flag when user starts typing
    justCalculated = false;

    console.log ('Display updated to: ', display.value);
    }
}

function clearDisplay() {
    console.log('Clear buttomn pressed.');

    display.value = '0';
    justCalculated = false;

    display.style.backgroundColor= #f0f0f0;
    setTimeout (()=> {
        display.style.backgroundColor = '';
    },150);
}

function deleteLast () {
    console.log('Backspace button pressed');

    let currentValue = display.value;

    //If there is only one character or it's 0, rest to 0
    if (currentValue.length <=1 || currentValue === '0') {
        display.value = '0';
    } else {
        display.value =  currentValue.slice(0, -1);
    }

}

function calcutate () {
    console.log('Equals button pressed');


}

document.addEventListener{'keydown', function (event) {
    console.log ('Key pressed',event.key);

    if (event.key >='0' && event.key <= '9') {
        appendToDisplay(event.key);
    } else if (event.key === '.') {
        appendToDisplay('.');
    } else if (event.key === '+') {
        appendToDisplay('+');
    } else if (event.key === '-') {
        appendToDisplay('-');
    } else if (event.key === '*') {
        appendToDisplay('*');
    } else if (event.key('/')) {
        event.preventDefault();
        appendToDisplay('/');
    }
    else if (event.key === 'Enter' || event,key === '=') {
        calcutate();
    }else if (event.key === 'Escape'|| event.key === 'c'|| event.key === 'C'){
        clearDisplay();
    }else if (event.key === 'Backspace') {
        deleteLast();
    }

}}

document. addEventListener('DOMContentLoaded', function(){
    console.log('calculater loaded succesfully');
    console.log('Display element', display);
    
    if(display) {
        console.log('Current display value', display.value);
    } else {
        console.log('Display element not found');
    }
})