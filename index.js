const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./routes/user');
const donation = require('./routes/donation');
app.use('/',user);
app.use('/',donation);
//Connect to DB

const db = 'mongodb://localhost:27017/mongo-project';

mongoose.connect(db, err => {
    if(err){
        console.log('Error:'+err)
    }else{
        console.log('Connected to mongo db...');
    }
})

//Default route
app.get('/',(req,res) => {
    res.send('Dafault Route');
});

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log('Listening on port:'+port));