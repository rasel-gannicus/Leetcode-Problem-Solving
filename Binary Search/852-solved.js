

function dummy(arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid;
        }
        else if (arr[mid] > arr[mid + 1]) {
            end = mid - 1;
        } else if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
    }
    return mid;
}

console.log(dummy([1,2,3,1]));

// [0,3,4,5,6,3,1]
// [0,2,5,6,9,8,5,3,1]