module.exports.sum = (num1, num2) => {
  const number1 = parseInt(num1, 10);
  const number2 = parseInt(num2, 10);

  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    throw new Error("Check your numbers");
  }

  return +number1 + +number2;
};
