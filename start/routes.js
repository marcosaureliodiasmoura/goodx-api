'use strict'

const Route = use('Route')

/**
 * Users
 */
Route.post('users', 'UserController.store').validator('User')
Route.get('users', 'UserController.index')

/**
 * Sessions
 */
Route.post('sessions', 'SessionController.store').validator('Session')
// Route.post('sessions', 'SessionController.store')

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

  Route.post('projects/:id/images', 'ImageProjectController.store')

  Route.resource('projects.donations', 'DonationController')
    .apiOnly()
    .validator(new Map([[['projects.donations.store'], ['Donation']]]))

  Route.resource('donations', 'DonationController').apiOnly()
})
// }).middleware(['auth'])
