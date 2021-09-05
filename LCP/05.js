/**
 * @param {number} n
 * @param {number[][]} leadership
 * @param {number[][]} operations
 * @return {number[]}
 */
 var bonus = function(n, leadership, operations) {
  const leads = new Map()
  console.time('collect')
  for (let i = 0; i < n; i++) leads.set(i, [])
  leadership.forEach(([leader, member]) => {
    const temp = leads.get(leader) ?? []  
    temp.push(leads.get(member))
    leads.set(leader, temp)
  })


  console.timeEnd('collect')
  const res = []
  const coins = new Map()
  console.time('ops')
  console.log(operations.length)
  operations.forEach(([type, member, coin], index) => {
    console.log(index)
    // if (type === 3) return res.push(getTotal([member, ...(leads.get(member) ?? [])], coins))
    if (type === 3) return calcTotal(member, leads, coins)
    if (type === 1) return coins.set(member, (coins.get(member) ?? 0) + coin)
    if (type === 2) [member, ...leads.get(member)].forEach(member => coins.set(member, (coins.get(member) ?? 0) + coin))
    // if (type === 2) totalMember(member, leads).forEach(member => coins.set(member, (coins.get(member) ?? 0) + coin))
  })
  console.timeEnd('ops')
  return res
};
// 获取
const calcTotal = (who, leads, coins) => {
return totalMember(who, leads).reduce((t, m) => t + (coins.get(m) ?? 0), 0)
}

const totalMember = (who, leads) => [who, ...leads.get(who).flat(Infinity)]

// 发放

const getTotal = (members, coins) => members.reduce((t, m) => t + (coins.get(m) ?? 0), 0)