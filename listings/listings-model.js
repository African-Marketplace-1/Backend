const db = require('../dbConfig')

module.exports = {
    find,
    add,
    update,
    remove
}

function find(){
    return db('listings')
}

function add (scheme){
    return db('listings')
        .insert(scheme, 'id')
        .then(ids => ({ id: ids[0] }))
}

function update (listing, id){
    return db('listings')
        .where('id', Number(id))
        .update(listing)
}

function remove (id) {
    return db('listings')
    .where('id', Number(id))
    .del();
}