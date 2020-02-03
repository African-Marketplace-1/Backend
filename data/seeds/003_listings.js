
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {id: 1, user_id: 1, location: 'Placerville', item: 'Cherries', description: '1lb boxes of fresh cherries', price: 4},
        {id: 2, user_id: 2, location: 'Point Arena', item: 'Berries', description: '1lb boxes of fresh black berries', price: 5},
        {id: 3, user_id: 3, location: 'Yolo County', item: 'Peanut Butter', description: '9oz jars of pure peanut butter', price: 6}
      ]);
    });
};
