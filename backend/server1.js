const express=require('express')
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extented:true}));
app.use(bodyParser.json());
app.post('/p',async function(req,res){
console.log(req.body);
res.send(req.body);
});
app.listen(3000,function(){
  console.log("Server is running on port no 3001");
});