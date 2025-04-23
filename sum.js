//Write a function that finds the sum of all its arguments.

function sum() {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  return sum
}

console.log(sum(1, 2, 3)); // => 6
console.log(sum(8, 2)); // => 10
console.log(sum(1, 2, 3, 4, 5)); // => 15
