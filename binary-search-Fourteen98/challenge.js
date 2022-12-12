module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number)
}

function sqrt_recursive(number, min_interval, max_interval) {
  // write your code here
  let mid_interval = (min_interval + max_interval) / 2;
  if (mid_interval * mid_interval === number) {
    return mid_interval;
  } else if (mid_interval * mid_interval > number) {
    return sqrt_recursive(number, min_interval, mid_interval);

  } else {
    return sqrt_recursive(number, mid_interval, max_interval);
  }

}

//console.log(sqrt(25))
//console.log(sqrt(7056))
