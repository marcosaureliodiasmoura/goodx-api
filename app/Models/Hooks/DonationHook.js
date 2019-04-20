'use strict'

const DonationHook = (exports = module.exports = {})
const kue = use('Kue')
const Job = use('App/Jobs/DonationMail')

// O kue nos ajuda a gerenciar tarefas secundarias que são chamadas de jobs
// O redis executa essas tarefas em background, é um segundo banco de dados que registra apenas chave e valor apenas.

// Ou seja, crio uma nova doação, ele vai pegar os dados desta doação e vai jogar na chave do job feito no kue para então enviar o email em background
DonationHook.sendNewDonationMail = async donationInstance => {
  if (!donationInstance.user_id) return
  const { email, name, surname } = await donationInstance.user().fetch()
  const { title } = await donationInstance.project().fetch()
  const { amountdonate } = donationInstance
  // console.log(donationInstance.amountdonate)

  kue.dispatch(
    Job.key,
    { email, name, surname, title, amountdonate },
    { attempts: 3 }
  )
}
