// /**
//  * @param {string} senate
//  * @return {string}
//  */
// var predictPartyVictory = function(senate) {
//     let arr = senate.split('')
//     if (arr[0] === 'R') {
//       if (arr.indexOf('D') > -1) {
//         arr.splice(arr.indexOf('D'), 1)
//         arr.push(arr.shift())
//         return predictPartyVictory(arr.join(''))
//       } else {
//         return 'Radiant'
//       }
//     } else {
//         if (arr.indexOf('R') > -1) {
//           arr.splice(arr.indexOf('R'), 1)
//           arr.push(arr.shift())
//           return predictPartyVictory(arr.join(''))
//         } else {
//           return 'Dire'
//         }
//     }
// };

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let arr = senate.split('')
    while (true) {
        if (arr[0] === 'R') {
            if (arr.indexOf('D') > -1) {
                arr.splice(arr.indexOf('D'), 1)
                arr.push(arr.shift())
            } else {
                return 'Radiant'
                }     
        } else {
            if (arr.indexOf('R') > -1) {
                arr.splice(arr.indexOf('R'), 1)
                arr.push(arr.shift())
            } else {
                return 'Dire'
            }
        }
    }
};


console.log(predictPartyVictory("RDDDRRRRDRRRRDRRRRDDDRDDRRRRDDRRDDRDDDDRDDDDRRRDRRRRDDRRRDDDRRDDDRDDRRDDDDRRRRDDDRDRDDRDRDRDDDRDRDDDRRDDRRDDDRRDRDRRRDDRRDRDRDRDRDRDRDRRRRDRDRDRDRRDRDRDRDRDRRDRDRDRDRDRDRDRRDRDRDRDRDRDRDRRDRDRDRDRDRDRDDDRRDRDRRDRRRDRDRDRDRDRDRDRDRDRRRDRDRDRDRDR"))