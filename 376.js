/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    
    let prediff = nums[0] - nums[1];
    let count = prediff === 0 ? 1 : 2;
    
    for (let i = 0; i < nums.length-1; i++) {
        let diff = nums[i] - nums[i+1];
        if ((diff > 0 && prediff <= 0) || (diff < 0 && prediff >= 0)) {
            count++;
            prediff = diff
        }
    }
    return count
};

console.log(wiggleMaxLength([1,3,2,9,4,3,2,1,9,8,10,7,11,6,12,5,13,4,14,3]))