// Temperature converter

while (true) {
    // 1. Cast the input as a raw string first to catch empty strings or null (cancel)
    let inputString = prompt("Enter temperature in Celsius: ");
    // 2. Convert the raw input into a numeric type value
    let celsiusDegrees = Number(inputString);
    
    // 3. Validate: Must be a number (!isNaN), not empty (""), and not null
    if (!isNaN(celsiusDegrees) && inputString !== "" && inputString !== null) {
        // Apply conversion formulas
        let fahrenheit = (celsiusDegrees * (9/5)) + 32;
        console.log("Temperature " + celsiusDegrees + " in Fahrenheit is: " + fahrenheit);
        let kelvin = celsiusDegrees + 273.15;
        console.log("Temperature " + celsiusDegrees + " in Kelvin is: " + kelvin);
        // Break when done
        break;
    } else {
        // Invalid input, log the error and let the loop prompt the user again
        console.log("Error: Please enter the temperature in a valid numeric format.");
    }
}
