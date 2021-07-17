// /**
//  * @param {number[]} nums
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var find132pattern = function(nums) {
//     let max = nums[0]
//     for (let k = 0; k < nums.length; k++) {
//         if (k !== 0 && nums[k] >= max) continue
//         for (let i = nums.length - 1; i > k; i--) {
//             if (nums[i] <= nums[k]) continue
//           for (let j = i - 1; j > k; j--) {
//             if (nums[j] > nums[i]) {
//               console.log(k,i,j)
//               return true
//             }
//           }
//         }
//     }
//     return false
//   };


/**
 * @param {number[]} nums
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
      for (let i = 0; i < nums.length; i++) {
          for (let j = i + 1; j < nums.length; j++) {
              if (nums[i] >= nums[j]) continue
              for (let k = j + 1; k < nums.length; k++) {
                  if (nums[k] < nums[j]) return true
              }
          }
      }
      return false
  };

  console.log(find132pattern([3,1,4,2]))