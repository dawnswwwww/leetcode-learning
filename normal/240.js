/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  const n = matrix.length
  const m = matrix[0].length
  for (let i = 0; i < n; i++) {
    const arr = matrix[i]
    if (arr[0] <= target && arr[arr.length - 1] >= target) {
      const res = binarySearch(arr, target)
      if (res > -1) return true
    }
  }
  return false
};

const binarySearch = (list, val) => {
let startIndex = 0
let endIndex = list.length

while (startIndex < endIndex) {
  const midIndex = ~~((startIndex + endIndex) / 2)
  if (list[midIndex] > val) endIndex = midIndex
  else if (list[midIndex] < val) startIndex = midIndex + 1
  else return midIndex
}
return -1
}



const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]

const target = 5

console.log(searchMatrix(matrix, target))