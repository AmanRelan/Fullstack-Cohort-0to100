/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const lowerCaseString = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] === 'a' || lowerCaseString[i] === 'e' || lowerCaseString[i] === 'i' || lowerCaseString[i] === 'o' || lowerCaseString[i] === 'u') {
      count++;
    }
  }
  return count;
}

/* Another Solution
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  const strArray = str.toLowerCase().split('');
  vowels.forEach((vowel) => {
    const foundOccurrences = strArray.filter((allOccurrences) => allOccurrences === vowel);
    vowelCount += foundOccurrences.length;
  });
  return vowelCount;
}
*/

module.exports = countVowels;