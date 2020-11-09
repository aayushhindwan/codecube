const jwt=require('jsonwebtoken')
module.exports =function(req,res,next)
{
bearerHeader=req.headers['authorization'];
console.log("auth middleware");
if(bearerHeader !== undefined)
{
bearer=bearerHeader.split(' ');
token=bearer[1];
 jwt.verify(token,'nitp',(err,data)=>{
   if(err)
   {   console.log("hello");
     res.status(202).send("No sign in");}
    else
    { req.userId=data.payload.id;
      req.email=data.payload.email;
      console.log("hii",req.userId);
      console.log(data);next();
    }
 });
  }
  else
  {console.log("hisssiii");res.status(400).send("no sign in");
}
    
}