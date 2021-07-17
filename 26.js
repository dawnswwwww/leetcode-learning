var removeDuplicates = function(nums) {
    const n = nums.length
    loop:
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (nums[i] !== undefined && nums[j] !== undefined && nums[i] === nums[j]) {
          console.log(i, j, 'eqaul')
          nums.splice(j, 1)
          j--
        } else {
          continue loop
        }
      }
    }
};

const nums = [0,0,1,1,1,2,2,3,3,4]
console.time()
removeDuplicates(nums)
console.timeEnd()
console.log(nums)