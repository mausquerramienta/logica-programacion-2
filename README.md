# logica-programacion-2
A dynamic JavaScript temperature converter featuring strict type checking, iterative error handling, and precise mathematical calculations.

# 🌡️ Logic Programming 2: Temperature Converter

A dynamic system built in JavaScript focused on sequential processing, strict input validation, and variable manipulation for mathematical conversions.

## 🎯 Project Objective
This interactive project prompts the user for a temperature in Celsius and outputs its exact equivalent in the Fahrenheit and Kelvin scales. The core focus of this development lies in the **algorithm's resilience**: the program implements an iterative flow control that strictly evaluates the input data type. It systematically handles user errors by prompting for the data again until a valid numeric value is successfully received.

## ✨ Key Features
* **Data Validation (Type Checking):** Implements conditional logic to ensure the input is strictly numeric (`number`), preventing the execution of text strings or null values.
* **Iterative Flow Control:** Utilizes loops to keep the program actively running in case of an invalid input, guiding the user toward the correct format without breaking the application's execution.
* **Mathematical Precision:** Applies direct conversion formulas:
  * Fahrenheit: `(°C × 9/5) + 32`
  * Kelvin: `°C + 273.15`
* **Immediate Feedback:** Delivers clear and readable output through the browser console or directly rendered into the DOM.

## 🧪 Test Cases
The algorithm has been structured to accurately resolve the following scenarios:

**Scenario A:**
* **Input:** `45`
* **Expected Output:** 
  * Kelvin: `318.15`
  * Fahrenheit: `113`

**Scenario B:**
* **Input:** `14`
* **Expected Output:** 
  * Kelvin: `287.15`
  * Fahrenheit: `57.2`

## 🛠️ Technologies Used
* **JavaScript (ES6+)**: Core logic, flow control, and data manipulation.
* **HTML5**: Base structure for browser deployment (DOM).

## 🚀 How to Run the Project
1. Clone this repository to your local machine.
2. Open the `index.html` file in your preferred web browser.
3. Interact with the prompt or numerical input displayed on the screen.
4. Open the Developer Tools (F12) to view the systematic validation in the console, or check the results printed directly on the webpage.