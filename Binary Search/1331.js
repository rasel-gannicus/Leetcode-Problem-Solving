

const dummyArray = [40, 10, 20, 30];


function binarySearch(arr) {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let counter = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {  

    for (let j = 0; j < arr.length; j++) {
      // console.log(sortedArr[j])
      if (arr[i] === sortedArr[j]) {
        
      }
    }
  }
  // console.log(counter);
  return;
}


// console.log(binarySearch(dummyArray))
binarySearch([100,100,100])