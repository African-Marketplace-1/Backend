
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Cherrys cherries', password: 'passatiempo1', profile_pic_url: null},
        {id: 2, username: 'Jerrys berries', password: 'passatiempo2', profile_pic_url: null},
        {id: 3, username: 'Peters peanut butter', password: 'passatiempo3', profile_pic_url: null}
      ]);
    });
};
