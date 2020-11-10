const express=require("express");
const router=express.Router();
const submission_database=require("../models/submission.js");

router.get('/',async (req,res)=> {

var submissions=[];
var ind=0;
//console.log(submissions);
await submission_database.find({},function(err,obj){
    if(err)
    console.log(err);
    else{
            obj.forEach(function(sub){
                //console.log(submissions);
                var xsubmission={
                    rank:ind+1,
                    status:sub.status,
                    name:sub.name,
                    problem_code:sub.problem_code,
                    time:sub.date,
                }
                submissions.push(xsubmission);
                ind++;
            });
        }
});

res.render("status",{submissions:submissions});
});
module.exports=router;