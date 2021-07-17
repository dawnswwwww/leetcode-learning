/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let starts = {}
    let ends = {}
    paths.forEach((item, index) => {
        starts[item[0]] = index
        ends[index] = item[1]
        // starts.push(item[0])
        // ends.push(item[1])
    })
    // let temp = paths.flat()
    // let starts = temp.filter((item, index) => index % 2 === 0)
    // let ends = temp.filter((item, index) => index % 2 === 1)
    let i = 0
    // while (starts.indexOf(ends[i]) > -1) {
    //   i = starts.indexOf(ends[i])
    // }
    while (starts.hasOwnProperty(ends[i])) {
        i = starts[ends[i]]
    }

    return ends[i]
};
console.time()
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))
console.timeEnd()