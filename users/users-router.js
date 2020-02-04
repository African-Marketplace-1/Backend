const router = require('express').Router()
const Users = require('./users-model')
const Listings = require('../listings/listings-model')

router.get('/:id', (req,res)=>{
    Users.findById(req.params.id)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: 'failed to get user'})
    })
})

router.get('/:id/listings', (req, res) => {
    Listings.findBy(req.params.id, 'user_id')
        .then(listings => {
            res.status(200).json(listings);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'failed to get users listings'})
        })
})

router.post('/:id/listings', (req, res) => {
    Listings.add(req.params.id,req.body)
        .then(listing => {
            res.status(200).json(listing);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'failed to post new listing'})
        })
})


router.put('/:id/listings/:id', (req, res) => {
    Listings.updateListing(req.body, req.params.id)
        .then(updated => {
            res.status(200).json({message: 'the listing has been updated'});
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'failed to update listing'})
        })
})

router.delete('/:id/listings/:id',(req, res) => {
    Listings.remove(req.params.id)
        .then(num => {
            if(num > 0) {
                res.status(200).json({message: 'removed listing' });
            } else {
                res.status(404).json({ message: 'Listing could not be found' })
            }
        })
        .catch(err => {console.log(err)
        res.status(500).json({message: 'failed to remove listing'})})
})


module.exports = router 