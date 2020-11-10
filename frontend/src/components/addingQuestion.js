import React, { Component } from 'react'
import '../assests/scss/addingQuestion.scss'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from 'react-bootstrap';
import axios from 'axios';import domain from '../domain.js'
var tg=[];
export default class AddingQuestion extends Component {
    state={
        QuestionTitle:"a",QuestionBody:"a", Editorial:"a"
    }
    submitQuestion=()=>
    {
        axios.post(domain+'/question',{
            QuestionTitle:this.state.QuestionTitle,
            QuestionBody:this.state.QuestionBody,
            Tags:tg,
            Editorial:this.state.Editorial,
          }).then((res)=>{
            if(res.status==200)
            {
              alert(res.data);
            }
            else
            {
              alert (res.data);
            }
          }).catch((err)=>{alert(err)});
        
    }

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
              tg.push(tag.text);
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
            <div>
                  <div className="main-add-question-container">
                      <div>Please write your question briefly , So that it is easily to understand.</div>
                      <div className="add-question-title">Title</div>
                      <div className="question-body">
                      <input value={this.state.QuestionTitle} onChange={(event)=>{ this.setState({QuestionTitle:event.target.value})}} type="text"/></div>
                      <div className="add-question-title">Write the Body</div>
                     <div className="question-body">
                     <div className="ck-editor">
                      <CKEditor 
                        editor={ClassicEditor}
                        data = {this.state.QuestionBody}
                         onChange={(e,editor)=> {
                      console.log(editor.getData());
                 this.setState({QuestionBody:editor.getData()});
          }}
                        />
                      </div>
                         
                     </div>
                     <div className="add-question-title">Write the Editorial</div>
                     <div className="question-body">``
                     <div className="ck-editor">
                      <CKEditor 
                        editor={ClassicEditor}
                        data = {this.state.Editorial}
                         onChange={(e,editor)=> {
                      console.log(editor.getData());
                 this.setState({Editorial:editor.getData()});
          }}
                        />
                      </div>
                      </div>
                     <div className="add-question-title">Add the tags</div>
                     <br/>
                     <div className="tags-input" data-name="tags-input">
                      {/* <span class="tag">HTML<span class="close"></span></span> */}
                     </div>
                     <Button onClick={this.submitQuestion}>Submit</Button>
                  </div>
              
            </div>
        )
    }
}
