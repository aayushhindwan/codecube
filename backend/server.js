const express=require('express')
const bodyparser=require('body-parser')
app=express();
const mongoose=require('mongoose')
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://codecubeuser:codecode@cluster0.qe9uy.mongodb.net/codecubeDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router=express.Router();

