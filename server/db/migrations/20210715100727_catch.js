exports.up = function(knex) {
    return knex.schema.createTable('catch', table => {
      table.increments('id')
      table.integer('user_id')
      table.integer('fish_id')
      table.integer('region_id')
      table.integer('method_id')
      table.integer('quantity')
      table.string('photo')
      table.integer('weight')
      table.integer('time')
      table.timestamps(true,true)
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('catch')
  };
  