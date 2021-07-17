/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
    this.per = n
    this.count = 0
    this.discount = discount / 100
    this.map = {}
    products.forEach((item, index) => {
      this.map[item] = prices[index]
    })
};

/** 
 * @param {number[]} product 
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
    this.count++
    let bill = 0
    for (let i = 0; i < product.length; i++) {
      bill+=(amount[i] * this.map[product[i]])
    }
    if (this.count % this.per === 0) {
      return (bill - bill * this.discount)
    } else {
      return bill
    }
};

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */