/* 
const dummyArray = [2, 3, 4, 7];

function binarySearch(arr, k) {

    let dummy = [];

    let isArrFullFilled = false;
    let j = 0;

    for (let i = 0; !isArrFullFilled; i++) {
        if ((i + 1) !== arr[j]) {
            dummy.push(i + 1);
            if (dummy.length == k) {
                isArrFullFilled = true;
            }
        } else {
            j++;
        }
    }
    return dummy[k - 1];
    // console.log(dummy);
    // console.log('Output is : ', dummy[k-1]);
}

binarySearch([2, 3, 4, 7], 5); */


// --- better 48 ms code

/* 
var findKthPositive = function(arr, k) {
    let num=0
    let i=0
    
    while(k>0){
        num++
        if(arr[i]!=num){
            k--
            i--
        }
        i++
    }
    return num
};
*/

// ---- another approach

const dummyArray = [2, 3, 4, 7];

function dummy (arr, k){

    i = 0 ;
    n = 1 ; 
    let dummyArr = [] ; 
    while(true){
        if(arr[i] != n){
            dummyArr.push(n);
            n++ ; 
        }else{
            i++ ; 
            n++ ;
        }
        if(dummyArr.length > k){
            break;
        }
    }
    return dummyArr[k-1] ; 
}

console.log(dummy([1,2,3,4], 2));