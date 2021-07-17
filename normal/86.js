function ListNode(val) {
    this.val = val;
    this.next = null;
}
let base = 65
let dic = {}
let arr = [1,4,3,2,5,2]
let now = null
arr = arr.reverse()
for(let i = 0; i < arr.length; i++) {
    let temp = new ListNode(arr[i])
    temp.next = now
    dic[String.fromCharCode(base++)] = temp
    now = temp
}
console.log(dic['B'])
var partition = function(head, x) {
    let small = new ListNode(0);
    const smallHead = small;
    let large = new ListNode(0);
    const largeHead = large;
    while (head !== null) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            large.next = head;
            large = large.next;
        }
        head = head.next;
    }
    large.next = null;
    small.next = largeHead.next;
    return smallHead.next;
}


console.log(partition(dic[String.fromCharCode(--base)], 3))