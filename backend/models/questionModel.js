const mongoose=require('mongoose');

var questionSchema=new mongoose.Schema({
QuestionID:{
        type:String,
        required:false
    },
QuestionTitle:{
    type:String,
    required:true

},
QuestionBody:{
    type:String,
    required:true
},
QuestionTags:{
    type:String,
    required:true
},
UpVote:{
    type:Number,
    required:true
},
DownVote:{
    type:Number,
    required:true
}
});
module.exports= mongoose.model("question",questionSchema);