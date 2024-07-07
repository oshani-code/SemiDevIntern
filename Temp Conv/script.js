// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to convert temperature based on selected unit
function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');

    if (tempInput === '') {
        resultDiv.innerHTML = "Please enter a temperature value.";
        return;
    }

    const temp = parseFloat(tempInput);

    let result;
    if (unitSelect === 'celsius') {
        result = `${temp}°C is equal to ${celsiusToFahrenheit(temp).toFixed(2)}°F`;
    } else {
        result = `${temp}°F is equal to ${fahrenheitToCelsius(temp).toFixed(2)}°C`;
    }

    resultDiv.innerHTML = result;
}
