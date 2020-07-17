const mongoose=require('mongoose');

var questionSchema=new Schema({
QuestionID:{
        Type:String
    },
QuestionTitle:{
    Type:String
},
QuestionBody:{
    Type:String
},
UpVote:{
    Type:Number
},
DownVote:{
    Type:Number
}
});
export default mongoose.model("question",questionSchema);