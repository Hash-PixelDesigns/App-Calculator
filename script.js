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
    } else if (value === ".") {
        //Get the last number in the display
        let lastNumber = currentValue.split('/[+\_*/]').pop();
        //Only add the decimal if the current number does not have it
        if (lastNumber.includes ('.')) {
            display.value = currentValue + value
        }

    } else {
        display.value = currentValue + value;
    }

    // Reset the Just Calculated flag when user starts typing

    justCalculated = false;
   
    console.log ('Display updated to: ', display.value);

}

function clearDisplay() {
    console.log ('Clear button pressed.');

    display.vale = '0';
    justCalculated = false;

    display.style.backgroundColor = '#f0f0f0';
    setTimeout (() => {
        display.style.backgroundColor = '';
    },1000);
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

}

function calculate () {
    console.log ('Equals button pressed.');

    alert ('Equals button clicked.');
}

document.addEventListener('keydown', function(addEventListener){
    console.log('Key pressed',Event.key);

    if(Event.key >= '0' && Event.key <= '9') {
        appendToDisplay(Event.key);
    } else if (Event.key === '.'){
        appendToDisplay ('.');
    } else if (Event.key === '+') {
        appendToDisplay ('+');
    } else if (Event.key === '-') {
        appendToDisplay ('-');
    } else if (Event.key === '*') {
        appendToDisplay ('*');
    } else if (Event.key === '/') {
        Event.preventDefault ();
        appendToDisplay ('/');
    }

    else if (Event.key === 'Enter' || Event.key === '=') {
        calculate ();
    } else if (Event.key === 'Escape' || Event.key === 'c'|| Event.key === 'C') {
        clearDisplay();
    } else if (Event.key === 'Backspace') {
        deleteLast
    }
})

document.addEventListener('DOMContentLoaded',function() {
    console.log('Calculator loaded successfully');
    console,log('Display element',display);

    if (display) {
        console.log ('Current display value: ',display.value);
    }
})
