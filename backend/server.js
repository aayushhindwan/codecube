
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const redis = require('redis')

const auth = require('./utilities/auth.js')
const redisStore=require('connect-redis')(session);
const client  = redis.createClient();
app = express();
var cors = require('cors')
app.use(cors({
  origin: [
    'http://localhost:3000',
    
  ],
  credentials: true,
  exposedHeaders: ['set-cookie']
}));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));
app.set("view engine","ejs");

app.use(cors())
app.use(express.static('public'));
const mongoose = require('mongoose')
//app.use(bodyParser.urlencoded({ extented: true }));
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
const atlasclient = new MongoClient(uri, { useUnifiedTopology: true });
atlasclient.connect(err => {
  const collection = atlasclient.db("test").collection("devices");
  // perform actions on the collection object

  atlasclient.close();
})
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
router = express.Router();
app.use('/login', require('./Routes/login'));
app.use('/signup', require('./Routes/signup'));
app.use(auth);
app.use('/', require('./Routes/homepage'));
app.use('/doubts', require('./Routes/questions'));
app.use('/summary', require('./Routes/summary'));
app.use('/answer', require('./Routes/doubtanswer'));
app.use('/likes', require('./Routes/votes'));
app.use('/profile', require('./Routes/profile'));
app.use('/articles', require('./Routes/articles'));
app.use('/question', require('./Routes/CodingQuestion'));
app.use('/compiler', require('./Routes/Compilers'));
app.use('/',require('./routes/home'));
app.use('/signup',require('./routes/signup'));
app.use('/login',require('./routes/login'));
app.use('/logout',require('./routes/logout'));
app.use('/practice',require('./routes/practicepage'));
app.use('/compile',require('./routes/compiler'));
app.use('/leaderboard',require('./routes/leaderboard'));
app.use('/admin',require('./routes/question_adder_admin'));
app.use('/status',require('./routes/status'));


app.get('/isSignedIn',async function(req,res){
  console.log("hii");
if(req.email)
 res.status(200).send("Yes");
 else
 res.status(202).send("No");

});
app.get('/', function (req, res) {
  console.log("hii");
  
  //res.send("hii");
  res.sendfile('./testlogin.html');
});
app.post('/p', async function (req, res) {
  console.log(req.body);
  res.send(req.body);
});
app.listen(3001, function () {
  console.log("Server is running on port no 3001");
});
