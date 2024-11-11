
# Project Title

A brief description of what this project does and who it's for


Leap Year Checker

A simple JavaScript function to check if a given year is a leap year. This function includes error handling to validate the input.

Installation

Install the package via npm:

npm install leap-year-checker
Function Definition

The isLeapYear function checks if a year is a leap year by evaluating the input as a positive integer. If the input is not a valid year, it throws an error.

Syntax
isLeapYear(year)
Parameters
year (number): The year to check.
Returns
boolean: Returns true if the year is a leap year, false otherwise.
Throws
Throws an Error if the input is not a valid positive integer with the message: "Invalid input: year must be a positive integer."
Example Code
Here’s an example of how to use the isLeapYear function, with error handling:

const isLeapYear = require("leap-year-checker");

try {
  console.log(isLeapYear(2024)); // Expected output: true
  console.log(isLeapYear(2023)); // Expected output: false

  // This will throw an error because the input is not a number
  console.log(isLeapYear("2024")); // Throws error: Invalid input
} catch (error) {
  console.error("Error:", error.message);
}
Function Implementation

/**
 * Checks if a provided year is a leap year.
 * @param {number} year - The year to check
 * @throws {Error} - Throws an error if the input is not a valid positive integer
 * @returns {boolean} - Returns true if the year is a leap year, false otherwise
 */
function isLeapYear(year) {
  // Error handling: Check if input is a valid number and an integer
  if (typeof year !== 'number' || !Number.isInteger(year) || year <= 0) {
    throw new Error("Invalid input: year must be a positive integer.");
  }

  // Return true if it's a leap year, false otherwise
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
Error Handling

This function performs input validation as follows:

Ensures the input year is a number.
Checks that year is an integer and greater than 0.
If the input fails any of these checks, it throws an error with the message:
"Invalid input: year must be a positive integer."
In the example usage, the try-catch block handles any errors thrown by isLeapYear. This allows you to manage errors gracefully and provide feedback when an invalid input is detected.

License

This project is licensed under the MIT License.