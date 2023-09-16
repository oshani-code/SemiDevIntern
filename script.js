function convertTemperature() {
    const tempInput = document.getElementById("tempInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    const resultElement = document.getElementById("result");
    
    if (unitSelect === "celsius") {
        const fahrenheit = (tempInput * 9/5) + 32;
        resultElement.innerHTML = `${tempInput}°C is ${fahrenheit.toFixed(2)}°F`;
    } else if (unitSelect === "fahrenheit") {
        const celsius = (tempInput - 32) * 5/9;
        resultElement.innerHTML = `${tempInput}°F is ${celsius.toFixed(2)}°C`;
    }
}