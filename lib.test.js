const { test, expect } = require("@jest/globals");
const lib = require("./lib");
test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});
test("prime(5) should be true", () => {
    expect(lib.prime(5)).toBe(true);
});
test("prime(6) should be true", () => {
    expect(lib.prime(6)).toBe(false);
});
test("factorial(5) should be true", () => {
    expect(lib.factorial(5)).toBe(120);
});
test("factorial(5) should be true", () => {
    expect(lib.factorial(6)).toBe(720);
});