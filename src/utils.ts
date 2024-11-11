export function isLeapYear(year: number) {
    if (typeof year !== 'number' || !Number.isInteger(year) || year <= 0) {
        throw new Error("Invalid input: year must be a positive integer.");
    }

    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}