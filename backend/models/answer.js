const mongoose=require('mongoose');
answerScheme=new mongoose.Schema(
    {
     QuestionId:
     {
         Type:String
     },
     AuthorID:
     {
         Type:String
     },
     Editorial:
     {
         Type:String
     },
     Code:
     {
         Type:String
     },
     Language:
     {
        Type:String
    },

    }
);
export default mongoose.model('answer',answerScheme);