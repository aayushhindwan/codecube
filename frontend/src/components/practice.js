import React, { Component ,Fragment} from 'react'
import PropTypes from 'prop-types'
import Post_Doubt from './doubt_post.js'
import '../assests/scss/practice.scss'

import 'react-image-crop/lib/ReactCrop.scss';
import ReactCrop from 'react-image-crop';
import Dropzone from 'react-dropzone'
import { Link } from 'react-router-dom';

const imageMaxSize = 1000000000 // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})
export default class practice extends Component {
 
    constructor(props) {
        super(props);
       
      this.state = {
        selected : "question",
        crop : "",
        imgSrc : ""
     }
      }
 


    //  verifyFile = (files) => {
    //     if (files && files.length > 0){
    //         const currentFile = files[0]
    //         const currentFileType = currentFile.type
    //         const currentFileSize = currentFile.size
    //         if(currentFileSize > imageMaxSize) {
    //             alert("This file is not allowed. " + currentFileSize + " bytes is too large")
    //             return false
    //         }
    //         if (!acceptedFileTypesArray.includes(currentFileType)){
    //             alert("This file is not allowed. Only images are allowed.")
    //             return false
    //         }
    //         return true
    //     }
    // }
     
    // handleOnDrop(files, rejectedFiles){
    //     if (rejectedFiles && rejectedFiles.length > 0){
    //         this.verifyFile(rejectedFiles)
    //     }


    //     if (files && files.length > 0){
    //          const isVerified = this.verifyFile(files)
    //          if (isVerified){
    //              // imageBase64Data 
    //              const currentFile = files[0]
    //              const myFileItemReader = new FileReader()
    //              myFileItemReader.addEventListener("load", ()=>{
    //                  // console.log(myFileItemReader.result)
    //                  const myResult = myFileItemReader.result
    //                  this.setState({
    //                      imgSrc: myResult,
    //                     //  imgSrcExt: extractImageFileExtensionFromBase64(myResult)
    //                  })
    //              }, false)

    //              myFileItemReader.readAsDataURL(currentFile)

    //          }
    //     }
    // }

    componentDidMount(){
        [].forEach.call(document.getElementsByClassName('tags-input'), function (el) {
          let hiddenInput = document.createElement('input'),
              mainInput = document.createElement('input'),
              tags = [];
          
          hiddenInput.setAttribute('type', 'hidden');
          hiddenInput.setAttribute('name', el.getAttribute('data-name'));
      
          mainInput.setAttribute('type', 'text');
          mainInput.classList.add('main-input');
          mainInput.addEventListener('input', function () {
              let enteredTags = mainInput.value.split(' ');
              if (enteredTags.length > 1) {
                  enteredTags.forEach(function (t) {
                      let filteredTag = filterTag(t);
                      if (filteredTag.length > 0)
                          addTag(filteredTag);
                  });
                  mainInput.value = '';
              }
          });
      
          mainInput.addEventListener('keydown', function (e) {
              let keyCode = e.which || e.keyCode;
              if (keyCode === 8 && mainInput.value.length === 0 && tags.length > 0) {
                  removeTag(tags.length - 1);
              }
          });
      
          el.appendChild(mainInput);
          el.appendChild(hiddenInput);
      
          addTag('hello!');
      
          function addTag (text) {
              let tag = {
                  text: text,
                  element: document.createElement('span'),
              };
      
              tag.element.classList.add('tag');
              tag.element.textContent = tag.text;
      
              let closeBtn = document.createElement('span');
              closeBtn.classList.add('close');
              closeBtn.addEventListener('click', function () {
                  removeTag(tags.indexOf(tag));
              });
              tag.element.appendChild(closeBtn);
      
              tags.push(tag);
      
              el.insertBefore(tag.element, mainInput);
      
              refreshTags();
          }
      
          function removeTag (index) {
              let tag = tags[index];
              tags.splice(index, 1);
              el.removeChild(tag.element);
              refreshTags();
          }
      
          function refreshTags () {
              let tagsList = [];
              tags.forEach(function (t) {
                  tagsList.push(t.text);
              });
              hiddenInput.value = tagsList.join(',');
          }
      
          function filterTag (tag) {
              return tag.replace(/[^\w -]/g, '').trim().replace(/\W+/g, '-');
          }
      });
      }


