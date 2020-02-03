const db = require('../dbConfig')

module.exports = {
    find,
    add,
    remove
}

function find(){
    return db('avg_price_list')
}

function add (product){
    return db('avg_price_list')
        .insert(product, 'id')
        .then(ids => ({ id: ids[0] }))
}

function remove (id) {
    return db('avg_price_list')
    .where('id', Number(id))
    .del();
}