const dummyArray = [2, 2, 2, 2, 5, 8, 8, 8, 8, 8, 8, 9, 12, 12, 55, 55, 55];
const nums = [1, 2, 5, 2, 3];
const nums2 = [1, 2, 5, 2, 3];

const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  let counter = [];
  const arr = nums.sort((a, b) => a - b);

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      // --- checking right side
      for (let i = mid + 1; arr[i] === target; i++) {
        counter.push(i);
      }
      // --- checking left side
      for (let i = mid - 1; arr[i] === target; i--) {
        counter.push(i);
      }

      counter.push(mid);
      return counter.sort((a, b) => a - b);
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }

  return counter;
};

console.log(binarySearch([1, 2, 5, 2, 3], 5));
