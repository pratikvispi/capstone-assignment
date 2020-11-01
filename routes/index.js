const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth')
//Dashboard model
const Dash = require('../models/Dashboard');

//Welcome page
router.get('/' , (req,res) => res.render('welcome'));
//Dashboard
router.get('/dashboard' , ensureAuthenticated,(req,res) => 
res.render('dashboard',{
    name : req.user.name
}));

// //Dashboard handle
router.post('/dashboard' ,(req,res,next) => { 
    var item = {
        rollno : req.body.rollno,
        name : req.body.name,
        age : req.body.age,
        symptoms : req.body.symptoms,
        psr : req.body.psr
    };
    var data = new Dash(item);
    //Saving data
    data.save();
    res.redirect('/dashboard');
});




module.exports = router;