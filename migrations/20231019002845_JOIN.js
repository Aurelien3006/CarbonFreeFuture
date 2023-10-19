/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('user_country_info', function (table) {
      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table.string('user_name', 100).notNullable();
      table.string('country_name', 50).notNullable();
    })
    .then(() => {
      return knex.raw(`
        INSERT INTO user_country_info (user_id, user_name, country_name)
        SELECT u.id, CONCAT(u.first_name, ' ', u.last_name), c.name
        FROM users AS u
        JOIN country AS c ON u.id_country = c.id_country
      `);
    });
  };
  
  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  
  exports.down = function (knex) {
    return knex.schema.dropTable('user_country_info');
  };
  

