'use strict'

// const Database = use('Database')
const User = use('App/Models/User')
class UserController {
  async store ({ request }) {
    const data = request.only(['name', 'surname', 'email', 'password'])
    // const addresses = request.input('addresses')
    // const trx = await Database.beginTransaction()

    const user = await User.create(data)
    // const user = await User.create(data, trx)
    // await user.addresses().create(addresses, trx)
    // await trx.commit()

    return user
  }
}

module.exports = UserController
