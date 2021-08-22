

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    //   chars = chars.join('').replace(/(\w)\1+/g, (words, word) => word + words.length ).split('')
    //   console.log(chars)
    //   return chars.length
    let recordWord = ''
    let count = 0
    let archIndex = 0
    const reset = () => {
        recordWord = ''
        count = 0
    }
    for (let i = 0 ; i <= chars.length;) {
        if (recordWord) {
            if (recordWord === chars[i]) {
                count++
                i++
            }
            else if (count > 1){
                chars.splice(i - count + 1, count - 1, ...String(count).split(''))
                i = archIndex +  String(count).split('').length + 1
                reset()
            } else {
                // reset()
                recordWord = chars[i]
                count = 1
                archIndex = i
                i++
            }
        } else {
            recordWord = chars[i]
            count = 1
            archIndex = i
            i++
            
        }
    }
    return chars
};

const chars = ["a","a","b","b","c","c","c"]
console.time();
console.log(compress(chars))
console.timeEnd()