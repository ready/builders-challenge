import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('things', table => {
    table.increments('id')
    table.string('name')
    table.text('description')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('things')
}

