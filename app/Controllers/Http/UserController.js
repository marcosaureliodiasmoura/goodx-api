'use strict'

const User = use('App/Models/User')
class UserController {
  async store ({ request }) {
    const data = request.only(['name', 'surname', 'email', 'password'])
    const addresses = request.input('addresses')
    const user = await User.create(data)
    await user.addresses().create(addresses)
    return user
  }
}

module.exports = UserController
