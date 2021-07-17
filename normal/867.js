var transpose = function(matrix) {
    let res = new Array(matrix[0].length).fill(0).map(i => [])
    console.log(res)
    matrix.forEach((i, oi) => {
      i.forEach((o, ii) => {
        console.log(o, oi, ii)
        res[ii][oi] = o
      })
    })
    console.log(res[0] === res[1])
    return res
};

function newArray () {
    return []
}

const test = [[1,2,3],[4,5,6],[7,8,9]]

console.log(transpose(test))