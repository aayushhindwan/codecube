
const express=require('express')
const bodyParser=require('body-parser')
const session=require('express-session')
const redis=require('redis')
const redisStore=require('connect-redis')(session);
const client  = redis.createClient();
app=express();
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

app.listen(3000,function(){
  console.log("Server running on port no 3000");
});