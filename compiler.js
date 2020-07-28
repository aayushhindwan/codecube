const express = require('express');
const request = require('request');
const bodyparser=require("body-parser");

const app=express();
app.use(bodyparser.urlencoded({extended:true}));
  app.get('/edit',function(req,res){
    res.sendFile(__dirname+'/editor.html');
  });

  app.post('/code',function(req,res){
    console.log("hi");
    var code=req.body.code;
    var lang=req.body.lang;
     console.log(code+" "+lang);
    const options = {
      script : code,
      language: lang,
     versionIndex: "0",
     clientId: '7d9991cbe222d3646bff319bf80f22f5',
     clientSecret: '43af25012171a821666830e737521534872365844c1b8dd4ffe85a9f0420c3d1'
  };
  
  request.post({url: 'https://api.jdoodle.com/execute',json:options},(error, res, body) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(`statusCode: ${res.statusCode}`);
      console.log(body);
    });
  });

  app.listen(3000,function(err){
    if(err)
    console.log(err);
    else 
    console.log("dekh");
  });