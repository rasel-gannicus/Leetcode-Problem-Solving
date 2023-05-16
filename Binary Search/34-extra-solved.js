
const dummyArray = [2, 2, 2, 2, 5, 8, 8, 8, 8, 8, 8, 9, 12, 12, 55, 55, 55];

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let leftSide = 0;
        let rightSide = 0;

        if (arr[mid] === target) {
            // --- checking right side
            if (arr[mid + 1] !== target) {
                rightSide = mid;
            } else {
                for (let i = mid + 1; arr[i] === target; i++) {
                    rightSide = i ;
                }
            }

            // --- checking left side
            if(arr[mid-1] !== target){
                leftSide = mid ; 
            }else{
                for (let i = mid - 1; arr[i] === target; i--) {
                    leftSide = i ;
                }
            }            
            return [leftSide, rightSide];

        } else if (arr[mid] < target) {
            start = mid + 1;
        } else if (arr[mid] > target) {
            end = mid - 1;
        }
    }

    return [-1, -1];
}

console.log(binarySearch([], 0))