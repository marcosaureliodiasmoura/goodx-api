'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DonationSchema extends Schema {
  up () {
    this.create('donations', table => {
      table.increments()
      table
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.decimal('amount_donate')
      table.timestamps()
    })
  }

  down () {
    this.drop('donations')
  }
}

module.exports = DonationSchema
