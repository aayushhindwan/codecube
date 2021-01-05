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
router.get('/user',async function(req,res)
{
console.log("heyyyyyy");
x= await user.findById(req.userId,async function(err,data){
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
router.post('/user/',async function(req,res)
{
    var d=req.body;
    console.log("Update Request");
    console.log(d);
    if(d.ImageUrl.length>100){
   await base64Img.img(d.ImageUrl, './public', req.userId, function(err, filepath) {
        if(!err)
        {console.log(filepath);
            
          d["ImageUrl"]=domain+"/"+filepath.substring(7,filepath.length);
          
          console.log(d["ImageUrl"]);
          console.log("gh",d);
          user.updateOne({"Email":req.email},d,function (err, docs) { 
            if (err){ 
                res.status(400).send("Error in update");
            } 
            else{ 
                console.log("Updated Docs : ",docs); 
                res.status(200).send("updated");
               
            } 
        });
        }
        else
        {console.log("error in url conversion");
            console.log(err);
            res.status(400).send("Error in update");
        
        }
    });}
    else{
    user.updateOne({"Email":req.email},d,function (err, docs) { 
        if (err){ 
            res.status(400).send("Error in update");
        } 
        else{ 
            console.log("Updated Docs : ",docs); 
            res.status(200).send("updated");
           
        } 
    });
}
});

module.exports=router;