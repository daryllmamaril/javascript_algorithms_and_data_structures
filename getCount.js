/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount1(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.split("").length; i++) {
    if (vowels.includes(str.split("")[i])) {
      count++;
    }
  }
  return count;
}

function getCount2(str) {
  const vowels = { a: true, e: true, i: true, o: true, u: true };
  let count = 0;
  for (let char of str) {
    if (vowels[char]) {
      count++;
    }
  }
  return count;
}

function getCount(str) {
  return str.split("").filter((char) => "aeiou".includes(char)).length;
}

console.log(getCount("abracadabra")); //5
console.log(getCount("qwrtht")); //0
