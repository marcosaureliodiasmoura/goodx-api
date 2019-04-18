'use strict'

class SessionController {
  // Serve para criar a sessão do usuário
  async store ({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)
    return token
  }
}

module.exports = SessionController
