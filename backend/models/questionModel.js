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
Tags:{
    type:Array,
    required:true
},
QuestionUser:{
    type:String,
    required:true
},
QuestionUserImage:
{
    type:String,
    default:"https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg",
},
UpVote:{
    type:Number,
    required:true
},
DownVote:{
    type:Number,
    required:true
},
}, { timestamps: true });
module.exports= mongoose.model("question",questionSchema);