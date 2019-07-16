const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const user = require('../model/user.js');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//Save
router.post('/api/user', function(req,res,next){
    user.create(req.body, function (err,user) {
        if(err) return next(err);
        res.json(user);
    });
});

//Get all
router.get('/api/user', function(req,res,next){
    user.find(function (err,user) {
        if(err) return next(err);
        res.json(user);
    });
});

//Get by id
router.get('/api/user/:id', function(req,res,next){
    user.findById(req.params.id, function (err,user) {
        if(err) return next(err);
        res.json(user);
    });
});

//Update by id
router.put('/api/user/:id', function(req,res,next){
    user.findByIdAndUpdate(req.params.id, req.body, function (err,user) {
        if(err) return next(err);
        res.json(user);
    });
});

//Delete by id
router.delete('/api/user/:id', function(req,res,next){
    user.findByIdAndDelete(req.params.id, req.body, function (err,user) {
        if(err) return next(err);
        res.json(user);
    });
});


module.exports = router;