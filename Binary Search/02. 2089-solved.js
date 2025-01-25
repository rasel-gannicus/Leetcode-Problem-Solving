/* 
Algo: Binary Search
Problem no: 2089
Problem Link : https://leetcode.com/problems/find-target-indices-after-sorting-array/description/
Difficulties: Easy

Problem Details: 
You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

 

Example 1:
Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.

Example 2:
Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.

Example 3:
Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i], target <= 100


*/



const dummyArray = [2, 2, 2, 2, 5, 8, 8, 8, 8, 8, 8, 9, 12, 12, 55, 55, 55];
const nums = [1, 2, 5, 2, 3];
const nums2 = [1, 2, 5, 2, 3];

const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  let counter = [];
  const arr = nums.sort((a, b) => a - b);

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      // --- checking right side
      for (let i = mid + 1; arr[i] === target; i++) {
        counter.push(i);
      }
      // --- checking left side
      for (let i = mid - 1; arr[i] === target; i--) {
        counter.push(i);
      }

      counter.push(mid);
      return counter.sort((a, b) => a - b);
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }

  return counter;
};

console.log(binarySearch([1, 2, 5, 2, 3], 5));
