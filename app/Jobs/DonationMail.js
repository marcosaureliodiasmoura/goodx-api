'use strict'

// Execute o Docker local para redis:
// Para criar:
// docker run --name redis -p 6379:6379 -d -t redis:alpine
// 633c52cfa8d19aba9943f020bc15db4d40064a2b3db5e917e69dbe920a436da6
// Para executar:
// docker start redis

// adonis kue: listen
// conta do mailtrap: a do github

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
