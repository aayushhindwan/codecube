const express = require('express');
const request = require('request');
const router= express.Router();
  router.get('/',function(req,res){
    res.render("test1",{lang:"c / cpp /cpp14 /cpp17 /java /python2 /python3 ",input:"INPUT",output:"OUTPUT",code:"#include<bits/stdc++.h>"});
  });
  var arr=[{lang:"java",version:"3"},{lang:"c",version:"4"},{lang:"cpp",version:"4"},{lang:"cpp14",version:"3"},{lang:"cpp17",version:"0"},{lang:"python2",version:"2"},{lang:"python3",version:"3"}]
  router.post('/codes',function(req,res){
    var code=req.body.code;
    var lang=req.body.lang;
    var input=req.body.input;
    code=code.toString('ascii');
    lang=lang.toString('ascii');
    lang=lang.trim();
    input=input.toString('ascii');
   var version="0";
   for(let i=0;i<7;i++) 
   {
     if(arr[i].lang==lang)
     {
       version=lang.version;
       break;
     }
   }
    const options = {
      script : code,
      stdin:input,
      language: lang,
     versionIndex:version,
     clientId: '7d9991cbe222d3646bff319bf80f22f5',
     clientSecret: '43af25012171a821666830e737521534872365844c1b8dd4ffe85a9f0420c3d1'
  };
    var output=null;
  request.post({url: 'https://api.jdoodle.com/execute',json:options},(error, respo, body) => {
      if (error) {
        console.error(error);
        return;
      }
      else 
      {
      console.log(body);
      output=body.output;
      res.send({lang:lang,input:input,output:output,code:code});
      }
    });

  });

  module.exports=router;