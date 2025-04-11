/*You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.*/

function getMiddle1(str) {
  if (str.length % 2 === 0) {
    const lengthSplit = str.length / 2;
    return str.slice(lengthSplit - 1, lengthSplit + 1);
  }
  if (str.length % 2 === 1) {
    const lengthSplit = Math.floor(str.length / 2);
    return str.slice(lengthSplit, lengthSplit + 1);
  }
}

function getMiddle2(str) {
  return str.substr(
    Math.ceil(str.length / 2 - 1),
    str.length % 2 === 0 ? 2 : 1
  );
}

function getMiddle(str) {
  const middle = Math.floor(str.length / 2);
  return str.length % 2 === 0
    ? str.slice(middle - 1, middle + 1)
    : str.slice(middle, middle + 1);
}

console.log(getMiddle("test")); // should return "es"
console.log(getMiddle("testing")); // should return "t"
console.log(getMiddle("middle")); // should return "dd"
console.log(getMiddle("A")); //should return "A"
