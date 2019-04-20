'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { response }) {
    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    }
  }
}

module.exports = ExceptionHandler
