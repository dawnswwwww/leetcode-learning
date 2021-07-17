// const a = {a : 1}
let a = '123'
function change (t) {
    // t.b = 2
    t = '123456'
    console.log(t === a)
}

change(a)
console.log(a)

