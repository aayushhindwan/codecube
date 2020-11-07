const mongoose=require("mongoose");
const  problem_schema = new mongoose.Schema({

  problem_statement:{
    type: String,
    required: true
  },
  problem_code: {
    type: String,
    required: true
  },
  input:{
    type: String,
    required: true
  },
  output: {
    type: String,
    required:true
  }
});
module.exports=mongoose.model("problem_database",problem_schema);