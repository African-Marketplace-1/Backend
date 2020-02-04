
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('avg_price_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('avg_price_list').insert([
        {id: 1,product_cat: 'Anamal Products', sub_category: 'Dary and eggs',product: 'local eggs', avg_price: 4},
        {id: 2,product_cat: 'Anamal Products', sub_category: 'Meat',product: 'Tilapia', avg_price: 6},
        {id: 3,product_cat: 'Anamal Products', sub_category: 'Livestock',product: 'Goat', avg_price: 150},
        {id: 4,product_cat: 'Dry Goods', sub_category: 'Beans',product: 'Kidney Beans', avg_price:2},
        {id: 5,product_cat: 'Dry Goods', sub_category: 'Rice',product: 'Morogoro Rice', avg_price: 3},
        {id: 6,product_cat: 'Dry Goods', sub_category: 'Rice',product: 'Imported Rice', avg_price: 4},
        {id: 7,product_cat: 'Dry Goods', sub_category: 'Cereals',product: 'Wheat Bran', avg_price: 5},
        {id: 8,product_cat: 'Fruit', sub_category: 'Bananas',product: 'Plantain', avg_price: 1},
        {id: 9,product_cat: 'Fruit', sub_category: 'Apples',product: 'Fuji', avg_price:2},
        {id: 10,product_cat: 'Vegitable', sub_category: 'Roots and tubers',product: 'Yams', avg_price:4},
        {id: 11,product_cat: 'Vegitable', sub_category: 'Greens',product: 'Kale', avg_price:5},
        {id: 12,product_cat: 'Other', sub_category: 'Smokables',product: 'Tobacco', avg_price:10},
      ]);
    });
};
