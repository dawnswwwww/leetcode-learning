/**
 * 
 * 
存在一个由 n 个不同元素组成的整数数组 nums ，但你已经记不清具体内容。好在你还记得 nums 中的每一对相邻元素。

给你一个二维整数数组 adjacentPairs ，大小为 n - 1 ，其中每个 adjacentPairs[i] = [ui, vi] 表示元素 ui 和 vi 在 nums 中相邻。

题目数据保证所有由元素 nums[i] 和 nums[i+1] 组成的相邻元素对都存在于 adjacentPairs 中，存在形式可能是 [nums[i], nums[i+1]] ，也可能是 [nums[i+1], nums[i]] 。这些相邻元素对可以 按任意顺序 出现。

返回 原始数组 nums 。如果存在多种解答，返回 其中任意一个 即可。

} adjacentPairs 
 */

/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
 var restoreArray = function(adjacentPairs) {
  const map = new Map()
  adjacentPairs.forEach([key, value] => )
};


const arr = [[2,1],[3,4],[3,2]]

console.time()
console.log(restoreArray(arr))
console.timeEnd()