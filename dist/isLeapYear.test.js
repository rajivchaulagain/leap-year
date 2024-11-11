"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe('isLeapYear', function () {
    it('returns true for leap years', function () {
        expect((0, index_1.isLeapYear)(2024)).toBe(true);
        expect((0, index_1.isLeapYear)(2000)).toBe(true); // divisible by 400, so it’s a leap year
    });
    it('returns false for common years', function () {
        expect((0, index_1.isLeapYear)(2023)).toBe(false);
        expect((0, index_1.isLeapYear)(1900)).toBe(false); // divisible by 100 but not by 400, so not a leap year
    });
    it('throws an error for non-positive integers', function () {
        expect(function () { return (0, index_1.isLeapYear)(0); }).toThrow("Invalid input: year must be a positive integer.");
        expect(function () { return (0, index_1.isLeapYear)(-2024); }).toThrow("Invalid input: year must be a positive integer.");
    });
    it('throws an error for non-integer inputs', function () {
        expect(function () { return (0, index_1.isLeapYear)("2024"); }).toThrow("Invalid input: year must be a positive integer.");
        expect(function () { return (0, index_1.isLeapYear)(2024.5); }).toThrow("Invalid input: year must be a positive integer.");
        expect(function () { return (0, index_1.isLeapYear)(NaN); }).toThrow("Invalid input: year must be a positive integer.");
    });
});
