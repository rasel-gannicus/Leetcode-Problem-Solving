
// --- Binary Search

const dummyArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];


const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    if(arr[end] === target || target < arr[start] || target > arr[end] ){
        console.log('returning from here');
        return arr[start];
    }

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            for(let i=mid; i < arr.length; i++){
                if(arr[i] > target){
                    return arr[i] ; 
                }
            }
            return arr[0];
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        } else if (arr[mid] > target) {
            end = mid - 1
        }
    }
    if(target < arr[mid]){
        return (arr[mid]) ;
    }else if(target > arr[mid]) {
        if(arr[mid] == arr[arr.length-1]){
            return arr[0];
        }
        return(arr[mid+1])
    }
}

console.log(binarySearch(["b","c","d",  "f"], "e"))