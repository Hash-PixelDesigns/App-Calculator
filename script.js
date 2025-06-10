// Reference Display element
const display = document.getElementById('display');

//Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log ('Button pressed:',value);
    
    let currentValue = display.value;

    if(justCalculated && !isNaN(value)) {
        display.value = value;
        justCalculated = false;
        return;
    }

    // If current display show 0 and user enters a number, we want to replace the 0
    if (currentValue === "0" && !isNaN(value)) {
        display.value = value;
    }

    // If the current display show 0 and the user enters decimal, keep the 0
    else if (currentValue === "0" && value === ".") {
        display.value = currentValue + value;
    } else {
        display.value = currentValue + value;
    }

    // Reset the Just Calculated flag when user starts typing

    justCalculated = false;
   
    console.log ('Display updated to: ', display.value);

}

function clearDisplay() {
    console.log ('Clear button pressed.');

    alert ('Clear button clicked.');
}

function deleteLast() {
    console.log ('Backspace button pressed.');

    let currentValue = display.value;

    // If theres only one character or its 0, rest to 0
    if (currentValue.length <= 1 || currentValue === "0") {
        display.value = '0';
    } else {
        display.value = currentValue.slice(0,-1);
    }

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
