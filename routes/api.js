const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');


//Get list of Ninjas from DB
router.get('/ninjas', function(req, res, next){
    Ninja.find().then(function(ninja){
        res.send(ninja);
    })
});

//Add a new Ninja to DB
router.post('/ninjas', function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

//Update Ninja in DB
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        })

    })
});

//Delete Ninja in DB
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    })
});

module.exports = router;