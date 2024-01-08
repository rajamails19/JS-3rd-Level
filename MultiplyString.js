

function multiply(num1, num2) {
  const m = num1.length;
  const n = num2.length;
  const pos = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      const multiply = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
      const sum = multiply + pos[i + j + 1];
      pos[i + j] += Math.floor(sum / 10);
      pos[i + j + 1] = sum % 10;
    }
  }
  let sb = '';
  for (const p of pos) {
    if (p > 0 || sb.length > 0) {
      sb += p;
    }
  }
  return sb.length === 0 ? '0' : sb;
}

/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 
Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088"

*/

/*
Explanation

This JavaScript function multiply multiplies two numbers represented as strings (num1 and num2). Let's break it down step by step:
Function Purpose:

    Inputs:
        num1: A string representing the first number.
        num2: A string representing the second number.

    Output:
        Returns the product of the two input numbers as a string.

Variables Used:

    m: Length of the num1 string.
    n: Length of the num2 string.
    pos: An array to store the intermediate products of multiplication.
    multiply: Temporary variable to hold the multiplication result of individual digits.
    sum: Temporary variable to hold the sum of the multiplication result and the corresponding position in pos.
    sb: A string variable used to construct the final result.

Algorithm Steps:

    Initialization:
        The function initializes the lengths of num1 and num2 and creates an array pos with a length of m + n filled with zeroes. This array will store the intermediate results of multiplication.

    Multiplication:
        The function uses nested loops to simulate manual multiplication:
            It iterates through the num1 and num2 strings from right to left.
            For each pair of digits, it calculates their product and adds it to the corresponding position in the pos array.
            The carry is considered and added to the next position in pos.

    Construction of Result String:
        After completing the multiplication, it constructs the result string sb by iterating through the pos array.
        It checks for non-zero values or if the string sb is already non-empty, then appends these non-zero digits to sb.

    Return:
        Returns the final string sb as the product of num1 and num2.

Example:

Let's illustrate with an example:

    num1 = "123"
    num2 = "456"

When calling multiply(num1, num2):

    It performs the multiplication of 123 and 456.
    After completing the multiplication process, it constructs the result string sb = "56088".

Therefore, the function returns "56088", which is the product of 123 and 456 represented as a string.

*/
