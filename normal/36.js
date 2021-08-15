/**
 * 思路: 遍历时分块验证
 * 1. 行 2. 列  3.3x3区域
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  const cols = Array.from({length: 9}, () => new Set())
  const squre = Array.from({length: 9}, () => new Set())
  for(let i = 0; i < 9; i++) {
    let nums = board[i]
    let temp = new Set()
    for (let j = 0; j < 9; j++) {
      let num = nums[j]
      if (num === '.') continue
      if(temp.has(num)) return false
      temp.add(num)
      if(cols[j].has(num)) return false
      cols[j].add(num)
      const squreIndex =  ~~(i / 3) + ~~(j / 3) * 3
      if (squre[squreIndex].has(num)) return false
      squre[squreIndex].add(num)
    }
  }
  return true
};


const board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.time()
console.log(isValidSudoku(board))
console.timeEnd()
