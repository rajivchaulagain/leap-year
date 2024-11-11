# leap-year-checker

Returns true if the value is leap year. A simple JavaScript function to check if a given year is a leap year. This function includes error handling to validate the input.

## Installation

```bash
npm install leap-year-checker
```

## Usage

```python
const {isLeapYear} = require("leap-year-checker");

try {
  console.log(isLeapYear(2024)); // Expected output: true
  console.log(isLeapYear(2023)); // Expected output: false

  // This will throw an error because the input is not a number
  console.log(isLeapYear("2024")); // Throws error: Invalid input
} catch (error) {
  console.error("Error:", error.message);
}
```
## Function Implementation
```python
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
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License.