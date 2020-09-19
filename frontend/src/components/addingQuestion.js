import React, { Component } from 'react'
import '../assests/scss/addingQuestion.scss'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class AddingQuestion extends Component {
    

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
            <div>
                  <div className="main-add-question-container">
                      <div>Please write your question briefly , So that it is easily to understand.</div>
                      <div className="add-question-title">Title</div>
                      <div className="ck-editor">
                      <CKEditor 
                        editor={ClassicEditor}
                        
                        />
                      </div>
                      <div className="add-question-title">Write the question</div>
                     <div className="question-body">
                         <textarea>write the body of the question</textarea>
                     </div>
                     <div className="add-question-title">Write the Editorial</div>

                     <div className="question-body">
                         <textarea>write the body of the question</textarea>
                     </div>

                     <div className="add-question-title">Add the tags</div>
                     <div className="tags-input" data-name="tags-input">
                      {/* <span class="tag">HTML<span class="close"></span></span> */}
                     </div>
                  </div>
            </div>
        )
    }
}
