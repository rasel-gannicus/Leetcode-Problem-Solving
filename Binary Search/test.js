// const test = ["a", "b", "c", "d"];
const test = ["c","f","j"];

function dummy(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return arr[mid + 1]
    }
    if (arr[mid] < target) {
      for(let i = 0; i <)
      return(arr[mid + 1]);
    }
    if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  return arr[0] 
}
console.log(dummy(["c","f","j"], "s"));
