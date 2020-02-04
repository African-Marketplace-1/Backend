const db = require('../dbConfig')

module.exports = {
    find,
    findById,
    findBy,
    add,
    updateListing,
    remove
    
}

function find(){
    return db('listings').orderBy('listings.id')
    .join('users','users.id', 'user_id')
    .select('listings.id','listings.user_id','users.username', 'location','item','description','price')
}


function findById(id){
    return db('listings')
    .join('users','users.id', 'user_id')
    .select('listings.id','listings.user_id','users.username', 'location','item','description','price')
    .where('listings.id',id)
    .first()
}

function findBy(filter,cloumn) {
    return db('listings')
    .join('users','users.id', 'user_id')
      .select('listings.id','listings.user_id','users.username', 'location','item','description','price')
      .where(cloumn,filter);
  }

function add(id,listing) {
    return db('listings')
      .insert({user_id:id,...listing }, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
  }

  function updateListing(changes, id) {
    return db('listings')
        .update(changes)
        .where({ id })
        .then(ids => {
            return findById(ids);
        });
}

function remove(id) {
    return db('listings')
      .where({ id })
      .del()
  }