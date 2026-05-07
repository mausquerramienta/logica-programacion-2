// Temperature converter

// Getting DOM elements
const convertBtn = document.getElementById('convertBtn');
const celsius = document.getElementById('celsiusDegree');
const fahrenheitEl = document.getElementById('fahrenheitValue');
const kelvinEl = document.getElementById('kelvinValue');
const errorOutput = document.getElementById('errorOutput');

// Main function
convertBtn.addEventListener('click', () => {
    const inputString = celsius.value; // Get the value from the input element (string type)
    const celsiusDegrees = Number(inputString); // Convert string to number 
    
    // Validation
    if (inputString !== "" && !isNaN(celsiusDegrees)) {
        errorOutput.textContent = ""; // Clear previous errors
        // Calculations
        const fahrenheitResult = (celsiusDegrees * (9/5)) + 32;
        const kelvinResult = celsiusDegrees + 273.15;
        
        fahrenheitEl.textContent = fahrenheitResult.toFixed(2) + " °F"; // Update the DOM with the results 
        kelvinEl.textContent = kelvinResult.toFixed(2) + " K";
        
        console.log(`Success: ${celsiusDegrees}°C converted.`);
    } else {
        errorOutput.textContent = "Please enter a valid number."; // Handling errors
        fahrenheitEl.textContent = "--";
        kelvinEl.textContent = "--";
    }
});
