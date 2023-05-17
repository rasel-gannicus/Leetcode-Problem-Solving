
/* 
 * 268. Missing Number

  Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/

function test(arr){
    for(let i=0; i<=arr.length; i++){
        if(!arr.includes(i)){
            return i;
        }
    }
}

console.log(test([9,6,4,2,3,5,7,0,1]));

/* 
--------------  Better approach 
var missingNumber = function(nums) {
    let m=nums.length
   let sum=(m*(m+1))/2;
   
   let ans=0;

   for(let i=0;i<nums.length;i++){
       ans+=nums[i];
   }

   
  return sum-ans;

};

*/