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

/**
 * Projects And Donations
 */
Route.group(() => {
  Route.resource('projects', 'ProjectController').apiOnly()
  Route.resource('projects.donations', 'DonationController').apiOnly()
  Route.resource('donations', 'DonationController')
}).middleware(['auth'])
