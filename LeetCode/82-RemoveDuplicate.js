// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 var deleteDuplicates = function(head) {
    if(!head){return null}
    if(!head.next){return head}
    let node= new ListNode(undefined, head);
    let prev = node;
    let current = head;
    while(current){
        while(current.next && prev.next && prev.next.val=== current.next.val){
            current = current.next;
        }
        if(prev.next == current){
            prev = prev.next
        }
        else{
            prev.next = current.next;
        }
        current = current.next
    }
    return node.next;
    
};