

function ListNode(val) {
  this.val = val;
  this.next = null;
}
function mergeTwoLists(list1, list2) {
  if (list1 === null || list2 === null) {
    return list1 === null ? list2 : list1;
  }
  if (list1.val > list2.val) {
    const temp = list1;
    list1 = list2;
    list2 = temp;
  }
  list1.next = mergeTwoLists(list1.next, list2);
  return list1;
}

/*

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.


Example 1 

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:
Input: list1 = [], list2 = []
Output: []
Example 3:
Input: list1 = [], list2 = [0]
Output: [0]


*/

/*

explanation 

Absolutely! This code is designed to merge two sorted linked lists into a single sorted linked list. Let's break down the code step by step:
ListNode

ListNode is a simple constructor function used to create nodes for a linked list. Each node has a val property to store a value and a next property pointing to the next node in the list.
mergeTwoLists Function

This function takes in two linked lists, list1 and list2, as input arguments.
Base Cases

    The first conditional statement checks if either list1 or list2 is null. If one of them is null, the function returns the other list. If both are null, it returns null (an empty list).
    The second conditional statement ensures that list1 holds the smaller value between the heads of both lists. If not, it swaps list1 and list2.

Merging Process

    list1.next is then recursively set by calling mergeTwoLists with the next node of list1 and list2. This recursion continues until one of the lists becomes null.
    The function returns the modified list1, which represents the merged sorted linked list.

Example:

Let's say you have two sorted linked lists:

    list1 with values: 1 -> 3 -> 5 -> 7
    list2 with values: 2 -> 4 -> 6 -> 8

When you call mergeTwoLists(list1, list2), the function:

    Checks if either list1 or list2 is null. As they both have values, it proceeds to compare the first elements.
    list1.val (1) is smaller than list2.val (2), so it remains unchanged.
    Recursively calls mergeTwoLists(list1.next, list2), which becomes mergeTwoLists(3 -> 5 -> 7, 2 -> 4 -> 6 -> 8).
    Continues this process until it reaches the end of one of the lists.
    Eventually, it returns the merged sorted list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8.

This function leverages recursion and the property of sorted linked lists to efficiently merge them while maintaining the sorted order.


*/

