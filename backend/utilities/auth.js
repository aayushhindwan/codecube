
module.exports =function(req,res,next)
{
  ss=req.session;
  console.log("session email=",ss.email);
  if(ss.email)
  {next();
  return}
  else
  return res.redirect('http://localhost:3001/login');
    
}