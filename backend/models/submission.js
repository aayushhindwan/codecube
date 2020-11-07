const mongoose=require("mongoose");
const submission_schema=new mongoose.Schema({
    name:String,
    email:String,
    problem_code:String,
    code:String,
    date: {type: Date, 'default': Date.now, index: true},
    status:String,
    ID: {type:Number,'default':0,index:true}
});
module.exports=mongoose.model("submission_database",submission_schema);