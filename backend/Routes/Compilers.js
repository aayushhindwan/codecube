const express=require('express')
const router=express.Router();
const userInfoModel=require('../models/userInfoModel');
const { response } = require('express');
const session = require('express-session');
const cp = require('child_process');
const compiler = "g++";
const version = "-std=c++11";
const out ="-o";
const inpfile="input.txt"
const infile = "code-runner.cpp";
const outfile = "code-runner.out";
const command = "hello world";
var fs = require('fs');
const { stdout } = require('process');
router.post('/c',async function(req,res){
console.log("hello bh");
var code=req.body.code;
var input=req.body.input;var p;var ans="k.k";
p=await fs.writeFile('./compilerfiles/input.txt', input, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
p=await fs.writeFile('./compilerfiles/code-runner.cpp',code,  function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  
p=await cp.exec("g++ ./compilerfiles/code-runner.cpp",(error,stdout,stderr)=>{
   console.log("ho gaya");
});
p=await cp.exec("./a.out <./compilerfiles/input.txt", (error,stdout,stderr)=>{
    console.log(stdout);
   ans=stdout;
   res.send(ans);

});

//res.JSON("hey");
res.send("kl");

})
module.exports=router;