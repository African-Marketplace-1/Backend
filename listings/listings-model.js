const db = require('../dbConfig')

module.exports = {
    find,
    findById,
}

function find(){
    return db('listings').orderBy('listings.id')
    .join('users','users.id', 'user_id')
    .select('listings.id','users.username', 'location','item','description','price')
}


function findById(id){
    return db('listings')
    .join('users','users.id', 'user_id')
    .select('listings.id','users.username', 'location','item','description','price')
    .where('listings.id',id)
    .first()
}
