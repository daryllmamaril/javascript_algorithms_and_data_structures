/*Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5
The most frequent number in the array is -1 and it occurs 5 times.*/

function mostFrequentItemCount(array) {
  if (array.length === 0) return 0;

  const frequencyMap = {};
  let maxCount = 0;

  array.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    if (frequencyMap[num] > maxCount) {
      maxCount = frequencyMap[num]
    }
  })
  return maxCount;
};

console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
); //5
console.log(mostFrequentItemCount([])); // 0
console.log(mostFrequentItemCount([1, 1, 2, 2, 3, 3, 3])); // 3