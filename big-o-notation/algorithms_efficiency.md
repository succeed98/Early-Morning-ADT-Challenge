# Algorithm efficiency

## Learning objectives

- Understand computational complexity.
- Understand Big-O notation for time and space complexity.

### Estimated time: 3.5h

## Computional complexity

According to [Britannica](https://www.britannica.com/topic/computational-complexity) computational complexity is the:

>cost of solving a problem in large-scale scientific computation, measured by the number of operations required as well as the amount of memory used and the order in which it is used. 
>The result of a complexity analysis is an estimate of how rapidly the solution time increases as the problem size increases, which can be used to analyze problems and assist in the design of algorithms for their solution.

In other words, computational complexity measures how much work is needed in order to perform a specific task.

### Why is it important?

Computational complexity helps to assess how efficient your solution is. It will also help you to compare alternative solutions for the same problem in order to choose the best one.

### Learn more about computational complexity

- Read [Techopedia's definition of computational complexity](https://www.techopedia.com/definition/18466/computational-complexity).
- Watch this video on [computational thinking and scratch](https://www.youtube.com/watch?v=jjqgP9dpD1k) (1 hour).

##  Big-O notation: time and space complexity

The simplest introduction to Big-O notion can be found in the [Introduction to Big-O notation](https://towardsdatascience.com/introduction-to-big-o-notation-820d2e25d3fd) article by Andrew Jamieson:

>Big O Notation is a way to measure an algorithm's efficiency. It measures the time it takes to run your function as the input grows. 
>Or in other words, how well does the function scale.
>There are two parts to measuring efficiency — time complexity and space complexity.
>Time complexity is a measure of how long the function takes to run in terms of its computational steps. Space complexity has to do with the amount of memory used by the function. This blog will illustrate time complexity with two search algorithms.
>Big O is sometimes referred to as the algorithm's upper bound, meaning that it deals with the worst-case scenario. 
>The best-case scenario doesn't really tell us anything — it will be finding our item in the first pass. We use worst-case to remove uncertainty — the algorithm will never perform worse than we expect.

### Why is it important?

As [Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation) says:

>In computer science, Big-O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.

As it is a standardized way to measure algorithms' efficiency, you can use it to compare different solutions and to choose the best ones.

### Learn more about Big-0

- Read an introduction in this article: [Big O: How to calculate time and space complexity](https://www.inoutcode.com/concepts/big-o/).
- Consolidate your understanding by watching this video: [Time complexity, space complexity, and Big O](https://www.youtube.com/watch?v=8mBxpDWEKNw).
- Revisit the concept in this article: [What is Big O notation explained: space and time complexity](https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/).
- Take a look at this [Big-O cheat sheet](https://www.bigocheatsheet.com/) and check the efficiency of the various data structures that you already know!

## Challenge yourself 

Here's a simple (though non-optimal) algorithm to find a match of a substring `word` within a longer string `text`. It returns the index of the match, or -1 if no match is found.

``` javascript
function index_of(text, word) {
  for (let i = 0; i <= text.length- word.length; i++) { // loop through text
    j = 0
    // loop through word
    while (text.charAt(i + j) === word.charAt(j)) { // character match
      j += 1
      if (j === word.length) {
        return i
      }
    }
  }
  return -1
}
```

Let n be the length of the text and m be the length of the word. What is the worst-case running time of this algorithm?

- `O(n)`?
- `O(nm)`?
- `O(n log m)`?
- `O(n^2)`?

Click [here](./algorithms_efficiency_answer.md) to check your answers to these questions.