// Reference Display element
const display = document.getElementById('display');

//Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log ('Button pressed:',value);

    alert ('You pressed: '+value);
}

function clearDisplay() {
    console.log ('Clear button pressed.');

    alert ('Clear button clicked.');
}

function deleteLast() {
    console.log ('Backspace button pressed.');

    alert ('Backspace button clicked.');
}

function calculate () {
    console.log ('Equals button pressed.');

    alert ('Equals button clicked.');
}

document.addEventListener('DOMContentLoaded',function() {
    console.log('Calculator loaded successfully');
    console,log('Display element',display);

    if (display) {
        console.log ('Current display value: ',display.value);
    }
})
