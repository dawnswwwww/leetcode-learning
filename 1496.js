/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    if (!path) return false
    let result = new Map()
    let curP = [0, 0]
    let cur = path[0]
    result.set(curP.toString())
    while (cur) {
      switch (cur) {
        case 'N': curP[1]++; break;
        case 'S': curP[1]--; break;
        case 'E': curP[0]++; break;
        case 'W': curP[0]--; break;
      }
      if (result.has(curP.toString())) {
        return true
      } else {
        result.set(curP.toString())
      }
      path = path.substr(1)
      cur = path[0]
    }

    return false
};