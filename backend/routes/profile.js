const router = require('express').Router();
const User = require('../models/User')

router.post('/update',(req,res)=>{
    // console.log(req.user.id);
    // console.log(req.body);
    User.findByIdAndUpdate(req.user.id,req.body.values).then((result)=>{
        res.redirect('http://localhost:3000/edit')
    }).catch((err)=>{
        res.json(err)
    })
})

router.get('/delete',(req,res)=>{
    User.findByIdAndDelete(req.user.id).then((result)=>{
        res.redirect('http://localhost:3000')
    })
})


module.exports = router;
