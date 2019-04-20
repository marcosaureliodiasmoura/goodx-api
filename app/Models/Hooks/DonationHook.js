'use strict'

const DonationHook = (exports = module.exports = {})
const Mail = use('Mail')

DonationHook.sendNewDonationMail = async donationInstance => {
  if (!donationInstance.user_id) return
  const { email, name, surname } = await donationInstance.user().fetch()
  const { title } = await donationInstance.project().fetch()
  const { amountdonate } = donationInstance
  console.log(donationInstance.amountdonate)

  await Mail.send(
    ['emails.donation_sendmail'],
    {
      name,
      surname,
      title,
      amountdonate
    },
    message => {
      message
        .to(email)
        .from('suporte@goodx.com', 'Suporte | Goodx')
        .subject('Doação Realizada')
    }
  )
}
