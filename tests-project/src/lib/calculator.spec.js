const { sum } = require("./calculator");

test("should sum 2 and 2 the result must be 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("should sum 2 and 2 even if one of them is a string", () => {
  expect(sum("2", "2")).toBe(4);
});

test("shoult throw an error if what is provided to the method", () => {
  expect(() => {
    sum("", "2");
  }).toThrow();

  expect(() => {
    sum([2, 2]);
  }).toThrow();

  expect(() => {
    sum({});
  }).toThrow();

  expect(() => {
    sum();
  }).toThrow();
});
