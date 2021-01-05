//hello
const express=require('express');
const router=express.Router();
router.get('/aayu',function(req,res){
res.send("HELLo");
});
module.exports=router;  