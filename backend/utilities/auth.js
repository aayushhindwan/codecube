
module.exports =function(req,res,next)
{
  ss=req.session;
  if(ss.email)
  {next();
  return}
  else
  return res.send("login kr bro");
    
}