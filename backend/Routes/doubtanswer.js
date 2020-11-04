const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const auth = require('../utilities/auth.js')
//router.use(auth);
const answerModel = require('../models/doubtAnswerModel');
router.get('/aaytu', function (req, res) {
  res.send("HELLo");
});
router.post('/postanswer/:id', async function (req, res) {
  console.log("answer post request came", req.params.id);

  /* const queryRes = await answerModel.findOne({ _id: req.params.id });
     queryRes.Answers.push({"aayu":"anki"});
     temp=await queryRes.save();
    */
  p = await answerModel.updateOne(
    { QuestionId: req.params.id },
    { $push: { Answers: { body: req.body.Body,postedBy: req.userId } } }
  );
  //console.log("answer altas response is",p);
  console.log("heloo posted ")
  res.send("answerposted");

});
router.get('/getanswer/:id', async function (req, res) {
  ans = await answerModel.findOne({ QuestionId: req.params.id });
  res.send(ans);
});
module.exports = router;