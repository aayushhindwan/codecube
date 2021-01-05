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
    { const e=data.payload.email;
      req.userId=data.payload.id;
      req.email=data.payload.email;
      req.username=e.substring(0,e.length-11);
      console.log("hii:",req.userImage);
      console.log(data);next();
    }
 });
  }
  else
  {console.log("hisssiii");res.status(400).send("no sign in");
   }
    
}