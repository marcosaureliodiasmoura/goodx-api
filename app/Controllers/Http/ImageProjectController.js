'use strict'

const Helpers = use('Helpers')
const Project = use('App/Models/Project')
class ImageProjectController {
  async store ({ request, params }) {
    const project = await Project.findOrFail(params.id)
    const images = request.file('image', {
      type: ['image'],
      size: '10mb'
    })
    await images.moveAll(Helpers.tmpPath('uploads'), file => ({
      name: `${Date.now()}-${file.clientName}`
    }))
    if (!images.moveAll()) {
      return images.erros()
    }
    await Promise.all(
      images
        .movedList()
        .map(image => project.images().create({ path: image.fileName }))
    )
  }

  async show ({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`))
  }
}

module.exports = ImageProjectController
