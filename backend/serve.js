const express=require("express");
const bodyParser = require('body-parser');
const mongoose=require("mongoose");
const session = require('express-session');
const redis = require('redis');
const redisStore = require('connect-redis')(session);
const client  = redis.createClient();
const app=express();
const db = require('./config/keys').mongoURI;
const cors=require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));
app.set("view engine","ejs");

mongoose
  .connect(  
    db,
    { useNewUrlParser: true }
  )
  .then(function(){ 
    console.log('MongoDB Connected')
  })
  .catch(err => console.log(err));
  app.use(session({
    secret: 'ssshhhhh',
    // create new redis store.
    store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl : 260}),
    saveUninitialized: false,
    resave: false
}));

router=express.Router();

app.use('/',require('./routes/home'));
app.use('/signup',require('./routes/signup'));
app.use('/login',require('./routes/login'));
app.use('/logout',require('./routes/logout'));
app.use('/practice',require('./routes/practicepage'));
app.use('/compile',require('./routes/compiler'));
app.use('/leaderboard',require('./routes/leaderboard'));
app.use('/admin',require('./routes/question_adder_admin'));
app.use('/status',require('./routes/status'));
app.listen(3001,function(){
    console.log("Server started here you go!\n");
});