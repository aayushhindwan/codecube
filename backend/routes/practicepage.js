const express = require('express');
const request = require('request');
var problem_database = require('../models/problem_model');
var submission_database = require('../models/submission.js');
var user_submission_databse = require('../models/user_submission.js');
var leaderboard_database = require('../models/leader_model');
const router = express.Router();
var ind = 0;
var problemss = [];
var problem_object = [/*{problem_code:"problem_code",problem_statement:"problem_statement",input:"input",output:"output"}*/];
problem_database.find(function (err, problems) {
  if (err) {
    console.log(err);
  } 
  else {
    problems.forEach(function (problem) {
      if (problem.problem_code.length > 1) {
        problem_object[ind] = { problem_code: problem.problem_code, problem_statement: problem.problem_statement, input: problem.input, output: problem.output };
        problemss[ind] = problem.problem_code;
        ind++;
      }
    });
  }
});
setTimeout(function () {
}, 1500)
var arr = [{ lang: "java", version: "3" }, { lang: "c", version: "4" }, { lang: "cpp", version: "4" }, { lang: "cpp14", version: "3" }, { lang: "cpp17", version: "0" }, { lang: "python2", version: "2" }, { lang: "python3", version: "3" }]

router.get('/', async function(req, res) {

  ind = 0;
  problemss = [];
  problem_object = [/*{problem_code:"problem_code",problem_statement:"problem_statement",input:"input",output:"output"}*/];
 await  problem_database.find(function (err, problems) {
    if (err) {
      console.log(err);
    }
    else {
      problems.forEach(function (problem) {
        if (problem.problem_code.length > 1) {
          problem_object[ind] = { problem_code: problem.problem_code, problem_statement: problem.problem_statement, input: problem.input, output: problem.output };
          problemss[ind] = problem.problem_code;
          ind++;
        }
      });
    }
  });
  const express = require('express');
  const router = express.Router();
  
  res.render("practicepage", { problems: problemss });
});
router.post('/anyproblem', async function (req, res) {
  var problemcode = req.body.which_problem;
  for (let i = 0; i < ind; i++) {
    if (problem_object[i].problem_code == problemcode) {

    var inde=0;
    var submissions=[];

      await user_submission_databse.findOne({email:req.session.email},function(err,obj){
        if(err){
          console.log(err);
        }
        else if(obj!=null){
          obj.submissions.forEach(function(sub){
           if(sub.problem_code==problemcode){
             inde+=1;
             var xxx={
               rank:inde,
               status:sub.status,
               code:sub.code,
               time:sub.date
             }
             submissions.push(xxx);
           }
          });
        }
    });
      var pseudocode = "#include<iostream>\nusing namespace std;\nint main(){\nreturn 0;\n}"
      res.render("problempage", {submissions:submissions,problemcode: problem_object[i].problem_code, statement: problem_object[i].problem_statement, code: pseudocode, input: "INPUT", output: "", lang: "c / cpp /cpp14 /cpp17 /java /python2 /python3 " });
      break;
    }
  }
});
router.post('/check', function (req, res) {
  var code = req.body.code;
  var problemcode = req.body.problemcode;
  var lang = req.body.lang;
  code = code.toString('ascii'); problemcode = problemcode.toString('ascii'); lang = lang.toString('ascii');
  lang = lang.trim();
  problemcode = problemcode.trim();
  var version = "0";
  for (let i = 0; i < 7; i++) {
    if (arr[i].lang == lang) {
      version = lang.version;
      break;
    }
  }
  var answer = "NULL";
  for (let i = 0; i < ind; i++) {
    if (problem_object[i].problem_code == problemcode) {
      var input = problem_object[i].input;
      var out = problem_object[i].output;
      input = input.toString('ascii');
      out = out.toString('ascii');
      const options = {
        script: code,
        stdin: input,
        language: lang,
        versionIndex: version,
        clientId: '7d9991cbe222d3646bff319bf80f22f5',
        clientSecret: '43af25012171a821666830e737521534872365844c1b8dd4ffe85a9f0420c3d1'
      };
      var output = null;
      request.post({ url: 'https://api.jdoodle.com/execute', json: options },  (error, respo, body) => {
        if (error) {
          console.error(error);
          answer = "retry API IS LOST"
          res.send({ answer: answer });
        }
        else {
          output = body.output;
          if (output != undefined) {
            output = output.toString('ascii');
            output.replace(/(\r\n|\n|\r)/gm, "");
            output.replace(/(\r\n|\n|\r)/gm, "");
            output.replace(/\s+/g, " ");
            output.replace('\\n|\\r', '');
            output.trim();
          }
          out.replace(/(\r\n|\n|\r)/gm, "");;
          out.trim();
          var l1 = output.length;
          var l2 = out.length;
          let i = 0, j = 0;
          var x1 = [], x2 = [];
          while (i < output.length) {
            x1[i] = output.charCodeAt(i);
            i++;
          }
          while (j < out.length) {
            x2[j] = output.charCodeAt(j);
            j++;
          }
          var flag = true;
          i = 0;
          j = 0;
          while (i < l1 && j < l2) {
            if (x1[i] == 10) {
              i++;
            }
            else if (x2[j] == 10) {
              j++;
            }
            else {
              if (x1[i] != x2[j]) {
                flag = false;
                break;
              }
              i++;
              j++;
            }
          }
          while (i < l1) {
            if (x1[i] == 10 || x1[i] == 32) {
            }
            else {
              flag = false;
            }
            i++;
          }
          while (j < l2) {
            if (x2[j] == 10 || x2[j] == 32) {

            }
            else {
              flag = false;
            }
            j++;
          }
          if (flag) {
            answer = "ALL CORRECT";
          }
          else {
            answer = "NO BRO YOU MADE SOME ERROR";
          }
          var name = req.session.email;
          var email = name;
          var index = 0;
          submission_database.findOne({}, {}, { sort: { 'date': -1 } }, function (err, submission) {
            if (err) {
              index = 1;
            }
            else {
              if (submission) {
                index = submission.ID + 1;
              }
              else {
                index = 1;
              }
            }
          });
          var xsubmission={
            code: code,
            problem_code: problemcode,
            status: answer
          };
          var ok=0;
          var zz=0;
           user_submission_databse.findOne({ email: req.session.email },
          {returnOriginal:false},  function (err, obj) {
              console.log("Search Happened\n");
              if (err) {
                console.log("err");
                console.log(err);
              }
              else if (obj === null) {
                console.log("Hi");
                console.log(obj);
                var user_submission = new user_submission_databse({
                  name: name,
                  email: email,
                  submissions: [{
                    code: code,
                    problem_code: problemcode,
                    status: answer,
                  }],
                  solved: [{ problem_code: problemcode }]
                });
                 user_submission_databse.insertMany([user_submission], function (err) {
                  if (err) {
                    console.log(err);
                  }
                });
                 leaderboard_database.insertMany(new leaderboard_database({
                  name: name,
                  email: email,
                  score: 100
                }), function (err) {
                  console.log(err);
                });
              }
              else {
                zz=1;
                 obj.solved.forEach(function (ob) {
                  if (ob.problem_code == problemcode)
                    ok = 1;
                });
                console.log(ok);
              }
            }).then(function(){
              if(zz===1){
                user_submission_databse.updateOne({email:req.session.email},{$push: {submissions:xsubmission}},function(err){
                  if(err)
                  console.log(err);
                });
              }
              if(ok===0&&zz===1){
                user_submission_databse.updateOne({email:req.session.email},{$push:{solved:{problem_code:problemcode}}},function(err){
                  if(err)
                  console.log(err);
                });
                leaderboard_database.updateOne({email:req.session,email},{score:score+100},function(err){
                  if(err)
                  console.log(err);
                });
              }
            });
            var submission = new submission_database({
              name: name,
              email: email,
              code: code,
              problem_code: problemcode,
              status: answer,
              ID: index
            });
            submission_database.insertMany([submission], function (err) {
              if (err) {
                console.log(err);
              }
            });
              res.send({ answer: answer });
        }
      });
      break;
    }
    else {
    }
  }
});
module.exports = router;