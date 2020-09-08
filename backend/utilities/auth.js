
module.exports =function(req,res,next)
{
  ss=req.session;
  if(ss.email)
  {next();
  return}
  else
  return res.redirect('http://localhost:3001/login');
    
}