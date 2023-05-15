
// --- Binary Search

const dummyArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];


const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        let start = 0;
        let end = arr.length - 1;
        let mid;

        while (start <= end) {
            mid = Math.floor((start + end) / 2);

            if (arr[mid] === target) {
                return mid;
            }
            else if (arr[mid] < target) {
                start = mid + 1;
            } else if (arr[mid] > target) {
                end = mid - 1
            }
        }
        return -1;
    }
}

binarySearch(dummyArray, 100);