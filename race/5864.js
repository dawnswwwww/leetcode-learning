/**
 * @param {number[][]} properties
 * @return {number}
 */
 var numberOfWeakCharacters = function(properties) {
  const attacts = [];
  const defenses = [];
  
  properties.forEach(([attact, defense]) => {
    attacts.push(attact)
    defenses.push(defense)
  })

  let total = 0
  
  properties.forEach(([attact, defense], index) => {
    if (attacts.some((at, index) => at > attact && defenses[index] > defense)) {
      total++
    }
  })
    
  return total
  
};


const properties = [[2,2],[3,3]]

console.log(numberOfWeakCharacters(properties))