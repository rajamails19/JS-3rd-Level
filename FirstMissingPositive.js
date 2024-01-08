


function firstMissingPositive(nums) {
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      const temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }
  for (let i = 0; i < n; ++i) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
}


/*

Given an unsorted integer array nums, return the smallest missing positive integer.
You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
 
Example 1:
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
 
*/

/*
Explanation

This JavaScript function firstMissingPositive aims to find the smallest missing positive integer from an array of integers (nums). Let's break it down step by step:
Function Purpose:

    Inputs:
        nums: An array of integers.

    Output:
        Returns the smallest positive integer that is missing in the given array.

Variables Used:

    n: Represents the length of the nums array.

Algorithm Steps:

    Rearranging Array:
        The function iterates through the array nums using a for loop.
        Inside the loop, it utilizes a while loop:
            Checks if the current element nums[i] is a positive integer within the range 1 to n and not at its correct position (i.e., nums[i] !== nums[nums[i] - 1]).
            If conditions are met, it swaps the element nums[i] with the element at the index nums[i] - 1. This aims to place each positive integer in its correct index, e.g., number 3 at index 2.

    Finding the Missing Integer:
        After the rearrangement, another for loop iterates through the array nums.
        It checks whether each element at index i is equal to i + 1. If not, it means the smallest missing positive integer is i + 1. The loop returns this value.

    Default Return:
        If the loop completes without finding a missing positive integer, it returns n + 1, indicating that all positive integers from 1 to n were present in the array.

Example:

Let's illustrate with an example:

    nums = [3, 4, -1, 1]

When calling firstMissingPositive(nums):

    After the rearrangement process:
        nums becomes [1, -1, 3, 4].
    The second for loop finds the first occurrence where nums[i] !== i + 1.
    It identifies that nums[1] !== 1 + 1 (i.e., nums[1] !== 2). Therefore, the function returns 2 as the smallest missing positive integer in the array.

This algorithm rearranges the array such that each positive integer is placed at its correct index, allowing for a simple subsequent check to find the first missing positive integer.

*/

