const express = require('express');
const router =express.Router();
var problem_database=require('../models/problem_model');
router.get("/",function(req,res){
    res.render("question_adder_admin",{});
});
router.post("/problemset",function(req,res){
     var problemcode=req.body.problemcode;
     problemcode=problemcode.toString('ascii');
     var problemstatement=req.body.problemtext;
     problemstatement=problemstatement.toString('ascii');

     var input=req.body.input;
     input=input.toString('ascii');

     var output=req.body.output;
     output.toString('ascii');
     
     var problem1=new problem_database({
       problem_statement:problemstatement,
       problem_code:problemcode,
       input:input,
       output:output
     });
     console.log(problem1);
     problem_database.insertMany([problem1],function(err){
         if(err){
             console.log(err);
             res.send("error")
         }
         else {
             res.send("problem_inserted_successfully)");
         }
     });
});
module.exports=router;