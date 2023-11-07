const arr = [12, 13, 15, 8, 1, 41];

// ordenar com método sort()
const sortMethodArr = arr.sort((a, b) => a - b);

//maior soma possível
const largestSum = sortMethodArr.reduce((acc, curr, index) => {
  if (index !== 0) {
    return acc + curr
  }
  return acc;
}, 0);

// ordenar com laço for
for (let index = 0; index < arr.length; index += 1) {
  if (arr[index] > arr[index + 1]) {
    const largestValue = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = largestValue;
  }
}

//menor soma possível
const smallestSum = arr.reduce((acc, curr, index, array) => {
  if (index !== array.length - 1) {
    return acc + curr;
  }
  return acc;
}, 0);
