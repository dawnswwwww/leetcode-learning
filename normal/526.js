/**
 * 假设有从 1 到 N 的 N 个整数，如果从这 N 个数字中成功构造出一个数组，使得数组的第 i 位 (1 <= i <= N) 满足如下两个条件中的一个，我们就称这个数组为一个优美的排列。条件：

第 i 位的数字能被 i 整除
i 能被第 i 位上的数字整除
现在给定一个整数 N，请问可以构造多少个优美的排列？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/beautiful-arrangement
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number} n
 * @return {number}
 */
 var countArrangement = function(n) {
  // 第 i 位的数字能被 i 整除
  /**
   * 
   *  */    
};

/**
 * 1：[1]
 * 2: [1, 2], [2, 1]
 * 3: [1, 2, 3], [3, 2, 1], [2, 1, 3], [2, 3, 1]
 * 
 */



console.time()
console.log(countArrangement(8))
console.timeEnd()
