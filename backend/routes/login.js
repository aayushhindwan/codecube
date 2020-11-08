const { clearCache } = require('ejs');
const express = require('express');
const router = express.Router();
const user_database=require('../models/user');

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
router.post('/login',(req,res) => {
    var em=req.body.email;
    var pass=req.body.pass;
    console.log(em+" "+pass);
    let dd="";
     let flag=0;
     user_database.findOne({email:em,password:pass},function(err,obj){
        if(err){
            console.log(err);
            flag=0;
            res.end("notdone")
        }
        try{
        console.log(obj.email);
        console.log(obj.password);
        }
        catch(error)
        {
            console.log(error);
            res.end("notdone");
        }
        if(!isEmpty(obj)&&obj.email==em){ 
            req.session.email=em;
            res.end("done");
            flag=1;
        }
    });
    setTimeout(function(){
        if(flag==1){
        req.session.email=em;
        res.end("done");
        }
        else 
        {
            console.log("We are here to debug\n");
            res.end("notdone");
        }
    },3500); 
});
router.get('/',(req,res) => {
    console.log(req.session.email);
    if(req.session.email) {

        res.writeHead(201, { "Location": "http://" + req.headers['host'] + '/practice' });
    }
    else {
        res.render("index",{});
    }
});
module.exports=router;