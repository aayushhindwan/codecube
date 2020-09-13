
const express=require('express')
const bodyParser=require('body-parser')
const session=require('express-session')
const redis=require('redis')

const auth=require('./utilities/auth.js')
const redisStore=require('connect-redis')(session);
const client  = redis.createClient();
app=express();
var cors = require('cors')

app.use(cors()) 
app.use(express.static('public'));
const mongoose=require('mongoose')
app.use(bodyParser.urlencoded({extented:true}));
app.use(bodyParser.json());
app.use(session({
  secret: 'ssshhhhh',
  // create new redis store.
  store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl : 260}),
  saveUninitialized: false,
  resave: false
}));
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://codecubeuser:codecode@cluster0.qe9uy.mongodb.net/codecubeDB?retryWrites=true&w=majority";
const atlasclient = new MongoClient(uri,{ useUnifiedTopology: true });
atlasclient.connect(err => {
  const collection = atlasclient.db("test").collection("devices");
  // perform actions on the collection object

atlasclient.close();
});
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router=express.Router();
app.use('/',require('./Routes/homepage'));
app.use('/question',require('./Routes/questions'));
app.use('/login',require('./Routes/login'));
app.use('/signup',require('./Routes/signup'));
app.use('/summary',require('./Routes/summary'));
app.use('/answer',require('./Routes/doubtanswer'));
app.use('/likes',require('./Routes/votes'));
app.use('/profile',require('./Routes/profile'));
app.get('/', function(req,res){
  console.log("hii"+req.session.email);
 //res.send("hii");
 res.sendfile('./testlogin.html');
});
app.listen(3001,function(){
  console.log("Server is running on port no 3001");
});