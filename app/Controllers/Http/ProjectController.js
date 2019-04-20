'use strict'

const Project = use('App/Models/Project')

class ProjectController {
  async index ({ request }) {
    const { page } = request.get()
    const projects = await Project.query()
      .with('user')
      .paginate(page)

    return projects
  }

  async store ({ request, auth }) {
    // Vou buscar os campos do banco de dados para criar o projeto
    const data = request.only(['title', 'description', 'amount_collected'])

    // Utilizando o auth, posso buscar o usuário logado e assim posso criar o projeto relacionado ao user
    const project = await Project.create({ ...data, user_id: auth.user.id })
    return project
  }

  async show ({ params }) {
    const project = await Project.findOrFail(params.id)

    await project.load('user')
    await project.load('donations')

    return project
  }

  async update ({ request }) {}

  async destroy ({ request }) {}
}

module.exports = ProjectController
