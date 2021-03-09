const express = require('express')
const router = express.Router()
const User = require("../models/user.model")


router.get('/',(req,res)=>{

    User
    .findById(req.user._id)
    .then(response  => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})

router.put('/edit/:id',(req,res)=>{

    User
    .findByIdAndUpdate(req.user._id)
    .then(response  => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})

router.delete('/delete/:id',(req,res)=>{
    
    User
    .findByIdAndRemove(req.user._id)
    .then(response  => res.json(response))
    .catch(err => res.status(500).json({ code: 500, message: 'Error fetching user', err }))
})

module.exports = router