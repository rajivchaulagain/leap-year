import { isLeapYear } from './index';

describe('isLeapYear', () => {
  it('returns true for leap years', () => {
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2000)).toBe(true); // divisible by 400, so it’s a leap year
  });

  it('returns false for common years', () => {
    expect(isLeapYear(2023)).toBe(false);
    expect(isLeapYear(1900)).toBe(false); // divisible by 100 but not by 400, so not a leap year
  });

  it('throws an error for non-positive integers', () => {
    expect(() => isLeapYear(0)).toThrow("Invalid input: year must be a positive integer.");
    expect(() => isLeapYear(-2024)).toThrow("Invalid input: year must be a positive integer.");
  });

  it('throws an error for non-integer inputs', () => {
    expect(() => isLeapYear("2024" as unknown as number)).toThrow("Invalid input: year must be a positive integer.");
    expect(() => isLeapYear(2024.5)).toThrow("Invalid input: year must be a positive integer.");
    expect(() => isLeapYear(NaN)).toThrow("Invalid input: year must be a positive integer.");
  });
});
