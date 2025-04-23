/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.*/

function isIsogram(str) {
  return str.length === new Set(str.toLowerCase()).size;
}

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("aba")); //false
console.log(isIsogram("moOse")); //false (ignore letter case)
