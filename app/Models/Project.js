'use strict'

const Model = use('Model')

class Project extends Model {
  // Um projeto possui um único usuário responsável por ele.
  user () {
    return this.belongsTo('App/Models/User')
  }

  // como mostrar todos com este método relacionado? hasMany() trás todos os dados que estão relacionados.
  // O belongsToMany me trazia apenas 1 donation, gerando erro na consulta apartir de 2 donations para o mesmo projeto.
  donations () {
    return this.hasMany('App/Models/Donation')
  }
}

module.exports = Project
