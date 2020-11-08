const express=require('express');
const router=express.Router();
const user_database=require('../models/user');

router.get('/',function(req,res){
res.render("signup",{});
});
router.post("/signup",function(req,res){
    var email=req.body.email;
    var pass=req.body.pass;

    let user=new user_database({
        email:email,
        password:pass
    });
    user_database.insertMany([user],function(err){
        if(err)
        {
            res.end("not_done")
            console.log(err);
        }
        else 
        {
            console.log(email+" "+pass);
            console.log("User signed up\n");
            res.end("done");
        }
    });
});
module.exports=router;