const { json } = require('body-parser');
const express=require('express')
const router=express.Router();
const user=require('../models/userInfoModel');
var base64Img = require('base64-img');
var domain=require('../domain.js')
router.get('/',async function(req,res)
{
console.log("hyyyyy");
res.send("hey");
});
router.get('/:userID',async function(req,res)
{
console.log("heyyyyyy");
x= await user.findById(req.params.userId,async function(err,data){
    if(err)
    res.status(400).send("Not Found");
    if(!err)
    { d=JSON.stringify(data);
        d=JSON.parse(d);
        delete d['Password'];
    console.log(d);
        res.status(200).send(d);}
});
});
module.exports=router;