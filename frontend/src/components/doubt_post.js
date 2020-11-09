import React, { useState} from 'react'
import PropTypes from 'prop-types'
import '../assests/scss/doubts.scss'
import {Button,Modal} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import  { Component } from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { Link, useHistory,withRouter} from "react-router-dom";
var g=[];
class Post_Doubt extends Component {

state={
  title:'',
  tags:[],
  body:'',

}

SubmitDoubt=(event)=>
{
  console.log(g);
  const response =  axios.post('http://localhost:3001/doubts/postQuestion', { "QuestionTitle": this.state.title,
    "QuestionTags": g,
    "QuestionBody": this.state.body,},{
      headers: {
        'authorization': 'Bearer '+ localStorage.Token,
      }
    }).then(res=>{
      console.log(res);
      if(res.status==202)
      this.props.history.push("/");
      else
      {
        alert("doubt posted");
        this.props.close();
      }
    });
  
 
this.setState({title: ''});
this.setState({tags: []});
this.setState({body:''});

 
  
}
handleTitleChange=(event)=> {
  console.log("changing");
    this.setState({title: event.target.value});

  }
  handleTagChange=(event)=> {
    this.setState({tags: event.target.value});

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
          g.push(tag.text);
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
render()
{
  return (
    
    <div  className="doubts-posts">
    <legend>Title</legend>
    <input type="text" placeholder="Title of doubts" onChange={this.handleTitleChange} value={this.state.title}/>
    <CKEditor 
          editor={ClassicEditor}
          data = {this.state.body}
          onChange={(e,editor)=> {
            console.log(editor.getData());
            this.setState({body:editor.getData()});
          }}
         />
         <legend>Tags</legend>
    {/* <input type="text" placeholder="tags of your doubts" onChange={this.handleTagChange} value={this.state.tags} /> */}
         <div className="tags-input" data-name="tags-input">
                {/* <span class="tag">HTML<span class="close"></span></span> */}
            </div>
    <br/>
    <Button onClick={this.SubmitDoubt} >Submit Doubt</Button>
    </div>     
        
  );
}
}

export default  withRouter(Post_Doubt)