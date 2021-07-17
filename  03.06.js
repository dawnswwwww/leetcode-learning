var AnimalShelf = function() {
    this.cage = []
};

/** 
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function(animal) {
    this.cage.push(animal)
    return null
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function() {
    return this.cage.shift() || [-1, -1]
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function() {
    let i = 0
    while (i < this.cage.length) {
      if (this.cage[i][1] === 1) {
        return this.cage.splice(i, 1)[0]
      }
      i++
    }
    return [-1, -1]
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function() {
    let i = 0
    while (i < this.cage.length) {
      if (this.cage[i][1] === 0) {
          return this.cage.splice(i, 1)[0]
      }
      i++
    }
    return [-1, -1]
};

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */