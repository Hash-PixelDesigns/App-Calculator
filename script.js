//Reference display element
const display = document.getElementById('display');

//Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed');

    alert('You Pressed:'+value);
}

function clearDisplay() {
    console.log('Clear buttomn pressed.');

    alert('Clear Button was clicked');
}

function deleteLast () {
    console.log('Backspace button pressed');

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