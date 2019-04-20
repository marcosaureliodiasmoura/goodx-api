'use strict'

class Donation {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      amountdonate: 'required'
    }
  }
}

module.exports = Donation
