const mongoose=require("mongoose");
const user_submission_schema=new mongoose.Schema({
    name:String,
    email:String,
    submissions:[{
    problem_code:String,
    code:String,
    date: {type: Date, 'default': Date.now, index: true},
    status:String,
    }],
    solved:[{
        problem_code:String
    }]
});
module.exports=mongoose.model("user_submission_database",user_submission_schema);