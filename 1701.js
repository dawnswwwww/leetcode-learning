/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let total = 0
    let cus = 0
    let now = 0
    let n = customers.length
    for (let i = 0; i < n; i++) {
      if (now < customers[i][0]) {
        now = customers[i][0]
        now = now + customers[i][1]
        total += now - customers[i][0]
      } else {
              now = now + customers[i][1]
        total += now - customers[i][0]
      }
    }
    console.log(total)
    return total / n
  };