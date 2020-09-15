const express=require('express')
const router=express.Router();
const userInfoModel=require('../models/userInfoModel');
const { response } = require('express');
const session = require('express-session');
flag=0;
app=express();
const {OAuth2Client} = require('google-auth-library');
const { google } = require('googleapis');
const client = new OAuth2Client("258477313309-snurla5fk014olsr8p6l79fq78gbf5ds.apps.googleusercontent.com");
async function verify(tk) {
  const ticket = await client.verifyIdToken({
      idToken: tk,
      audience: "258477313309-snurla5fk014olsr8p6l79fq78gbf5ds.apps.googleusercontent.com" 
  });
  //const payload = ticket.getPayload();
  //const userid = payload['sub'];
        return ticket;
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}


app.get('/aaytu',async function(req,res){
  var k= await verify("eyJhbGciOiJSUzI1NiIsImtpZCI6IjNmMzMyYjNlOWI5MjhiZmU1MWJjZjRmOGRhNTQzY2M0YmQ5ZDQ3MjQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMjU4NDc3MzEzMzA5LXNudXJsYTVmazAxNG9sc3I4cDZsNzlmcTc4Z2JmNWRzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMjU4NDc3MzEzMzA5LXNudXJsYTVmazAxNG9sc3I4cDZsNzlmcTc4Z2JmNWRzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2ODIzNTgyMTcwNjczOTE2NzAwIiwiaGQiOiJuaXRwLmFjLmluIiwiZW1haWwiOiJhYXl1c2hoLnVnMTguY3NAbml0cC5hYy5pbiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoibHYxaVo1UzV5V3ZQQ0pOMXlDLWZ6ZyIsIm5hbWUiOiJBQVlVU0ggSElORFdBTiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHak1kVDdLeVdQYjhIZDhxcUNIckhNS3pYbGdGdXk2RHhRd2pwMXo9czk2LWMiLCJnaXZlbl9uYW1lIjoiQUFZVVNIIiwiZmFtaWx5X25hbWUiOiJISU5EV0FOIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2MDAxNTkxNTQsImV4cCI6MTYwMDE2Mjc1NCwianRpIjoiYmRlOTAxY2RiZDhkMmE5OTMyMmJhOTc0ODZiOTdlYjMxYTIwYmNiYyJ9.Sz4vqAmwfeupkZ0HmZenh9aUYJqv-9Ybh3FSIBlF290eba3OTIw9mvgs9Y75Vif04ibnaRMEf9X-nEeEXGI4QM6AjTLf2mrm3FRPxlVpEH8an0xGG70dvcHo_t6qJfgz0gh6NclHO3acfDZ6ekJ_cryNSVQReAAErNJoYfEDaunP_VBdu-xZmqu_lrN5WtqL2XAviq18kXidyr7AJop_34he9aPKQ96IgnTI32-ri_5ZtcmrHGX3d4RxejhHq_zE_rjMPWsT0ljzwNoJ-Dsh5ZWqZ10wpDxBlt272lVtSzxjRako_43W_1Cm74jXaQF1-6BtqjZ5np4DUXFgABeBzA").catch(console.error);
    console.log(k.getPayload()['sub']);
    res.send("gg")
   
    });
 
    app.listen(3005,function(){
        console.log("Server is running on port no 3001");
      });