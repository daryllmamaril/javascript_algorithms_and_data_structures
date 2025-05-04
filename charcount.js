function charCount1(str) {
  const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = (obj[char] || 0) + 1;
    }
  }
  return obj;
}
console.log(charCount1("Hi! I'm Dahlia.")); //{ h: 2, i: 3, m: 1, d: 1, a: 2, l: 1 }

function charCount(str) {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric 0-9
    !(code > 64 && code < 91) && //upper alpha A-Z
    !(code > 96 && code < 123)   //lower alpha a-z
  ) {
    return false;
  }
  return true;
}
console.log(charCount("Hi! I'm Dahlia.")); //{ h: 2, i: 3, m: 1, d: 1, a: 2, l: 1 }
