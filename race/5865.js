/**
 * @param {number[]} nextVisit
 * @return {number}
 */
 var firstDayBeenInAllRooms = function(nextVisit) {
  const n = nextVisit.length
  const visited = new Array(nextVisit.length).fill(0)
  let days = 0
  let next = nextVisit[0]
  while(true) {
      visited[next]++
      
      if (visited[next] % 2) next = nextVisit[next]
      else next = (next + 1) % n
      if (!visited.some(i => !i)) break
      days++
  }

  return days % (1e9 + 7)
};

console.log(firstDayBeenInAllRooms([0, 0]))