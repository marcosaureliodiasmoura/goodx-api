'use strict'

class Project {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      description: 'required',
      amount_collected: 'required'
    }
  }
}

module.exports = Project
