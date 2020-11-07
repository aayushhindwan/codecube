const mongoose=require("mongoose");
const leaderboard_schema=new mongoose.Schema({
    name:String,
    email:String,
    score:Number
});
module.exports=mongoose.model("leaderboard_database",leaderboard_schema);