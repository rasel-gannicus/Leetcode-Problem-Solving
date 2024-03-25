const test = [1];

function dummy(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  if(sortedNums.length == 1){
    if(sortedNums[0] !== 1){
      return 1
    }
  }
  for (let i = 0; i < sortedNums.length; i++) {
    if(!sortedNums.includes(i)){
      return(i);
    }
    // console.log(i+1);
  }
}
dummy(test);
