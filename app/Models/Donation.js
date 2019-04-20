'use strict'

const Model = use('Model')

class Donation extends Model {
  static boot () {
    super.boot()
    this.addHook('afterSave', 'DonationHook.sendNewDonationMail')
    this.addHook('beforeUpdate', 'DonationHook.sendNewDonationMail')
  }

  // eu posso doar várias vezes no mesmo projeto, entao, belongsToMany
  project () {
    return this.belongsTo('App/Models/Project')
  }

  // Pra cada doação eu tenho apenas um doador
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Donation
