var SummaryRanges = function() {
  this.arr = [];
  this.record = new Set();
  this.intervals = [];
};

/** 
* @param {number} val
* @return {void}
*/
SummaryRanges.prototype.addNum = function(val) {
  if (this.record.has(val)) return
  this.record.add(val, true)
  let index = 0
  for (;index < this.arr.length;index++) {
    if (val < (this.arr[index])) break
  }
  this.arr.splice(index, 0, [val])
  return null
};

/**
* @return {number[][]}
*/
SummaryRanges.prototype.getIntervals = function() {
const list = this.arr.map(arr => arr[0])
console.log(list)
const res = []
let last
let head
for (let i = 0; i < list.length; i++) {
  if (head === undefined) {
    head = last = list[i]
  }
  if (last + 1 === list[i + 1]) {
    last = list[i + 1]
    continue
  } else {
    res.push([head, last])
    head = undefined
  }
}
  return res
};

/**
* Your SummaryRanges object will be instantiated and called as such:
* var obj = new SummaryRanges()
* obj.addNum(val)
* var param_2 = obj.getIntervals()
*/