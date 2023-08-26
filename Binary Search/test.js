

const test = [-1, 0, 3, 5, 9, 12];

function dummy(arr, number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === number) {
      return mid;
    }
    if (arr[mid] < number) {
      start = mid + 1;
    }
    if (arr[mid] > number) {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(dummy(test, 90));;