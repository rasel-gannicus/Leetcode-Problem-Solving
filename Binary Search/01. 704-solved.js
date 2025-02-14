/* 
Algo: Binary Search
Problem no: 704
Problem Link : https://leetcode.com/problems/binary-search/description/
Difficulties: Easy

Problem Details: 
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.


*/


// --- Binary Search



const dummyArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];


const binarySearch = (arr, target) => {
    let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === number) {
      return mid;
    }
    if (arr[mid] < number) {
      start = mid + 1;
    }
    if (arr[mid] > number) {
      end = mid - 1;
    }
  }
  return -1;
}

binarySearch(dummyArray, 100);