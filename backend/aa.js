
const express=require('express')
const bodyParser=require('body-parser')
const session=require('express-session')
const redis=require('redis')

const auth=require('./utilities/auth.js')
//const redisStore=require('connect-redis')(session);
//const client  = redis.createClient();
app=express();

app.get('/', function(req,res){
  console.log("hii");
 //res.send("hii");
 res.sendfile('./testlogin.html');
});
app.listen(3002,function(){
  console.log("Server is running on port no 3001");
});