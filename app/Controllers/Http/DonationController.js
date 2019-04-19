'use strict'

const Donation = use('App/Models/Donation')
class DonationController {
  async index ({ params }) {
    const donations = await Donation.all()
    return donations
  }

  async store ({ request, params, auth }) {
    // O id do projeto iremos pegar no parâmetro da url
    const data = request.only(['amount_donate', 'project_id'])

    const donation = await Donation.create({
      ...data,
      user_id: auth.user.id,
      project_id: params.projects_id
    })
    return donation
  }

  async show ({ params }) {
    const donation = await Donation.findOrFail(params.id)

    return donation
  }
}

module.exports = DonationController
