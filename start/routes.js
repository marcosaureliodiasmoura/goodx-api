'use strict'

const Route = use('Route')

/**
 * Users
 */
Route.post('users', 'UserController.store').validator('User')

/**
 * Sessions
 */
Route.post('sessions', 'SessionController.store').validator('Session')

/**
 * ForgotPassword
 */
Route.post('forgot', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
)
Route.put('forgot', 'ForgotPasswordController.update').validator(
  'ResetPassword'
)

/**
 * Projects And Donations
 */
Route.group(() => {
  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([[['projects.store'], ['Project']]]))

  Route.resource('projects.donations', 'DonationController')
    .apiOnly()
    .validator(new Map([[['projects.donations.store'], ['Donation']]]))

  Route.resource('donations', 'DonationController').apiOnly()
}).middleware(['auth'])