    render() {
        return (
           <Fragment>
           <div>
               <div className="main-practice-container">
                 <div className="practice-title">
                 Knapsack problem - Java solution with thinking process O(nm) Time and O(m) Space
                 Knapsack problem - Java solution with thinking process O(nm) Time and O(m) Space
                 Knapsack problem - Java solution with thinking process O(nm) Time and O(m) Space
                 Knapsack problem - Java solution with thinking process O(nm) Time and O(m) Space
                 </div>
                 <div className="sub-details">
                     <div className="toggle-question">
                          <div id="question"
                          style={{boxShadow : (this.state.selected==="question")? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" : null,
                                background:(this.state.selected==="question") ? "grey":null,
                                color : (this.state.selected==="question") ? "white":null
                                 }}
                           onClick={() => {
                            this.setState({selected:"question"})
                            document.getElementById("question").style.cssText = " box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                            document.getElementById("editorial").style.cssText = " box-shadow: none,color:black"

                        }}
                          >QUESTION</div>
                          <div
                          id="editorial"
                          onClick={() => {
                              this.setState({selected:"editorial"})
                              document.getElementById("editorial").style.cssText = " box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                              document.getElementById("question").style.cssText = "box-shadow:none,background:none,color:black"
                          }}
                          style={{boxShadow : (this.state.selected==="editorial")? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" : null,
                                background:(this.state.selected==="editorial") ? "grey":null,
                                color : (this.state.selected==="editorial") ? "white":null
                                 }}
                          >EDITORIAL</div>
                     </div>
                     {
                             (this.state.selected === "question") ?
                                <div className="details">
                         
                                This problem is essentially let us to find whether there are several numbers in a set which are able to sum to a specific value (in this problem, the value is sum/2).
        
                                Actually, this is a 0/1 knapsack problem, for each number, we can pick it or not. Let us assume dp[i][j] means whether the specific sum j can be gotten from the first i numbers. If we can pick such a series of numbers from 0-i whose sum is j, dp[i][j] is true, otherwise it is false.
        
                                Base case: dp[0][0] is true; (zero number consists of sum 0 is true)
        
                                Transition function: For each number, if we don't pick it, dp[i][j] = dp[i-1][j], which means if the first i-1 elements has made it to j, dp[i][j] would also make it to j (we can just ignore nums[i]). If we pick nums[i]. dp[i][j] = dp[i-1][j-nums[i]], which represents that j is composed of the current value nums[i] and the remaining composed of other previous numbers. Thus, the transition function is dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]] 
                                 </div>  :
                                  <div className="details">
                                      This is a classic knapsack problem. Honestly, I'm not good at knapsack problem, it's really tough for me.

                                        dp[i][j] : the number of combinations to make up amount j by using the first i types of coins
                                        State transition:

                                        not using the ith coin, only using the first i-1 coins to make up amount j, then we have dp[i-1][j] ways.
                                        using the ith coin, since we can use unlimited same coin, we need to know how many ways to make up amount j - coins[i-1] by using first i coins(including ith), which is dp[i][j-coins[i-1]]
                                        Initialization: dp[i][0] = 1

                                        Once you figure out all these, it's easy to write out the code:
                                    </div> 

                         }
                    
                 </div>
                <a href ="#"><div>Practice the question </div></a>
                 <div className="tags-container">
                       <div>c</div>
                       <div>java</div>
                       <div>c++</div>
                 </div>
                <div className="comments">
                    <div>Comments -</div>
                     <textarea>this is it</textarea>
                     <div className="previous-commnets">
                            <div>Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors:</div>
                            <div>Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors:</div>
                            <div>Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors:</div>
                            <div>Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors:</div>

                     </div>
                </div>
               
               </div>
               <Link to ="/contribute"><h4>Want to contribute question ! You are most welcome</h4></Link>
               {/* <img src ={this.state.imgSrc} alt="no iamge" /> */}
           </div>
        
           </Fragment>
        )
    }
}
  
                 {/* <Dropzone onDrop={acceptedFiles => {
                     console.log(acceptedFiles)
                     
                     console.log(acceptedFiles[0].path)
                     this.setState({imgSrc : acceptedFiles[0].path})
                 }}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                    </section>
                                )}
                             </Dropzone> */}