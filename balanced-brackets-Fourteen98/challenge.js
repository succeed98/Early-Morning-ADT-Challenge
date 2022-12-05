function balancedBrackets(string) {
    // Assumption
    // [] => true
    // [[{}]] => true
    // {[} => false 
    // your code here
    let stack = [];

    // Traversing the Expression
    // for (let i = 0; i < string.length; i++) {
    //     let x = string[i];

    //     if (x === '(' || x === '[' || x === '{') {
    //         stack.push(x);
    //         continue;
    //     }

    //     if (stack.length === 0)
    //         return false;

    //     let check;
    //     switch (x) {
    //         case ')':
    //             check = stack.pop();
    //             if (check === '{' || check === '[')
    //                 return false;
    //             break;

    //         case '}':
    //             check = stack.pop();
    //             if (check === '(' || check === '[')
    //                 return false;
    //             break;

    //         case ']':
    //             check = stack.pop();
    //             if (check === '(' || check === '{')
    //                 return false;
    //             break;
    //     }
    // }
    // return (stack.length === 0);
    for (let i = 0; i < string.length; i++){
        // push if char is a closing bracets
        if (string[i] === '[' || string[i] === '{' || string[i] === '(') {
            stack.push(string[i]);
            continue;
        }
    }
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
