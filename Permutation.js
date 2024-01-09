


function permute(nums) {
  const ans = [];
  
  const dfs = (path, used) => {
    if (path.length === nums.length) {
      ans.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; ++i) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      dfs(path, used);
      path.pop();
      used[i] = false;
    }
  };
  dfs([], Array(nums.length).fill(false));
  return ans;
}


/*

46. Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 
Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:
Input: nums = [1]
Output: [[1]]


*/

/*

Explanation

This JavaScript function permute generates all possible permutations of an input array nums using a depth-first search (DFS) approach combined with backtracking. Let's break down the code step by step:
Function Purpose:

    Input:
        nums: An array of integers.

    Output:
        Returns an array containing all possible permutations of the input array nums.

Variables Used:

    ans: An array that stores all generated permutations.
    dfs: A recursive function responsible for the depth-first search and backtracking logic.
    path: An array that represents the current permutation being formed.
    used: An array that keeps track of used elements to avoid duplicates.

Algorithm Steps:

    Initialization:
        The function initializes an empty array ans to store permutations.

    Depth-First Search (DFS) Function (dfs):
        dfs is a recursive function that generates permutations.
        It takes path as the current state of the permutation and used to track used elements.
        Base case: If the length of path equals the length of nums, it means a permutation is complete. So, it adds the current path to ans.
        Otherwise, it iterates through each element in nums:
            If the element at index i in nums is not used (used[i] is false), it marks it as used, adds it to the current path, and recurses further.
            After recursion, it backtracks by removing the last element from path and marking the element as unused for other permutations.

    Start of DFS:
        It initiates the DFS function by calling dfs with an empty path array and an used array initialized with false values.

    Return:
        Returns the array ans containing all possible permutations.

Example:

Let's consider an example:

    nums = [1, 2, 3]

When calling permute(nums):

    The function generates all permutations of [1, 2, 3].
    It utilizes DFS and backtracking to explore different paths and construct permutations.
    The final ans array contains all possible permutations of [1, 2, 3].

This JavaScript code efficiently generates all permutations of the input array nums using DFS and backtracking, ensuring all possible combinations are explored and stored in the ans array.

*/



