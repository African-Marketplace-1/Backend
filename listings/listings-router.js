const router = require('express').Router()

const Listings = require('./listings-model')

router.get('/', (req, res) => {
    Listings.find()
    .then(listing => {
      res.json(listing);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get listingss' });
    });
  });

  router.post('/', (req, res) => {
    const schemeData = req.body;
  
    Listings.add(schemeData)
    .then(listing => {
      res.status(201).json(listing);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new Listing' });
    });
  });

//   router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const changes = req.body;
  
//     Listings.findById(id)
//     .then(scheme => {
//       if (scheme) {
//         List.update(changes, id)
//         .then(updatedScheme => {
//           res.json(updatedScheme);
//         });
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id' });
//       }
//     })
//     .catch (err => {
//       res.status(500).json({ message: 'Failed to update scheme' });
//     });
//   });

//   router.delete('/:id', (req, res) => {
//     const { id } = req.params;
  
//     Schemes.remove(id)
//     .then(deleted => {
//       if (deleted) {
//         res.json({ removed: deleted });
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id' });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to delete scheme' });
//     });
//   });

  module.exports = router 