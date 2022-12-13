function sqrt(number) {
  return sqrt_recursive(number, 0, number);
}

function sqrt_recursive(number, min_interval, max_interval) {
  // write your code here
  let guess = (min_interval + max_interval) / 2;
  if (guess * guess == number) {
    return guess;
  } else if (guess * guess < number) {
    min_interval = guess + 1;
    return sqrt_recursive(number, min_interval, max_interval);
  } else {
    max_interval = guess - 1;
    return sqrt_recursive(number, min_interval, max_interval);
  }
}

console.log(sqrt(25));
console.log(sqrt(7056));

module.exports = sqrt;
