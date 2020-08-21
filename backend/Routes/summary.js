
const express=require('express');
const {spawn} = require('child_process');
const router=express.Router();
 router.post('/',async function(req,res){

   var text=req.body.text;
   console.log("hii"+text)
   var dataToSend ="great"
   const python = spawn('python3.7', ['./Python/summaryfile.py',text]);
python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
     dataToSend = data.toString();
    console.log("dsfgfhgjklml,"+dataToSend)
   });
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
   // console.log(dataToSend);
   res.send(dataToSend);
    })

   //res.send("hello");


 });
 module.exports=router;