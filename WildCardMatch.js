



function isMatch(s, p) {
  const m = s.length;
  const n = p.length;
  let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let j = 0; j < n; ++j) {
    if (p.charAt(j) === '*') {
      dp[0][j + 1] = dp[0][j];
    }
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (p.charAt(j) === '*') {
        const matchEmpty = dp[i + 1][j];
        const matchSome = dp[i][j + 1];
        dp[i + 1][j + 1] = matchEmpty || matchSome;
      } else if (isMatchChar(s, i, p, j)) {
        dp[i + 1][j + 1] = dp[i][j];
      }
    }
  }
  return dp[m][n];
}
function isMatchChar(s, i, p, j) {
  return (j >= 0 && p.charAt(j) === '?') || s.charAt(i) === p.charAt(j);
}



/*

44. Wildcard Matching

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:
	• '?' Matches any single character.
	• '*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).
 
Example 1:
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:
Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:
Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

*/

/*

Explanation

The code you provided implements the "Wildcard Matching" algorithm using a dynamic programming approach. Let's break it down:
Function Purpose:

    Input:
        s: A string to be matched.
        p: A pattern string that may contain wildcard characters '*' and '?'.

    Output:
        Returns true if the entire string s matches the pattern p, where the wildcard character '*' can match zero or more characters.

Variables Used:

    m: Length of the string s.
    n: Length of the pattern string p.
    dp: A 2D array used for dynamic programming to store intermediate matching results.

Algorithm Steps:

    Initialization:
        The function initializes a 2D array dp with dimensions (m + 1) x (n + 1), filled with false initially.
        Sets dp[0][0] = true, indicating an empty string matches an empty pattern.

    Wildcard Handling:
        The function iterates through the pattern string p:
            If the current character in p is '', it checks if the previous pattern position dp[0][j] (where j corresponds to the current index in p) is also true. This denotes that '' can match an empty string.

    Dynamic Programming:
        The main nested loops (iterating over i and j) handle the dynamic programming approach.
        It iterates through each character in s and each character in p, updating the dp array based on the matching conditions.
        If the current character in p is '*':
            It checks two possibilities:
                matchEmpty: Whether '*' matches zero characters.
                matchSome: Whether '*' matches one or more characters from s.
            Updates dp[i + 1][j + 1] accordingly.
        If the current characters in s and p match (or if p has '?'), it updates dp[i + 1][j + 1] using dp[i][j].

    Return:
        Returns dp[m][n], which indicates whether the entire s matches the entire p based on the calculated dynamic programming array.

Example:

Given s = "acdcb" and p = "a*c?b", the function would return false because the pattern doesn't match the string.

This code performs dynamic programming to efficiently compute whether the string s matches the pattern p considering wildcard characters '*', which can represent any sequence of characters, and '?' which represents any single character.

*/
