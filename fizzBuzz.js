function fizzBuzz(number) {
  if (number % 15 === 0) {
    return "fizzbuzz";
  } else if (number % 5 === 0) {
    return "buzz";
  }
  return number.toString();
}
export { fizzBuzz };
