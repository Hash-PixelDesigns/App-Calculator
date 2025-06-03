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
    } else {
        display.value = currentValue + value;
    }

    // Reset thr justCalculated flag when user starts typing
    justCalculated = false;

    console.log ('Display updated to: ', display.value);
}


function clearDisplay() {
    console.log('Clear buttomn pressed.');

    alert('Clear Button was clicked');
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

    alert('Backspace button was clicked');
}

function calcutate () {
    console.log('Equals button pressed');

    alert('Equals button was clicked');
}

document. addEventListener('DOMContentLoaded', function(){
    console.log('calculater loaded succesfully');
    console.log('Display element', display);
    
    if(display) {
        console.log('Current display value', display.value);
    } else {
        console.log('Display element not found');
    }
})