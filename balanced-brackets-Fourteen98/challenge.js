function balancedBrackets(string) {
  // your code here
  let stack = [];

  var array = [];
  let validStrings = ["(", ")", "{", "}", "[", "]"];
  s = string.split("");
  for (let i = 0; i < s.length; i++) {
    if (!validStrings.includes(s[i])) {
      continue;
    }
    if (s[i] === "(") array.push(")");
    else if (s[i] === "[") array.push("]");
    else if (s[i] === "{") array.push("}");
    else if (s.length === 0 || array[array.length - 1] !== s[i]) return false;
    else array.pop();
  }
  return array.length === 0;
}

console.log(balancedBrackets("(hello)[world]"));
// => true

console.log(balancedBrackets("([)]"));
// => false

console.log(balancedBrackets("[({}{}{})([])]"));
// => true

module.exports = balancedBrackets;
