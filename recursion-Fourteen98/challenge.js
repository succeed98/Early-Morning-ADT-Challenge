function sum(number) {
  if (number == 0) return 0;
  total = number + sum(number - 1)
  return total
}

console.log(sum(4))
console.log(sum(10))

module.exports = sum;