/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
  const regtemplate = (words) => new RegExp(`^[${words}]+$`,'ig')
  // const lines = [regtemplate('qwertyuiop'), regtemplate('asdfghjkl'), regtemplate('zxcvbnm')]
      const lines = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  // return words.filter((word) => {
  //   const res = lines.some(r => {
  //     const res = r.exec(word)
  //     console.log(r, word, res)
  //     return res 
  //   })

  return words.filter((word) => {
    const res = lines.some(r => {
      return word.toLowerCase().split('').every((k => r.includes(k)))
    })
    return res
  })
};