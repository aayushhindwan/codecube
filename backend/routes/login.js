const express=require('express')
const jwt=require('jsonwebtoken');
const router=express.Router();
const userInfoModel=require('../models/userInfoModel');
const { response } = require('express');
const session = require('express-session')
var cors = require('cors');
router.use(cors({
    origin: [
      'http://192.168.1.6:3000',
      
    ],
    credentials: true,
    exposedHeaders: ['set-cookie']
  }));
router.use(cors({origin: "http://192.168.1.6:3000",
credentials: true}))
/*const redis = require('redis')

const redisStore=require('connect-redis')(session);
const client  = redis.createClient();
router.use(session({
secret: 'ssshhhhh',
// create new redis store.
store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl : 260}),
saveUninitialized: false,
resave: false
}));*/
router.post('/', async function(req,res){
    
    console.log("login request");
    var e=req.body.email;
    var p=req.body.password;
    console.log(e);
    var x;var y=0;
    
 x=  await userInfoModel.findOne({Email:e,Password:p},function(err,obj){
     if(err)
     {
      console.log(err);res.status(400).send("error");
     }
     else{
    console.log("no error in finding");
	     
	   //  console.log(obj);y=1;
if(obj)
{  console.log(e);
    //req.session.email="aayush";
     var payload={email:e,id:obj._id};
        jwt.sign({payload},'nitp',(err,token)=>{
if(!err)
res.status(200).send(token);
else
res.status(400).send("error");
        });
}
else
    res.status(400).send("email/password doesn't matched");
   // console.log("email password found",x,y);
     }
});

});
router.get('/aaytu',function(req,res){
   // req.session.email="dfghjk";
    console.log("came",req.session);
   
    res.send('./n.html');
    });
 router.get('/', function(req,res){
     console.log("hii");
    //res.send("hii");
    res.sendfile('./testlogin.html');
});
module.exports=router;