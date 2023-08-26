
// --- Binary Search

const dummyArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];


const binarySearch = (arr, target) => {
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

binarySearch(dummyArray, 100);