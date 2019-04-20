'use strict'

class Donation {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      amount_donate: 'required'
    }
  }
}

module.exports = Donation
