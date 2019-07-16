const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const donation = require('../model/donation.js');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//Save
router.post('/api/donation', function(req,res,next){
    donation.create(req.body, function (err,donation) {
        if(err) return next(err);
        res.json(donation);
    });
});

//Get all
router.get('/api/donation', function(req,res,next){
    donation.find(function (err,donation) {
        if(err) return next(err);
        res.json(donation);
    });
});

//Get by id
router.get('/api/donation/:id', function(req,res,next){
    donation.findById(req.params.id, function (err,donation) {
        if(err) return next(err);
        res.json(donation);
    });
});

//Update by id
router.put('/api/donation/:id', function(req,res,next){
    donation.findByIdAndUpdate(req.params.id, req.body, function (err,donation) {
        if(err) return next(err);
        res.json(donation);
    });
});

//Delete by id
router.delete('/api/donation/:id', function(req,res,next){
    donation.findByIdAndDelete(req.params.id, req.body, function (err,donation) {
        if(err) return next(err);
        res.json(donation);
    });
});

module.exports = router;