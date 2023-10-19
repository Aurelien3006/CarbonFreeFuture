/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('country', function (table) {
      table.increments('id_country').primary();
      table.string('name', 50).notNullable();
      table.decimal('transport_emission', 5, 2).notNullable();
      table.decimal('diet_emission', 5, 2).notNullable();
      table.decimal('electricity_emission', 5, 2).notNullable();
      table.decimal('waste_emission', 5, 2).notNullable();
    });
  };
 

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('country');
  };
