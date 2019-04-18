'use strict'

const Route = use('Route')

/**
 * Users
 */
Route.post('users', 'UserController.store')

/**
 * Sessions
 */
Route.post('sessions', 'SessionController.store')

/**
 * ForgotPassword
 */
Route.post('forgot', 'ForgotPasswordController.store')
Route.put('forgot', 'ForgotPasswordController.update')
