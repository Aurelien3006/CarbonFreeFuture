/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('first_name', 50).notNullable();
      table.string('last_name', 50).notNullable();
      table
        .integer('id_country')
        .references('id_country')
        .inTable('country')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  };
  
  
 
  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };


