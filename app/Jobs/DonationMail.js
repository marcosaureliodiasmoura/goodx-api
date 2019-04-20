'use strict'

const Mail = use('Mail')
class DonationMail {
  // Quantos jobs quero processar, por padrão 1.
  static get concurrency () {
    return 1
  }

  // Chave única para cada job da aplicação
  static get key () {
    return 'DonationMail-job'
  }

  // Faz a lógica para enviar e-mail com jobs do kue
  async handle ({ email, name, surname, title, amountdonate }) {
    console.log(`Job: ${DonationMail.key}`)
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
}

module.exports = DonationMail
