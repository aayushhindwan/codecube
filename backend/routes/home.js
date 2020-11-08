const express = require('express');
const router = express.Router();
router.get('/',(req,res) => {
    if(req.session.email) {
        res.redirect('/practice');
    }
    else {
        res.render("index",{});
    }
});
module.exports=router;