const cp = require('child_process');
const compiler = "g++";
const version = "-std=c++11";
const out ="-o";
const inpfile="input.txt"
const infile = "code-runner.cpp";
const outfile = "code-runner.out";
const command = "hello world";
cp.exec("g++ code-runner.cpp",(error,stdout,stderr)=>{
});
cp.exec("./a.out <input.txt >|output.txt",(error,stdout,stderr)=>{
    console.log(stdout);
});