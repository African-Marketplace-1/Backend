
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username')
      .notNullable()
      .unique();
      tbl.string('password')
      .notNullable();
      tbl.string('profile_pic_url');
  })
  .createTable('listings', tbl =>{
        tbl.increments();
        tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        tbl.string('location',100)
        .notNullable()
        tbl.string('item', 100)
        .notNullable()
        tbl.text('description', 200)
        .notNullable()
        tbl.integer('price')
        .notNullable()
  })
  .createTable('avg_price_list', tbl=>{
      tbl.increments()
      tbl.string('product_cat')
      tbl.string('sub_category')
      tbl.string('product')
      tbl.integer('avg_price')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('avg_price_list')
    .dropTableIfExists('listings')
    .dropTableIfExists('users')
};
