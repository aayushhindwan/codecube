import React, { Component ,Fragment} from 'react'
import PropTypes from 'prop-types'
import Post_Doubt from './doubt_post.js'
import '../assests/scss/practice.scss'
import 'react-image-crop/lib/ReactCrop.scss';
import ReactCrop from 'react-image-crop';
import Dropzone from 'react-dropzone'
import { Link } from 'react-router-dom';
import Axios from 'axios';

const imageMaxSize = 1000000000 // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})
export default class practice extends Component {

    constructor(props) {
        super(props);
       
      this.state = {
        selected : "question",
        crop : "",
        imgSrc : "",
        QuestionTitle:"XYZ",
     QuestionBody:"Body.........",
     Editorial:"Editorial............",
     Tags:[],
     }
      }
 
    componentDidMount(){

     Axios.get('http://localhost:3001/question/'+this.props.match.params.id,{
        headers: {
          'authorization': 'Bearer '+ localStorage.Token,
        }
      }).then((res)=>{
     console.log("hiiiiiii");    
     console.log(res.data);
     this.setState({
        QuestionTitle:res.data.QuestionTitle,
        QuestionBody:res.data.QuestionBody,
        Editorial:res.data.Editorial,
        Tags:res.data.Tags,
     })
     });



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
        {this.state.QuestionTitle}
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
                                 <div dangerouslySetInnerHTML={ { __html: this.state.QuestionBody } }></div>
                                    
                                     </div>  :
                                  <div className="details">
                                      <div dangerouslySetInnerHTML={ { __html: this.state.Editorial } }></div>
                                      </div> 

                         }
                    
                 </div>
                <a href ="#"><div>Practice this Question </div></a>
                 <div className="tags-container">
                       {this.state.Tags.map((data)=>{
                          return(
                           <div>{data}</div>
                          );
                       })}
                       
                       
                 </div>
                <div className="comments">
                    <div>Comments -</div>
                     <textarea>this is it</textarea>
                     <div className="previous-commnets">
                            <div>Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors:</div>
                            
                     </div>
                </div>
               
               </div>
               
               {/* <img src ={this.state.imgSrc} alt="no iamge" /> */}
           </div>
        
           </Fragment>
        )
    }
}
