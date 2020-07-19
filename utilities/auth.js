
module.export=function(req,res,next)
{
  ss=req.session;
  if(ss.email)
  next();
  else
  res.redirect('/login');
    
}