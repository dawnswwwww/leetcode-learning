

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head, sub = false) {
    let cur = head
    if (!cur) return head
    while(true) {
        const next = cur.next
        if (cur.child) {
            const temp = cur
            doubleLink(cur, cur.child)
            cur = flatten(cur.child, true)
            temp.child = null
        }
        if (next) doubleLink(cur, next)
        if (cur.next) cur = cur.next
        else {
            if (sub) return cur
            return head
        }
    }
};

const wholeLink = (head) => {
    const arr = []
    while(head) {
        arr.push(head)
        head = head.next
    }
    return arr 
}

const doubleLink = (pre, nex) => {
    pre.next = nex
    if(nex) nex.prev = pre
    // console.log('doubleLink', pre.val, nex.val)
}

