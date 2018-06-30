var express = require('express');
var router = express.Router();
var Message = require('../models/dataSchema');


router.post('/create',(req, res, next) =>{
    var newMessage = new Message({
        name:req.body.name
    });
    newMessage.save((err,message)=>{
        if(err)
        res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: message });
    });
});

router.get('/read',(req, res, next) =>{
    Message.find({},(err,messages)=>{
        if(err)
        res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: messages });
    });
});

router.put('/update',(req, res, next) =>{
    Message.findById(req.body._id,(err,message)=>{
        if(err)
        res.status(500).json({ errmsg:err });
        message.name=req.body.name
        message.save((err,message)=>{
            if(err)
            res.status(500).json({ errmsg: err });
            res.status(200).json({ msg: message });
        });
    });
});

router.delete('/delete/:id',(req, res, next) =>{
    Message.findOneAndRemove({_id:req.params.id},(err, message)=>{
        if(err)
        res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: message });
    });
});




router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
