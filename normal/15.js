/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return []
    const res = []
    const two = {}
    const n = nums.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (!two[j]) {
                two[j] = [[nums[i], nums[j]]]
            } else {
                two[j].push([nums[i], nums[j]])
            }
        }
    }

    for (const key in two) {
        for(let i = 0; i < two[key].length; i++) {
            for (let j = +key; j < n; j++) {
                if (two[key][i][0] + two[key][i][1] + nums[j] === 0) {
                    res.push([two[key][i][0], two[key][i][1], nums[j]].sort((a, b) => a - b))
                }
            }
        }
    }

    return Array.from(new Set(res.map(i => i.toString()))).map(i => i.split(','))
}
const nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))