

/* 
852. Peak Index in a Mountain Array

An array arr is a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.

*/

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