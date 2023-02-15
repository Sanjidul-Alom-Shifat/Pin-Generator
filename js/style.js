function getPin() {
    const Pin = GeneratPin();
    const PinString = Pin + '';
    if (PinString.length === 4) {
        return Pin;
    }
    else{
        return getPin();
    }
}

function GeneratPin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generat-pin').addEventListener('click', function () {
    const pin = getPin();
    const displaypinfield = document.getElementById('display-pin');
    displaypinfield.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (even) {
    const number = even.target.innerText;
    const typedNumberField = document.getElementById('type-numbers');
    const PreviousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if(number==='<'){
            const digits = PreviousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const NewTypedNumber = PreviousTypedNumber + number;
        typedNumberField.value = NewTypedNumber;
    }
    
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displaypinfield = document.getElementById('display-pin');
    const CurrentPin = displaypinfield.value;

    const typedNumberField = document.getElementById('type-numbers');
    const typeNumber = typedNumberField.value;
    const PinSuccessMessage = document.getElementById('success-pin');
    const PinFailureMessage = document.getElementById('pin-failure');

    if (typeNumber === CurrentPin) {
        
        PinSuccessMessage.style.display = 'block';
        PinFailureMessage.style.display = 'none';
    }
    else {
        
        PinFailureMessage.style.display = 'block';
        PinSuccessMessage.style.display = 'none';
    }
})